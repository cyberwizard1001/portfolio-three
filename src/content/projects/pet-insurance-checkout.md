---
title: Pet Insurance Checkout Redesign
filename: checkout-redesign.md
mode: NORMAL
type: UI / UX
year: "2026"
image: /images/pet-insurance/cover.jpg
imageAlt: Perfect Pet quote review page, framed and rotated
oneliner: People insuring a pet are committing real money to something they care about, and they want to feel understood before they hand it over. I redesigned the review page so it does a better job of showing them they are.
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
      title: Pet Insurance Review/Checkout Page Redesign
      type: UI / UX
      year: "2026"
  - component: ProjectGallery
    props:
      image: /images/pet-insurance/hero.jpg
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
      title: Pet Insurance Review/Checkout Page Redesign
      summary: >-
        Insuring a pet is an emotional decision as much as a financial one. You commit a fair
        amount of money each month in the hope that the insurer takes the stress off your hands
        on the day your pet is unwell. So when the brand is one you have never heard of, and the
        first thing it shows you is a wall of policy text, would you go ahead and buy? I am not
        sure I would. That was roughly the experience waiting for customers on Perfect Pet's
        Review Quote page, most of whom had arrived through aggregators such as Compare the
        Market and Money Super Market. Since aggregators are the main source of sales, getting
        this page right stood to make a real difference to both customers and the business.

        I had a single two-week sprint, and I went in expecting a largely cosmetic exercise, a
        way to make a dated page feel modern without altering its layout or copy. I began with a
        competitor review, studied Hotjar recordings of people using the live page, built a
        prototype to improve how easily it could be scanned, and tested it with colleagues from
        across the business. Recruiting internally was a decision the timeline forced on me, and
        the conventional wisdom is that people who work in pet insurance make poor stand-in users.
        By the middle of the first interview it was clear I had that backwards. These were the
        people who understood precisely what happens when the page fails to do its job, since they
        are the ones who handle the complaints and the declined claims afterwards.
  - component: ProjectProblemKeyInfo
    props:
      problemBody: >-
        The review page is the last thing someone sees before they hand over their payment
        details, and because most of Perfect Pet's sales come through aggregators, it is usually
        the first time that person has encountered the brand at all. That leaves the page with two
        tasks to perform at once. It has to explain the product and earn trust simultaneously, for
        someone who has no particular reason yet to believe it. The Hotjar recordings bore this
        out. People regularly spent five minutes or more on the page, opening policy PDFs partway
        through to make sense of what they were reading, and a number of them left for the main
        site to check something and did not return.
      contextBody: >-
        I had a single two-week sprint to redesign it, working alongside technical BAs, the Head
        of Product, someone from Compliance, and a developer. Two constraints shaped every
        decision. Whatever I designed had to be buildable in the MudBlazor component framework,
        and every line of the existing policy copy had to remain exactly where it was for
        compliance reasons.
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
            I began by examining how other pet insurers handle the review step for aggregator
            traffic. The stronger ones converge on a similar set of patterns, and with so little
            time available, understanding the reasoning behind those choices was the fastest way to
            orient myself.
        - title: Heuristic evaluation
          body: >-
            I ran a heuristic evaluation of the existing page against Nielsen's ten usability
            heuristics, which turned a general sense that something was wrong into a specific,
            actionable list. In parallel I worked with the BA and the developer to establish what
            was realistic in MudBlazor, so most of the layout decisions were settled before
            anything reached Figma.
        - title: Hotjar session analysis
          body: >-
            I worked through recordings of users who had arrived from aggregators, paying close
            attention to where they paused and where they abandoned the page. One person spent close
            to nine minutes before selecting anything, and the recording showed no idle cursor. They
            were highlighting different passages of text, clearly working to understand what they
            were buying.
        - title: Internal usability sessions
          body: >-
            I ran eleven moderated walkthroughs of the prototype, each followed by a
            semi-structured interview that I recorded and coded into themes. The participants came
            from claims, complaints, finance, and renewals, the teams that deal with the
            consequences when a customer has misunderstood what they bought. I had expected them to
            make poor stand-in users, and the reverse proved true.
  - component: ProjectFindingsGrid
    props:
      title: What good looks like — competitor and heuristic review
      items:
        - title: Trust comes before the ask
          body: >-
            Across our competitors' sites the Trustpilot ratings, customer numbers, and claim
            statistics all sat near the top of the page. They use the opening stretch to earn the
            customer's trust, and only once that is established do they ask for any commitment.
        - title: Scannable policy information
          body: >-
            They favour tables over dense paragraphs, build the detail into the flow rather than
            hiding it in a linked PDF, and keep the price and the call to action visible throughout.
            At no point does the customer have to leave the page to work out what they are paying
            for.
        - title: Our page had a hierarchy problem
          body: >-
            The heuristic audit produced a concrete list. There were four different button styles,
            benefit details hidden behind low-contrast links, mandatory fields that were not marked
            as such, and a payment step that gave no indication it was working once submitted. None
            of these matters greatly on its own, but they accumulate at precisely the moment a user
            is least certain about continuing.
  - component: ProjectFindingsGrid
    props:
      title: What the research surfaced
      items:
        - title: Pre-existing conditions, not the visuals, was the real problem
          body: >-
            Every one of the eleven raised pre-existing conditions without prompting, and all of
            them identified it as the principal cause of complaints and declined claims. The
            misunderstanding sits in a single place. Customers assume a pre-existing condition means
            something a vet has formally diagnosed, when in practice it also covers symptoms already
            noted in the pet's history. That gap is where a large share of the disputes begin, and
            it reshaped what the project was really about.
        - title: The numbers that matter were missing
          body: >-
            Nine of the eleven noted that the figures a customer actually decides on were not on the
            page at all. The excess did not appear until later in the flow, despite being one of the
            lowest in the market, which one of the claims handlers described as a selling point we
            were hiding. The age limits, the way the co-payment works in practice, and the
            per-condition vet-fee limit were either absent or explained so vaguely that they offered
            little help.
        - title: The lifetime cover headline overpromises
          body: >-
            One of the claims handlers, a practising vet himself, picked up on the line stating that
            any veterinary treatment for illnesses and injuries is covered throughout the pet's
            lifetime. Taken at face value, it reads as entirely unconditional. And because
            pre-existing conditions are the most common reason a claim is declined, that single
            sentence establishes precisely the expectation the policy cannot always meet.
        - title: Trust signals carry more weight than they appear to
          body: >-
            The Trustpilot integration was well received in the sessions, and someone from finance
            mentioned that she had not heard of Perfect Pet until she came to work here, which is a
            reasonable proxy for how most first-time aggregator visitors arrive. Since the users who
            left for the main site to find missing information largely did not return, getting both
            the trust and the detail right on the page itself matters more than it might appear from
            the inside.
  - component: ProjectQuote
    props:
      quote: >-
        The problems that surface at the claim stage are largely created at the quote stage.
        Almost in unison, the people who process complaints and declined claims asked for the
        same thing: a little more honesty up front about the issues they see go wrong most
        often.
      attribution: Synthesis from eleven internal stakeholder sessions across claims, complaints, finance and renewals
  - component: ProjectPersona
    props:
      eyebrow: Composite persona — derived from 11 SME interview sessions
      name: Mia Chen
      role: First-time pet owner, recently adopted a Labrador, arrived from a comparison aggregator
      quote: >-
        "I just want to know if he's covered if something goes wrong. I don't know what half
        of these words mean, and I'm not sure I trust a brand I've never heard of."
      goals:
        - Understand what the policy actually covers without reading a 40-page document
        - Feel confident the brand is legitimate before entering card details, since she's never heard of Perfect Pet
        - Know exactly what she'll be charged each month, with no surprises on the first direct debit
        - Complete the purchase without needing to call anyone or navigate away from the page
      frustrations:
        - Terms like co-payment, excess and pre-existing condition with no plain-English explanation alongside them
        - Arriving on a page that looks visually disconnected from the comparison site she just came from
        - No clear signal that signs and symptoms in her dog's vet history might count as a pre-existing condition, even without a diagnosis
        - Uncertainty about whether the monthly price shown is exactly what will leave her account, or whether it 'may differ slightly'
      context: >-
        Mia is built from the patterns the claims and complaints handlers described in their daily
        work. As one of them put it, people simply do not understand it; they assume pre-existing
        has to be a named condition, when a pet may show symptoms for months before anyone can say
        what is actually wrong. Another confirmed that such cases account for a substantial share
        of the complaints she handles. What makes Mia worth designing for is that even careful
        readers are caught out, because linked and bilateral conditions, such as ACL surgery on one
        leg followed by the other, surprise people who have read the wording closely. Mia leaves
        the flow certain she is covered, and discovers otherwise only when she files her first
        claim.
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
        Three questions came out of the research, each pointing at the same kind of gap
        between what a user believes they have bought and what the policy actually covers.
      items:
        - question: >-
            How might we make the pre-existing exclusion specific enough that customers
            understand it covers symptoms in the vet's history, not only diagnosed
            conditions?
          theme: Transparency
        - question: >-
            How might we put excess, co-payment, and benefit limits in front of users while
            they are still deciding, rather than after they have filed a claim?
          theme: Clarity
        - question: >-
            How might we build enough trust with someone who has never heard of Perfect Pet
            that they are willing to commit by the end of the page?
          theme: Trust
  - component: ProjectCallout
    props:
      variant: principle
      label: Design principle
      body: >-
        There was one question I kept returning to with every layout decision. Does this make it
        easier for someone to understand what they are looking at? Visual consistency and brand
        alignment mattered to me as well, but surfacing the right information at the right moment
        always came first.
  - component: ProjectBeforeAfter
    props:
      beforeTitle: Before
      beforeBody: >-
        Everything sat on one long scrolling page. The marketing preferences, the assumptions and
        declarations, the cover details, and the payment step were stacked into a single view,
        largely as paragraphs of text. The information was all present, but the page expected the
        customer to read the entirety of it and offered very little reason to trust the brand
        before asking for a commitment.
      afterTitle: After
      afterBody: >-
        I split it into a two-page flow. The first page leads with the price and the trust signals,
        then moves through the cover details, the warranty questions, and the personal information.
        The second page handles the assumptions and declarations, including an explicit call-out of
        the pre-existing conditions rules that the customer must acknowledge, before reaching
        payment. All of the FCA-mandated language remains. It is no longer crowding the page, and it
        is arranged so that it is considerably easier to absorb.
  - component: ProjectDecisionLog
    props:
      title: Key decisions
      intro: The decisions that shaped the redesign, what drove them, and what we observed.
      decisions:
        - decision: Pre-existing conditions were given their own page with an explicit tick-box
          rationale: >-
            All eleven raised it without prompting. A checkbox buried inside an assumptions section
            could not resolve a misunderstanding this fundamental.
          outcome: >-
            Someone from finance put it well: giving it its own page signals that we are not hiding
            it, which he found reassuring. One of the claims handlers noted that it also changes the
            claims conversation, because the customer has declared it from the outset.
          outcomeType: positive
        - decision: The excess was moved to the first page
          rationale: >-
            It was absent from the page entirely, which was both a clarity gap and a missed
            opportunity, given that we have one of the lowest excesses on the market.
          outcome: >-
            It now appears alongside the cover details, presented as a feature rather than something
            buried in the small print.
          outcomeType: positive
        - decision: A qualifier was added to the lifetime cover headline
          rationale: >-
            The unconditional wording creates an expectation the policy cannot always meet, and
            pre-existing exclusions are the single most common reason a claim is declined.
          outcome: >-
            A light addition such as "subject to your pet's health history" keeps the line accurate
            without changing its meaning for most customers. I have raised it with copy and
            compliance.
          outcomeType: tradeoff
        - decision: Interactive components were standardised
          rationale: >-
            The audit found four button styles and three different expansion-panel treatments across
            the flow. That degree of inconsistency makes a page feel unconsidered, which is precisely
            the wrong impression to give when its purpose is to earn the customer's trust.
          outcome: >-
            One token set now covers the buttons, tooltips, modals, and toggles. Engineering noted
            that it would reduce maintenance overhead as well, since the components were being
            standardised in any case.
          outcomeType: positive
        - decision: Mobile was deferred to a follow-up sprint
          rationale: >-
            A full responsive overhaul was not realistic within two weeks given MudBlazor's grid,
            though the designs exist for when development is ready. Mobile accounts for around 35% of
            traffic, but most completions still occur on desktop.
          outcome: Backlogged, to be taken up once the A/B experiment provides usable data.
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
          The most valuable thing I took away is that this was never only a conversion problem. The
          review page quietly sets up the complaints and declined claims of six months later, and
          getting it right has effects that never show up in a completion rate. They surface much
          later, in call volumes and cancellations, long after anyone is still looking at the page.
        - >-
          The sessions left me with a clear backlog. The pre-existing wording needs to state that it
          covers symptoms in the vet's history as well as bilateral conditions, the co-payment needs
          a worked example so customers can see how it applies in practice, and the difference
          between the monthly and the annual price needs explaining somewhere a customer will
          reliably see it.
        - >-
          Four variants are now live in Amplitude, two on desktop and two on mobile, each testing
          where the navigation and the call to action sit relative to the cover details. A parallel
          segment was already running with real users while the sprint was still under way, so
          several of the layout decisions were partly validated before I had finished. Once it has
          run long enough to be meaningful, I will return and update this with the actual figures.
  - component: MoreProjects
    props:
      title: More projects
      projects:
        - title: Perro Onboarding & Subscription
          blurb: >-
            A shorter, value-first onboarding and subscription redesign that reduced
            drop-offs and lifted conversion, implemented directly in Flutter.
          slug: perro-onboarding
          category: UX / Flutter
        - title: Crafting Counselling Companions
          blurb: >-
            Co-designing a session-planning tool with counsellors, from research through
            prototype, to reduce the admin overhead that gets in the way of client work.
          slug: counselling-companions
          category: UX Research
---