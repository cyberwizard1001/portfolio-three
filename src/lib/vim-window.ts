// Shared scroll-jacking + vim-mode behaviour for the sticky "vim window" pattern
// used on project, ai, accessibility, colophon, and tokens pages. Markup must
// tag the wrapper/body with `.vim-window` / `.vim-window-body` alongside any
// page-specific classes used for styling.
export function initVimWindow() {
  const posEl = document.querySelector<HTMLElement>('.vs-pos');
  const pctEl = document.querySelector<HTMLElement>('.vs-pct');
  const body = document.querySelector<HTMLElement>('.vim-window-body');
  const wrapper = document.querySelector<HTMLElement>('.vim-window');
  const windowEl = document.querySelector<HTMLElement>('.vim-window .window');
  if (!posEl || !pctEl || !body || !wrapper || !windowEl) return;

  const mobile = () => window.matchMedia('(max-width: 860px)').matches;
  const STICKY_TOP = 'calc(var(--bar-h) + 1rem)';

  let maxScroll = 0;

  const measure = () => {
    if (mobile()) {
      wrapper.style.height = '';
      maxScroll = 0;
      return;
    }
    maxScroll = Math.max(0, body.scrollHeight - body.clientHeight);
    const windowHeight = windowEl.getBoundingClientRect().height;
    wrapper.style.height = `${windowHeight + maxScroll}px`;
  };

  const stickyTopPx = () => {
    const probe = document.createElement('div');
    probe.style.cssText = `position: fixed; visibility: hidden; top: ${STICKY_TOP};`;
    document.body.appendChild(probe);
    const top = probe.getBoundingClientRect().top;
    probe.remove();
    return top;
  };

  let line = 1;
  const updatePct = (ratio: number) => {
    line = Math.max(1, Math.round(ratio * 240) + 1);
    posEl.textContent = `${line}:1`;
    pctEl.textContent = ratio <= 0 ? 'Top' : `${Math.round(ratio * 100)}%`;
  };

  const onScroll = () => {
    if (mobile() || maxScroll <= 0) {
      const ratio = mobile() && body.scrollHeight > body.clientHeight
        ? body.scrollTop / (body.scrollHeight - body.clientHeight)
        : 0;
      updatePct(ratio);
      return;
    }
    const rect = wrapper.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (stickyTopPx() - rect.top) / maxScroll));
    body.scrollTop = progress * maxScroll;
    updatePct(progress);
  };

  measure();
  onScroll();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    measure();
    onScroll();
  });
  if (mobile()) body.addEventListener('scroll', onScroll, { passive: true });

  // --- vim mode (opt-in) ---
  const modeEl = document.querySelector<HTMLElement>('.vs-mode');
  const toggleEl = document.querySelector<HTMLButtonElement>('.vs-toggle');
  const helpEl = document.querySelector<HTMLElement>('.vs-help');
  const searchEl = document.querySelector<HTMLInputElement>('.vs-search');
  if (!modeEl || !toggleEl || !helpEl || !searchEl) return;

  const STORAGE_KEY = 'vim-mode-enabled';
  const LINE_PX = 24;
  let vimEnabled = localStorage.getItem(STORAGE_KEY) === 'true';
  let mode: 'NORMAL' | 'INSERT' | 'VISUAL' = 'NORMAL';
  let lastQuery = '';
  let pendingG = false;
  let pendingGTimeout: ReturnType<typeof setTimeout> | null = null;
  let matches: HTMLElement[] = [];
  let matchIndex = -1;

  const setMode = (next: typeof mode) => {
    mode = next;
    modeEl.textContent = mode;
    modeEl.classList.toggle('vs-mode--insert', mode === 'INSERT');
    modeEl.classList.toggle('vs-mode--visual', mode === 'VISUAL');
  };

  const applyVimEnabled = () => {
    toggleEl.textContent = vimEnabled ? 'vim: on' : 'vim: off';
    toggleEl.setAttribute('aria-pressed', String(vimEnabled));
    helpEl.classList.toggle('is-visible', vimEnabled);
    if (!vimEnabled) {
      setMode('NORMAL');
      searchEl.classList.remove('is-active');
      searchEl.blur();
      clearMatches();
    }
  };

  toggleEl.addEventListener('click', () => {
    vimEnabled = !vimEnabled;
    localStorage.setItem(STORAGE_KEY, String(vimEnabled));
    applyVimEnabled();
  });

  const scrollToRatio = (ratio: number) => {
    if (mobile() || maxScroll <= 0) return;
    const rect = wrapper.getBoundingClientRect();
    const target = stickyTopPx() - ratio * maxScroll;
    window.scrollBy(0, rect.top - target);
  };

  const clearMatches = () => {
    for (const mark of matches) {
      const parent = mark.parentNode;
      if (!parent) continue;
      parent.replaceChild(document.createTextNode(mark.textContent ?? ''), mark);
      parent.normalize();
    }
    matches = [];
    matchIndex = -1;
  };

  applyVimEnabled();

  const buildMatches = (query: string) => {
    clearMatches();
    if (!query) return;
    const needle = query.toLowerCase();
    const walker = document.createTreeWalker(body!, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const parentTag = node.parentElement?.tagName;
        if (parentTag === 'SCRIPT' || parentTag === 'STYLE') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const textNodes: Text[] = [];
    let node: Node | null;
    while ((node = walker.nextNode())) textNodes.push(node as Text);

    for (const textNode of textNodes) {
      const text = textNode.textContent ?? '';
      const lower = text.toLowerCase();
      let from = 0;
      let idx = lower.indexOf(needle, from);
      if (idx === -1) continue;

      const frag = document.createDocumentFragment();
      while (idx !== -1) {
        frag.appendChild(document.createTextNode(text.slice(from, idx)));
        const mark = document.createElement('mark');
        mark.className = 'vs-match';
        mark.textContent = text.slice(idx, idx + needle.length);
        frag.appendChild(mark);
        matches.push(mark);
        from = idx + needle.length;
        idx = lower.indexOf(needle, from);
      }
      frag.appendChild(document.createTextNode(text.slice(from)));
      textNode.parentNode?.replaceChild(frag, textNode);
    }
  };

  const goToMatch = (index: number) => {
    if (matches.length === 0) return;
    if (matchIndex >= 0) matches[matchIndex].classList.remove('vs-match--current');
    matchIndex = ((index % matches.length) + matches.length) % matches.length;
    const matchEl = matches[matchIndex];
    matchEl.classList.add('vs-match--current');

    if (mobile()) {
      matchEl.scrollIntoView({ block: 'center' });
      return;
    }
    if (maxScroll <= 0) return;

    const bodyRect = body!.getBoundingClientRect();
    const matchRect = matchEl.getBoundingClientRect();
    const targetOffset = body!.scrollTop + (matchRect.top - bodyRect.top);
    const desiredScrollTop = Math.min(maxScroll, Math.max(0, targetOffset - body!.clientHeight / 3));
    scrollToRatio(desiredScrollTop / maxScroll);
  };

  const flashNoMatch = () => {
    searchEl.classList.add('vs-search--nomatch');
    setTimeout(() => searchEl.classList.remove('vs-search--nomatch'), 300);
  };

  const openSearch = () => {
    setMode('NORMAL');
    searchEl.classList.add('is-active');
    searchEl.value = '';
    searchEl.focus();
  };

  const closeSearch = () => {
    searchEl.classList.remove('is-active');
    searchEl.blur();
  };

  searchEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      lastQuery = searchEl.value;
      buildMatches(lastQuery);
      if (matches.length > 0) goToMatch(0);
      else if (lastQuery) flashNoMatch();
      closeSearch();
    } else if (e.key === 'Escape') {
      closeSearch();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (!vimEnabled || mobile()) return;
    const target = e.target as HTMLElement;
    if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return;
    if (e.metaKey || e.altKey) return;

    if (e.key === 'Escape') {
      setMode('NORMAL');
      return;
    }
    if (e.key === 'i' && !e.ctrlKey) {
      e.preventDefault();
      setMode('INSERT');
      return;
    }
    if (e.key === 'v' && !e.ctrlKey) {
      e.preventDefault();
      setMode('VISUAL');
      return;
    }
    if (mode !== 'NORMAL') return;

    if (e.ctrlKey) {
      if (e.key === 'd') { e.preventDefault(); window.scrollBy(0, window.innerHeight / 2); }
      else if (e.key === 'u') { e.preventDefault(); window.scrollBy(0, -window.innerHeight / 2); }
      else if (e.key === 'f') { e.preventDefault(); window.scrollBy(0, window.innerHeight); }
      else if (e.key === 'b') { e.preventDefault(); window.scrollBy(0, -window.innerHeight); }
      return;
    }

    switch (e.key) {
      case 'j':
      case 'ArrowDown':
        e.preventDefault();
        window.scrollBy(0, LINE_PX);
        break;
      case 'k':
      case 'ArrowUp':
        e.preventDefault();
        window.scrollBy(0, -LINE_PX);
        break;
      case 'g':
        if (pendingG) {
          e.preventDefault();
          scrollToRatio(0);
          pendingG = false;
          if (pendingGTimeout) clearTimeout(pendingGTimeout);
        } else {
          pendingG = true;
          pendingGTimeout = setTimeout(() => { pendingG = false; }, 400);
        }
        break;
      case 'G':
        e.preventDefault();
        scrollToRatio(1);
        break;
      case '/':
        e.preventDefault();
        openSearch();
        break;
      case 'n':
        e.preventDefault();
        goToMatch(matchIndex + 1);
        break;
      case 'N':
        e.preventDefault();
        goToMatch(matchIndex - 1);
        break;
      default:
        if (e.key !== 'g') pendingG = false;
    }
  });

  // --- tldr toggle (only present on the project case-study page) ---
  const tldrBtn = document.querySelector<HTMLButtonElement>('.win-tldr');
  const fullEl = document.querySelector<HTMLElement>('.proj-full');
  const tldrEl = document.querySelector<HTMLElement>('.proj-tldr');
  if (tldrBtn && fullEl && tldrEl) {
    const tldrHint = document.getElementById('tldr-hint');
    const tldrHintClose = document.getElementById('tldr-hint-close');
    const dismissTldrHint = () => {
      tldrHint?.classList.remove('show');
      tldrBtn.classList.remove('attn');
      localStorage.setItem('tldrHintSeen', '1');
    };
    if (tldrHint && !localStorage.getItem('tldrHintSeen')) {
      setTimeout(() => {
        tldrHint.classList.add('show');
        tldrBtn.classList.add('attn');
      }, 600);
      setTimeout(dismissTldrHint, 8000);
    }
    tldrHintClose?.addEventListener('click', (e) => {
      e.stopPropagation();
      dismissTldrHint();
    });

    tldrBtn.addEventListener('click', () => {
      dismissTldrHint();
      const showingTldr = tldrBtn.getAttribute('aria-pressed') === 'true';
      const next = !showingTldr;
      tldrBtn.setAttribute('aria-pressed', String(next));
      fullEl.hidden = next;
      tldrEl.hidden = !next;
      const shown = next ? tldrEl : fullEl;
      shown.style.animation = 'none';
      void shown.offsetHeight;
      shown.style.animation = '';
      if (vimEnabled) clearMatches();
      const before = wrapper.getBoundingClientRect().top;
      measure();
      const after = wrapper.getBoundingClientRect().top;
      window.scrollBy(0, after - before);
      onScroll();
    });
  }
}
