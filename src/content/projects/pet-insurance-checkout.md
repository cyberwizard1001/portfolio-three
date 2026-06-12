---
title: Pet Insurance Checkout Redesign
filename: checkout-redesign.md
mode: NORMAL
type: UI / UX
year: "2026"
image: /images/img_01_before_after.svg
imageAlt: Pet Insurance checkout before and after
oneliner: The review screen was losing users right at conversion. Rebuilt it around what 11 internal interviews actually said, within FCA constraints.
statusline:
  - label: NORMAL
    lime: true
  - label: ui/ux
  - label: "2026"
  - label: MudBlazor · FCA
  - label: Hotjar · heuristics
order: 1
sections:
  - component: ProjectHero
    props:
      title: Pet insurance checkout page redesign
      type: UI / UX
      year: "2026"
  - component: ProjectGallery
    props:
      image: /images/img_01_before_after.svg
      imageAlt: The Review Details page — where most users were quietly giving up
  - component: ProjectMeta
    props:
      statusline:
        - label: NORMAL
          lime: true
        - label: ui/ux
        - label: "2026"
        - label: MudBlazor · FCA
        - label: Hotjar · heuristics
  - component: ProjectIntro
    props:
      eyebrow: Perfect Pet Insurance — Case study 01
      title: Pet insurance checkout page redesign
      summary: >-
        Insuring your pet is an emotional exercise. You hand over a fair bit of money every
        month hoping the insurer takes the financial — and mental — stress off your hands
        when your pet isn't at its best. So when you've never heard of a brand and the first
        thing it shows you is a wall of policy text, would you buy? I probably wouldn't.
        This is what customers were faced with when they landed on Perfect Pet's 'Review
        Quote' page: they'd come through aggregators like Compare the Market and Money
        Super Market, and were met with the exact same wall of text. Given that aggregators
        are our main source of sales, getting this right could make a genuine difference
        for customers as well as the business.

        I was allocated one sprint — 2 weeks. I went in thinking it was a tidy-up job —
        make a dated page look like it belonged in the modern world, no copy changes. I
        decided to begin with a competitor review, went through Hotjar recordings of the
        existing page, came up with a redesign and then sat down with eleven colleagues
        from claims, complaints, finance and renewals for testing. Recruiting internally
        was a time-crunch call, and yes, conventional wisdom states that people who deal
        with pet insurance all day make poor stand-in users, but halfway through the first
        interview, I realised I should go down a different angle. It was obvious they knew
        exactly what happens when this page doesn't do its job — and the interviews quietly
        turned a visual refresh into something more interesting.
  - component: ProjectProblemKeyInfo
    props:
      problemBody: >-
        The review page is the last thing someone sees before they hand over their payment
        details. And for the aggregator traffic that makes up most of Perfect Pet's sales,
        it's usually the first time they've seen the brand at all. So it has an awkward
        double job: explain the product and earn trust at the same time, for a user who's
        never heard of the brand. Hotjar recordings showed people regularly spending
        upwards of five minutes on the page, opening policy PDFs mid-flow, and in quite a
        few cases wandering off to the main site for something and never making it back.
      contextBody: >-
        I had two weeks to redesign the page, working with technical BAs, the Head of
        Product, Compliance and a developer. Two constraints shaped everything: it had to
        be buildable in the MudBlazor component framework, and all the existing policy copy
        had to stay for compliance reasons.
      infoItems:
        - label: Objective
          value: >-
            Make the review step easier to understand and more trustworthy, especially for
            users meeting the brand for the first time mid-funnel
        - label: Success measures
          value: >-
            Quote completion rate, dwell time on the review page, and longer-term
            cancellation and complaint volume
        - label: Constraints
          value: >-
            FCA compliance, MudBlazor component framework, legacy platform, 2-week sprint
  - component: ProjectProcessSteps
    props:
      title: How I approached it
      steps:
        - title: Competitor UX audit
          body: >-
            I looked at how other pet insurers handle the review step for aggregator
            traffic. The better ones share some fairly consistent patterns, and working out
            why they do what they do was a useful starting point considering the timeline.
        - title: Heuristic evaluation
          body: >-
            I conducted a heuristic evaluation of the existing page using Nielsen Norman's
            framework — useful for turning a vague sense that something's off into a
            specific, actionable list. I also worked through what was structurally
            achievable in MudBlazor with the BA and developer, so most layout calls were
            made before anything hit Figma.
        - title: Hotjar session analysis
          body: >-
            I went through recordings of aggregator-referred users, watching where they
            paused and where they gave up. One user spent nearly nine minutes before
            selecting anything — and it wasn't an idle cursor, they were actively
            highlighting different bits of text trying to make sense of it.
        - title: Internal usability sessions
          body: >-
            Eleven moderated one-to-one walkthroughs of the prototype, each followed by a
            semi-structured interview, recorded and coded into themes. The testers came
            from claims, complaints, finance and renewals — the people who spend their days
            cleaning up after a customer has misunderstood what they bought — which is
            exactly why their feedback turned out to be far more than a stopgap.
  - component: ProjectFindingsGrid
    props:
      title: What good looks like — competitor and heuristic review
      items:
        - title: Trust comes before the ask
          body: >-
            On our competitors' sites, Trustpilot ratings, customer numbers and claim stats
            were all front-loaded. They spend the first part of the page earning your
            trust, and only then ask you to commit to anything.
        - title: Policy information you can actually scan
          body: >-
            Tables instead of dense paragraphs, everything built into the flow rather than
            buried in a linked PDF, and a price and CTA that stayed visible the whole way
            down — so there was never a moment where you had to leave the page to work out
            what you were buying.
        - title: Our page had a hierarchy problem
          body: >-
            The heuristic audit gave me specific things to point at: four different button
            styles, benefit details hidden behind low-contrast links, unmarked mandatory
            fields, and a payment step that gave no sign it was processing. Small frictions
            individually, but they cluster exactly when users are least sure about
            continuing.
  - component: ProjectFindingsGrid
    props:
      title: What the research surfaced
      items:
        - title: Pre-existing conditions, not the visuals, was the real problem
          body: >-
            Every one of the eleven participants raised pre-existing conditions, unprompted,
            as the main driver of complaints and declined claims. The core misunderstanding:
            customers assume "pre-existing" means a formally diagnosed condition, not
            symptoms already noted in the vet's history — and that gap is where a large
            share of disputes start. It changed what the project was actually about.
        - title: The numbers that matter were missing
          body: >-
            Nine of eleven flagged it. The excess wasn't on the first page despite being one
            of the lowest in the market — Kerry from Claims pointed out that's a selling
            point we were hiding. Age limits, how co-payment works in practice, and the
            per-condition vet-fee limit were all missing or explained too vaguely to help.
        - title: The lifetime cover headline overpromises
          body: >-
            Tom in Claims — himself a practising vet — flagged that "any veterinary
            treatment for illnesses and injuries is covered during your pet's lifetime"
            reads as unconditional. Since pre-existing conditions are the most common reason
            a claim is declined, that sentence sets up the exact expectation the policy
            can't always meet.
        - title: Trust signals land harder than you'd think from the inside
          body: >-
            The Trustpilot integration went down well, and Rochelle from finance mentioned
            she hadn't heard of Perfect Pet before working here — a fair proxy for how most
            first-time aggregator visitors feel. Users who left to find missing information
            on the main site mostly didn't come back, so getting trust and detail right on
            the page itself matters more than it looks.
  - component: ProjectQuote
    props:
      quote: >-
        Claim-stage problems are pre-sold at quote stage. The people processing complaints
        and declined claims were asking, almost in unison, for sales-stage honesty about the
        things they see go wrong most often.
      attribution: Synthesis from eleven internal stakeholder sessions — claims, complaints, finance, and renewals
  - component: ProjectPersona
    props:
      eyebrow: Composite persona — derived from 11 SME interview sessions
      name: Mia Chen
      role: First-time pet owner, recently adopted a Labrador, arrived from a comparison aggregator
      quote: >-
        "I just want to know if he's covered if something goes wrong. I don't know what half
        of these words mean — and I'm not sure I trust a brand I've never heard of."
      goals:
        - Understand what the policy actually covers without reading a 40-page document
        - Feel confident the brand is legitimate before entering card details — she's never heard of Perfect Pet
        - Know exactly what she'll be charged each month, with no surprises on the first direct debit
        - Complete the purchase without needing to call anyone or navigate away from the page
      frustrations:
        - Terms like co-payment, excess, and pre-existing condition with no plain-English explanation alongside them
        - Arriving on a page that looks visually disconnected from the comparison site she just came from
        - No clear signal that signs and symptoms in her dog's vet history might count as a pre-existing condition — even without a diagnosis
        - Uncertainty about whether the monthly price shown is exactly what will leave her account, or whether it 'may differ slightly'
      context: >-
        Mia is built from the patterns Tracy, Kerry and Michelle described from their
        day-to-day work. As Tracy put it: "people just don't understand — they think
        pre-existing has to be a named condition, and sometimes pets have symptoms without
        anyone knowing what it is until six months later." Michelle confirmed cases like
        this make up a real chunk of the complaints she handles. The thing that makes Mia
        worth designing for is that careful readers get caught too — linked and bilateral
        conditions (ACL surgery on one leg, then the other) surprise even people who read
        the wording closely. Mia leaves the flow thinking she's covered, and finds out
        otherwise when her first claim is filed.
      contextTags:
        - First-time buyer
        - Aggregator entry
        - Brand unfamiliar
        - Pre-existing risk
        - Jargon-averse
  - component: ProjectHowMightWe
    props:
      title: How might we…
      intro: >-
        Three questions from the research, each pointing at a gap between what users think
        they've bought and what the policy actually covers.
      items:
        - question: >-
            How might we make the pre-existing exclusion specific enough that customers
            understand it covers symptoms in the vet's history, not just diagnosed
            conditions?
          theme: Transparency
        - question: >-
            How might we put excess, co-payment and benefit limits in front of users while
            they're deciding — not after they've filed a claim?
          theme: Clarity
        - question: >-
            How might we build enough trust with someone who's never heard of Perfect Pet
            that they're willing to commit by the end of the page?
          theme: Trust
  - component: ProjectCallout
    props:
      variant: principle
      label: Design principle
      body: >-
        Through every layout decision there was one question I kept dragging things back
        to: does this make it easier for someone to understand what they're actually
        looking at? I cared about visual consistency and brand alignment too — but
        surfacing the right information at the right moment came first.
  - component: ProjectBeforeAfter
    props:
      beforeTitle: Before
      beforeBody: >-
        A single scrolling page that piled marketing preferences, assumptions and
        declarations, cover details and payment into one view, mostly as paragraphs of
        text. The information was technically all there, but it expected you to read the
        whole thing — and gave you little reason to trust the brand before asking you to
        commit.
      afterTitle: After
      afterBody: >-
        A two-page flow. Page one leads with price and trust signals, then cover details,
        warranty questions and personal information. Page two handles assumptions and
        declarations — including an explicit, acknowledged call-out of the pre-existing
        conditions rules — before payment. All the FCA-mandated language is still there;
        it's just no longer cluttering the page and has been laid out so it's easier to
        consume.
  - component: ProjectDecisionLog
    props:
      title: Key decisions
      intro: The calls that shaped the redesign, what drove them, and what we saw.
      decisions:
        - decision: Pre-existing conditions got their own page with an explicit tick-box
          rationale: >-
            All eleven raised it unprompted. A checkbox buried in an assumptions section was
            never going to fix a misunderstanding this fundamental.
          outcome: >-
            Stanley from Finance summed it up: "Having it as its own page — we're not hiding
            it. It's quite helpful." Kerry noted it changes the claims conversation, since
            customers have declared from the outset.
          outcomeType: positive
        - decision: Excess moved to page one
          rationale: >-
            It was missing entirely, which was both a clarity gap and a missed marketing
            opportunity given it's one of the lowest excesses in the market.
          outcome: >-
            Now visible alongside cover details, presented as a feature rather than a
            buried disclosure.
          outcomeType: positive
        - decision: A qualifier was added to the lifetime cover headline
          rationale: >-
            The unconditional wording sets an expectation the policy can't always keep, and
            pre-existing exclusions are the most common reason a claim is declined.
          outcome: >-
            Something like "subject to your pet's health history" keeps it accurate without
            changing the meaning for most customers. Flagged to copy and compliance.
          outcomeType: tradeoff
        - decision: Interactive components were standardised
          rationale: >-
            The audit found four button styles and three expansion-panel treatments across
            the flow — enough inconsistency to make the page feel unconsidered, which
            doesn't help when you're trying to earn trust.
          outcome: >-
            One token set across buttons, tooltips, modals and toggles. Engineering noted
            it'd cut maintenance overhead too, with all components being standardised at
            the time of writing.
          outcomeType: positive
        - decision: Mobile was deferred to a follow-up sprint
          rationale: >-
            A full responsive overhaul wasn't realistic in two weeks within MudBlazor's
            grid, though the designs exist for when development catches up. Mobile is ~35%
            of traffic but most completions still happen on desktop.
          outcome: Backlogged, to be picked up once the A/B experiment gives us something to work with.
          outcomeType: tradeoff
  - component: ProjectMetricsBand
    props:
      items:
        - value: Conversion
          label: Quote completion rate — primary measure for the A/B experiment
        - value: Dwell time
          label: Time-to-decision on the review page
        - value: Post-sale complaints
          label: Claim-decline disputes and cancellations over time
        - value: A/B live
          label: 4 variants live in Amplitude with real traffic
  - component: ProjectLearnings
    props:
      title: What I took from it
      points:
        - >-
          The most useful finding was that this isn't only a conversion problem. The review
          page is where the complaints and declined claims of six months' time are quietly
          being set up — and getting it right has effects you'll never see in a completion
          rate. They show up much later, in call volumes and cancellations, long after
          anyone's looking at this page.
        - >-
          The sessions left a clear backlog: pre-existing wording that explicitly covers
          symptoms in the vet's history and bilateral conditions, co-payment shown with a
          worked example, and the monthly-versus-annual price difference explained somewhere
          visible.
        - >-
          Four variants are live in Amplitude — two desktop, two mobile — each testing where
          navigation and the CTA sit relative to the cover details. A parallel segment was
          already running with real users during the sprint, so some layout calls were
          partly validated before I finished. Once it's run long enough to mean something,
          I'll update this with the real numbers.
  - component: MoreProjects
    props:
      title: More projects
      projects:
        - title: Perro Onboarding & Subscription
          blurb: >-
            A shorter, value-first onboarding and subscription redesign that reduced
            drop-offs and lifted conversion — implemented directly in Flutter.
          slug: perro-onboarding
          category: UX / Flutter
        - title: Crafting Counselling Companions
          blurb: >-
            Co-designing a session-planning tool with counsellors — from research through
            prototype — to reduce the admin overhead that gets in the way of client work.
          slug: counselling-companions
          category: UX Research
---

More detail on the Pet Insurance Checkout Redesign project goes here.
