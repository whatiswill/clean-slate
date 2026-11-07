# Project context

Full concept: `docs/Clean_Slate_Concept_Handoff.pdf` (the owner's definitive explanation) and `docs/Clean_Slate_Concept_Overview.pdf`.

## Goal
A premium, emotionally aware breakup service: make reminders of a former partner disappear from everyday digital life today, and keep the option to bring the memories back tomorrow. Distance without demanding finality.

## The product
- **Cleanup:** $100, one time. Two routes to the same result. Guided manual: the app teaches where reminders hide (camera roll, hidden albums, downloads, message attachments, shared albums, cloud storage) and the customer moves chosen items into a protected Go Back vault. AI-assisted: optional, finds likely matches within what the platform allows, customer reviews everything.
- **Go Back:** a separately paid restoration. Price not set. The system emails a meaningless, randomly generated code to the ex's email address (entered at setup). The email holds only the code: no content, no relationship details, and it does not give the ex any access. When the couple reconciles, the customer privately tells the ex where to find it, the ex shares the code, and the customer restores their own content.
- **Why the ex-held password exists:** it preserves a sliver of hope during the breakup and makes restoration a deliberate two-person step. Go Back may be a primary reason to buy the cleanup at all, even if never used. A customer could enter a fake address; the owner accepts that.
- **Repeat cycles:** on-again, off-again customers may buy Go Back and later clean up again. Treated as upside, not the core business.

## Look and feel
Calm, private and premium. A ritual, not a utility: naming the chapter, sealing the vault, a quiet reunion moment for Go Back. No streaks, nudges or gamification. Never feels like a $4 photo cleaner.

## Current state
Concept only. Nothing is built. Demand at $100, willingness to pay for Go Back, technical feasibility and legal compliance are all unvalidated.

## Key decisions
- Ex-held Go Back password: fixed (see above).
- $100 one-time core price, no subscription: fixed for now.
- Manual-first is the leading candidate for a first release, because it avoids face-recognition legal risk and reaches places AI can't; not yet a final decision.

## Known constraints (from research, Nov 2026)
- iPhone apps can't read other apps' private messages; deletions from Photos need system confirmation and go to Recently Deleted for 30 days.
- Google Photos apps only see items the user picks.
- Face recognition carries biometric-privacy legal risk (e.g. Illinois BIPA); needs a lawyer before shipping AI matching.
- The vault must stay recoverable for years; storage choice (on-device, customer's private iCloud, or our servers) is open.
- The code email should be plain and transactional, not disguised as spam, so it is delivered.
- Paid unlocks in an iPhone app generally must use Apple in-app purchase.

## Rejected ideas
- Removing or making optional the ex-held password: rejected by the owner.
- Subscription pricing: rejected by the owner.

## Open owner decisions
- Go Back price, and whether it is charged per restoration.
- What $100 covers: one ex, one cleanup event, or a time period.
- Where the vault lives.
- First release: guided manual, AI-assisted, or both.
- What happens if the code email is undeliverable or the ex declines to share it.
- Whether to run a landing-page demand test (at $100, with and without Go Back) before building the app.
