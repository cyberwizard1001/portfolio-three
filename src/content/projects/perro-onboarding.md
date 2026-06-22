---
title: Perro Onboarding & Subscription
filename: perro-onboarding.md
mode: NORMAL
type: UX / Flutter
year: "2025"
image: /images/perro/hero.svg
imageAlt: A long cluttered before-path of six onboarding steps, against a short direct after-path of two steps to a lime home icon
oneliner: Users were dropping off before they reached anything useful. I redesigned the flow and built it in Flutter, from research through to production.
statusline:
  - label: NORMAL
    lime: true
  - label: ux · flutter
  - label: "2025"
  - label: Dart · Figma
  - label: qual research
order: 3
sections:
  - component: ProjectHero
    props:
      title: Perro onboarding and subscription redesign
      type: UX / Flutter
      year: "2025"
  - component: ProjectGallery
    props:
      image: /images/perro/hero.svg
      imageAlt: A long cluttered before-path of six onboarding steps, against a short direct after-path of two steps to a lime home icon
  - component: ProjectMeta
    props:
      statusline:
        - label: NORMAL
          lime: true
        - label: ux · flutter
        - label: "2025"
        - label: Dart · Figma
        - label: qual research
  - component: ProjectIntro
    props:
      eyebrow: Perro — Case study 02
      title: Perro onboarding and subscription redesign
      summary: >-
        Perro was a genuinely strong product. It let owners track their dog's activity, work
        through enrichment and training content, configure it so the whole household could
        collaborate, and earn up to £500 of Woof benefits over time. The people who reached the
        second session tended to like it, which was, in a way, the problem, because a large
        share of new users never reached it. They were leaving during onboarding, frequently
        before they had seen anything that demonstrated what Perro could do for them. Few people
        will persevere with a setup flow that asks a great deal and returns nothing first, and
        that was costing real subscriptions.

        I had a two-week part-time window and a tight set of constraints. The work had to stay in
        Flutter, make no backend changes, and leave the experience intact for existing users.
        Rather than redesign on instinct, I began with the Mixpanel funnels, watched usability
        sessions to understand the reasoning behind each drop-off, and then redesigned the
        onboarding and subscription flow and built it directly in Flutter, since I was also the
        developer. It reduced drop-off, lifted completion, and increased subscription conversion,
        and the work was later cited as one of the product's strengths when the company was
        acquired.
  - component: ProjectProblemKeyInfo
    props:
      problemBody: >-
        Perro is a UK dog care and rewards app, and the value it offers is real: activity
        tracking, enrichment and training content, household collaboration, and up to £500 of
        Woof benefits over time. The people who got past the first session tended to like it, so
        the task was to get more of them there. The funnel data showed a large share of new users
        dropping off during onboarding, frequently before they had reached anything that showed
        them what Perro could do, which fed directly into lower subscriptions and fewer people
        choosing longer-term plans.
      contextBody: >-
        When I went through the flow myself, the reason was not hard to find. It felt like a form
        rather than an introduction. Optional information was treated as mandatory, people were
        asked for things with no sense of what they would get in return, the photo upload step
        sent them out of the app to find a better picture, and by the time anyone reached the
        fitness and location questions they were already tired and questioning whether it was
        worth continuing.
      infoItems:
        - label: Objective
          value: >-
            Make onboarding shorter, clearer and more trustworthy, in a way that reduces
            drop-off and supports subscription conversion
        - label: Success measure
          value: >-
            Onboarding completion, subscription conversion rate, and the share of
            longer-term plans chosen
        - label: Constraints
          value: >-
            Flutter only, no backend changes, a two-week part-time sprint, and a stable
            experience for existing users
        - label: Scope
          value: Landing, onboarding steps, and the subscription hand-off
  - component: ProjectFindingsGrid
    props:
      title: What the data showed
      items:
        - title: Three clear drop-off points
          body: >-
            The Mixpanel funnels, piped in through Twilio Segment, showed people leaving in three
            places: the landing and sign-in screen, the dog profile setup, and the user profile
            setup with its fitness, activity and location questions.
        - title: A broken journey, not one broken screen
          body: >-
            The drop-offs were spread across the flow rather than concentrated at one obvious
            failure point. This was not a problem I could fix by patching a single screen; it was
            effort accumulating and motivation draining a little at each step, until people had
            simply had enough.
        - title: Photo upload was a silent exit
          body: >-
            The usability sessions confirmed what the data had only hinted at. People left the app
            to find a better photo of their dog and frequently did not return, so a step nobody had
            thought twice about had become a significant churn driver.
        - title: Health questions felt out of proportion
          body: >-
            Pre-existing conditions and detailed health inputs sat early in the flow, and
            participants described them as "intense" for that point in the journey. They had not
            yet seen enough to feel the request was a fair one.
        - title: Fitness and location questions came too late
          body: >-
            By the time people reached the user profile stage they were already worn down, and
            without a clear reason for why any of it mattered, many of them gave up.
        - title: The qual and the quant agreed
          body: >-
            Every pattern I saw in a session matched a corresponding dip in the Mixpanel data. When
            the recordings and the numbers tell the same story, there is little need to
            second-guess the direction.
  - component: ProjectFindingsGrid
    props:
      title: Heuristic review
      items:
        - title: Too much, too early
          body: >-
            Optional, nice-to-have data was treated as mandatory, so onboarding felt like a
            bureaucratic form rather than an invitation into the product.
        - title: No sense of value or purpose
          body: >-
            People were asked for information and permissions with no clear connection to what they
            would get in return. At no point did Perro pause to explain what it would do for them.
        - title: Small inconsistencies eroding trust
          body: >-
            Visual inconsistencies, copy issues, and uneven patterns across screens made the flow
            feel less polished than the product deserved, and weakened the first impression.
  - component: ProjectFindingsGrid
    props:
      title: Market and competitor analysis
      items:
        - title: Lead with value, not forms
          body: >-
            The onboarding experiences I admired, Biscuit among them, explained what the product
            would do for the user before asking anything of them.
        - title: Short, visual sequences beat long forms
          body: >-
            Feature carousels and progress indicators were consistently tied to higher engagement
            and lower drop-off than text-heavy, question-first flows.
        - title: Be explicit about what's optional
          body: >-
            The best examples were clear about what was required, what was optional, and, most
            importantly, why each piece of information was being asked for.
  - component: ProjectQuote
    props:
      quote: >-
        People were not leaving because Perro was not good enough. They were leaving because
        onboarding asked too much, too early, before it had given anything in return.
      attribution: Synthesis across funnel data, heuristic review, and usability sessions
  - component: ProjectPersona
    props:
      eyebrow: User persona
      name: Jess Harrington
      role: New dog owner, recently rehomed a 2-year-old rescue Greyhound
      quote: >-
        "I downloaded it because the rewards looked interesting, but I gave up when it
        started asking about vaccinations. I just wanted to track walks."
      goals:
        - Track her dog's activity and wellbeing without it feeling like a chore
        - Understand what the rewards programme actually gives her before committing to
          anything
        - Get through setup quickly, without digging out documents or the perfect photo
        - Feel like the app is on her side rather than quietly working against her
      frustrations:
        - Being asked for detailed health information before she's seen a single thing in
          return
        - Having to leave the app to find a usable photo just to carry on
        - Permission prompts that interrupt her instead of feeling like part of the
          experience
        - A subscription screen that reads like a hard sell rather than a natural next step
      context: >-
        Jess is 31 and already lives in health and fitness apps, so she has little patience for
        onboarding that gets in her way. She is comfortable with digital products and quick to
        abandon anything that feels more complicated than it needs to be. She was a strong fit for
        what Perro offers, but she dropped off at the dog health screen on her first attempt and
        did not return.
      contextTags:
        - New dog owner
        - App-savvy
        - Low friction tolerance
        - Rewards-motivated
  - component: ProjectPersona
    props:
      eyebrow: User persona
      name: Marcus Webb
      role: Long-term dog owner, two Spaniels, active walker
      quote: >-
        "I don't mind giving information if I understand why you need it. But this kept
        asking things I couldn't see the point of yet."
      goals:
        - Log walks and activity alongside the Apple Health data he already tracks
        - Use the training and enrichment content to try new things with his dogs
        - Share the app with his partner so they can both keep an eye on the dogs
        - Get real value out of the rewards before deciding on a subscription tier
      frustrations:
        - No clear reason given for why location and notification permissions are needed
        - Being asked for fitness information his health app already holds
        - Subscription options that don't map cleanly onto what he actually wants to use
        - Setup that seems designed for a single dog rather than his household
      context: >-
        Marcus is 44, runs regularly, and is meticulous about the health data he tracks. He was
        willing to invest time in setup as long as the payoff was clear, but he met friction at
        the permissions screen and again at subscription. His instinct is to set something aside
        and return rather than abandon it outright, though his second attempt stalled in the same
        places.
      contextTags:
        - Experienced dog owner
        - Health data user
        - Multi-dog household
        - Return visitor
  - component: ProjectCallout
    props:
      variant: principle
      label: Strategy
      body: >-
        Three ideas shaped almost every decision I made. The first was to shorten and refocus
        onboarding around what genuinely improves the first session, rather than what is merely
        useful to have on file. The second was to lead with value before asking for anything. The
        third was to address the specific friction points the research had surfaced, namely the
        photo upload, the unexplained permissions, and the late-funnel fatigue, rather than
        redesigning for its own sake.
  - component: ProjectProcessSteps
    props:
      title: How I approached it
      steps:
        - title: Scoped from the data, not assumptions
          body: >-
            The Mixpanel funnels defined the scope. The screens with the steepest drop-offs became
            the core of the sprint, and everything else was set aside.
        - title: 'Audited every field: needed now, or ask later?'
          body: >-
            I went through every onboarding field and asked one question of each: does the first
            session genuinely need this? Pet illnesses and detailed health information did not
            survive that test and were removed entirely. Activity level and some fitness questions
            moved to in-app prompts after signup.
        - title: Designed and tested a feature carousel
          body: >-
            A compact carousel introduced Perro through four lenses: Woof rewards and discounts,
            health and activity monitoring with Apple Health or Google Fit, guided enrichment and
            training content, and the Perro Family and social features. I tested it against a
            stripped-back version that went straight to the forms, half expecting the shorter route
            to win. It did not. The carousel performed better on engagement and on downstream
            completion.
        - title: Introduced avatars to remove the photo friction
          body: >-
            Default avatars for both dog and owner replaced the mandatory photo upload, with the
            photo step marked clearly as optional and something a user could return to later.
            Anyone could now finish setup without leaving the app.
        - title: Added a permissions explainer
          body: >-
            A short screen before the OS prompts explained, in plain language, why Perro wanted
            location (walk tracking, weather-aware suggestions, local insights) and why
            notifications were worth allowing (reminders, rewards, the occasional wellbeing nudge),
            so the request felt like part of the experience rather than a technical interruption.
        - title: Redesigned the subscription step and built it in Flutter
          body: >-
            I laid the plans out side by side with clear summaries, a gentle steer toward the
            longer-term options, and the same four benefits from the carousel, so the paywall felt
            like a continuation of the story rather than an abrupt pivot. The whole redesign was
            built directly in Flutter and refined through a small test build.
  - component: ProjectHowMightWe
    props:
      title: How might we…
      intro: >-
        The opportunity questions that shaped the design direction, most of them ultimately
        about fairness.
      items:
        - question: >-
            How might we show new users what Perro will do for them before asking anything
            of them?
          theme: Value first
        - question: >-
            How might we let someone finish setup without leaving the app, even when they
            do not have a suitable photo to hand?
          theme: Friction removal
        - question: >-
            How might we make every question feel necessary and clearly tied to something
            the user cares about?
          theme: Purpose
        - question: >-
            How might we explain permissions so they feel like part of the product rather
            than a legal formality?
          theme: Trust
        - question: >-
            How might we make the subscription step feel like a natural next move rather
            than a jarring upsell?
          theme: Continuity
        - question: >-
            How might we cut the number of questions without losing the ones that genuinely
            improve the first session?
          theme: Progressive disclosure
  - component: ProjectBeforeAfter
    props:
      beforeTitle: Before
      beforeBody: >-
        The original flow ran to five screens and sixteen questions, with a mandatory photo
        upload, abrupt system permission prompts, and no explanation anywhere of what Perro
        actually offered. It asked for a great deal and gave very little back before the first
        moment that might have made someone care.
      afterTitle: After
      afterBody: >-
        The redesigned flow is four screens and eleven questions, with the avatar system and an
        optional photo, a feature carousel that front-loads the value, a permissions explainer,
        and a subscription step that carries the same story through to the end. Setup no longer
        feels like paperwork; it feels like an introduction.
  - component: ProjectDecisionLog
    props:
      title: The decisions I would defend
      intro: The decisions that shaped the redesign, what drove them, and what I observed.
      decisions:
        - decision: >-
            Took pet illnesses and detailed health information out of onboarding entirely
          rationale: >-
            These fields sat early in the flow, added real perceived effort, and offered nothing in
            return during the first session. People were not yet invested enough to feel it was a
            fair trade.
          outcome: >-
            A major resistance point disappeared. The information moved to a later in-app prompt,
            where people had the context and the motivation to give it.
          outcomeType: positive
        - decision: Led with a feature carousel before the first form screen
          rationale: >-
            Both the competitive analysis and the sessions pointed at the same gap. People had no
            idea what Perro would do for them before being asked to hand over information.
          outcome: >-
            I tested it against a minimal version without the carousel. It performed better on
            engagement and downstream completion, and became the production baseline.
          outcomeType: positive
        - decision: >-
            Replaced mandatory photo upload with an avatar system and optional image
          rationale: >-
            Sessions showed this was a silent exit point. People left to find a suitable photo and
            frequently did not return, so making it optional removed a low-value blocker.
          outcome: >-
            Drop-off at the dog profile step fell noticeably after launch, and people could finish
            setup in one sitting without leaving the app.
          outcomeType: positive
        - decision: Added a plain-language permissions explainer before the OS prompts
          rationale: >-
            Abrupt system dialogs for location and notifications appeared without warning, and most
            people either dismissed them or felt ambushed.
          outcome: >-
            Acceptance improved. People who read the explainer were far more likely to grant both
            location and notification access.
          outcomeType: positive
        - decision: Echoed the carousel benefits on the subscription screen
          rationale: >-
            The paywall used to feel disconnected from the onboarding story. Repeating the same four
            benefit areas tied it back in.
          outcome: >-
            Subscription conversion rose and more people chose longer-term plans. Feedback described
            the step as feeling "fairer" and "more honest".
          outcomeType: positive
        - decision: Moved activity level and some fitness questions to post-signup prompts
          rationale: >-
            They were arriving when people were already fatigued, and before they had done anything
            in the app that made the questions feel relevant.
          outcome: >-
            Late-funnel fatigue dropped. The information is still collected, but at a point where
            people have a reason to care about it.
          outcomeType: positive
  - component: ProjectTextImage
    props:
      eyebrow: Solution
      title: A shorter, value-first introduction to Perro
      body: >-
        The redesigned onboarding turns what used to feel like a long, slightly opaque form into a
        short introduction that leads with value. New users see what Perro will do for them, answer
        fewer but more relevant questions, stay inside the app while setting up their dog, and
        understand exactly why they are being asked for location, notifications, and payment. The
        subscription step carries the same story through, so starting a plan feels like a natural
        next step rather than a pivot.
      image: /images/img_02_page1_annotated.svg
      imageAlt: Perro onboarding feature carousel
  - component: ProjectAccessibilityAudit
    props:
      title: Accessibility considerations
      intro: >-
        Issues raised during the heuristic review and addressed as part of the redesign rather
        than filed for later.
      issues:
        - issue: No progress indicator in a five-screen flow
          description: >-
            People had no way to gauge how far through onboarding they were or how much was left,
            which reinforced the sense that the effort was open-ended.
          severity: serious
          wcagCriterion: 2.4.8 Location
          fix: >-
            Added a step indicator to every onboarding screen, showing current position and
            total steps.
        - issue: System permission dialogs appeared with no context
          description: >-
            OS-level prompts for location and notifications arrived abruptly with no prior
            explanation. For anyone using a screen reader, the sudden modal shift was especially
            disorienting.
          severity: serious
          wcagCriterion: 3.3.2 Labels or Instructions
          fix: >-
            Added a dedicated explainer screen before each OS prompt, with a plain-language
            reason and benefit for each permission requested.
        - issue: Avatar selection was not usable with VoiceOver or TalkBack
          description: >-
            The initial avatar grid used tap targets that were too small and had no accessible
            labels, making selection hard for anyone navigating by touch or screen reader.
          severity: serious
          wcagCriterion: 2.5.5 Target Size / 4.1.2 Name, Role, Value
          fix: >-
            Increased avatar tap targets to a minimum of 48x48dp and gave each one a semantic
            label describing the breed or character.
        - issue: Optional fields were not labelled as optional
          description: >-
            Photo upload and several profile fields were effectively optional but were not marked
            as such, so people assumed they had to complete them to proceed.
          severity: moderate
          wcagCriterion: 3.3.2 Labels or Instructions
          fix: >-
            Labelled optional fields explicitly as "Optional, you can add this later" and added
            skip affordances where relevant.
        - issue: The feature carousel had no pause or manual control
          description: >-
            The carousel auto-advanced on a timer with no way to pause or step through it, which is
            a problem for anyone who needs more time to read.
          severity: moderate
          wcagCriterion: 2.2.2 Pause, Stop, Hide
          fix: >-
            Made the carousel manually navigated by default, with swipe and dot-tap controls,
            and removed the auto-advance.
  - component: ProjectMetricsBand
    props:
      items:
        - value: ↓ Drop-off
          label: Most clearly at the old photo and health bottlenecks
        - value: ↑ Completion
          label: More people reaching their first real in-app actions
        - value: ↑ Conversion
          label: Higher subscription take-up after launch
        - value: Acquired
          label: UX cited as a product strength during acquisition
  - component: ProjectTextBlock
    props:
      heading: Constraints and craft
      body: >-
        The whole project was designed and built inside a two-week Flutter sprint. Being both the
        designer and the developer meant every idea had to be something I could actually build,
        which is a useful discipline. There were no backend changes available, so everything lived
        in UX, UI, and client-side logic. The two-week part-time window pushed me toward focused,
        incremental changes rather than a wholesale rewrite, and because existing users still
        needed a stable app, the work had to be additive rather than disruptive. The advantage of
        building in Flutter myself was the tight feedback loop. I could validate a decision in the
        real product rather than a prototype, which surfaced the genuine problems earlier and saved
        a great deal of time I would otherwise have spent guessing.
  - component: ProjectLearnings
    props:
      title: What I took from it
      points:
        - >-
          The post-launch funnel data showed a noticeable drop in abandonment across onboarding,
          most clearly at the old photo upload and health information bottlenecks, which were
          exactly the places the research had flagged.
        - >-
          Completion went up, with more people reaching their first real in-app actions. That is
          the measure I care about most, because it means the first session was finally delivering
          something.
        - >-
          Subscription conversions rose and more people chose the longer-term plans, which lined up
          with the goal of making the paywall feel like a continuation rather than an interruption.
        - >-
          The qualitative feedback from users and stakeholders kept landing on the same words:
          clearer, simpler, more trustworthy.
        - >-
          The point I keep returning to is that none of this worked because it looked nicer. It
          worked because it stopped asking people for things before it had given them a reason to
          say yes. Had I spent the two weeks making the old form prettier, I doubt the numbers would
          have moved at all.
  - component: MoreProjects
    props:
      title: More projects
      projects:
        - title: Pet Insurance Checkout Redesign
          blurb: >-
            Redesigning the Review Details stage of the Perfect Pet Insurance quote flow to
            reduce friction, improve clarity, and support confident decision-making.
          slug: pet-insurance-checkout
          category: UI/UX
        - title: Crafting Counselling Companions
          blurb: >-
            Co-designing a session-planning tool with counsellors, from research through
            prototype, to reduce the admin overhead that gets in the way of client work.
          slug: counselling-companions
          category: UX Research
---