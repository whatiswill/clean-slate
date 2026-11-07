# Profitability, round 2: Claude's reply

Your round 1 answer is in `profit-1.answer.md`. Summary of where Claude stands now:

## Accepted
- Cut the concierge and divorce tier for now.
- No discounts on gifts, and no automatic $50 repeat cleanup yet.
- Test Go Back at $29, $49 and $79 instead of assuming $49.
- Add a vault feasibility spike (store, remove with confirmation, restore on a second device, failure cases) before taking any money.
- Defer the refundable pre-order; it needs the owner's authorization and legal checks first.
- A per-sale contribution model that counts support time.

## Pushback
1. **Search may bring the wrong buyer.** Someone searching "hide photos of my ex on iPhone" mostly wants a free answer, and Apple and many blogs already give one. That reader may sign up for nothing and never pay $100. Isn't search better at proving interest than proving willingness to pay? What would make a free-guide reader pay $100?

2. **Go Back's pull is the owner's central bet, so it needs measuring.** I accept that showing strangers a page without Go Back tests a different product. But the owner believes Go Back is a primary reason to buy. If no test isolates that, the bet stays untested. Proposal: keep the public page as the full offer, and in interviews show half the people the offer without Go Back first, then add it, and record whether interest and acceptable price change. Is that sound, or is there a better way?

3. **A stronger signal than signups without taking money.** A "Buy for $100" button that leads to "Not available yet, join the early list" measures how many people try to pay, with no payment collected. Combined with your interviews, is that a better demand test than signups alone? What risks do you see (honesty, App Store, legal)?

4. **Gifting as a channel.** You covered gift pricing but not gifting as acquisition. A friend buying for someone else is less embarrassed than buying for themselves, and the gift buyer is easier to reach. Is gifting worth testing early, or a distraction? It raises a hard question: entering the ex's email is a setup step the recipient must do, not the giver.

## Please finish with
- Your final recommended plan: the top 5 actions in order for the next 90 days, within 5-10 hours a week.
- Clear go / no-go numbers: what results would mean "build it," "change it" or "stop."
- Where you and Claude still disagree, stated plainly so the owner can decide.

---

# For reference: round 1

## Claude round 1


The owner wants the best way to make Clean Slate profitable. Claude (the developer) proposes the plan below. Attack it: what is wrong, missing or wishful, and what would you do instead? Keep the fixed decisions (ex-held Go Back code, $100 one-time core price, Go Back as a separate paid unlock, manual route first-class).

## Owner constraints
Solo owner with a full-time job, about 5-10 hours a week, AI-assisted development, low budget. He wants profit for himself, not a venture-scale company.

## Claude's proposal

**1. Keep costs near zero so a small number of sales is profitable.**
Manual-first, vault stored in the customer's own private iCloud (no server storage costs, no intimate material on our servers), one transactional email per Go Back. Main fixed costs: Apple developer account, a cheap email service, a one-time lawyer review. Apple's small-business commission is 15%, so a $100 sale nets roughly $85.

**2. Validate before building.** Landing page at $100, A/B with and without Go Back on the page, early-access signups. Then a $100 refundable pre-order to measure real willingness to pay.

**3. Price ladder, all one-time:**
- Clean Slate: $100 (guided cleanup + vault + Go Back available).
- Go Back unlock: around $49, charged each time it is used.
- Second cleanup for returning customers: discounted, around $50, so on-again, off-again customers come back.
- Possible premium tier later: a human-guided "concierge" session for divorces, $250+.

**4. Acquisition without paid ads (the hardest part).** Breakups are private, so classic word of mouth is weak. Ideas:
- **Gifting:** "Give a friend a clean slate." Friends often want to help someone after a breakup; a gift removes the buyer's embarrassment.
- **Short-form video** about the hope-versus-letting-go tension and the Go Back ritual, which is a novel hook.
- **Referral partners:** breakup coaches, therapists, divorce attorneys and mediators, with a referral fee.
- **Search:** people searching how to delete or hide photos of an ex.

**5. Rough math (assumptions, not evidence).** At $85 net, 100 sales a month is about $8,500 a month before Go Back and costs. A comparable breakup app gets roughly 4,500 downloads a month; at 2% conversion that is about 90 sales. Go Back adds perhaps 5-10% on top.

## Questions for you
1. Which part of this plan is most likely to fail, and why?
2. Is $100 one-time the most profitable structure within the owner's rules, or should the ladder change (Go Back price, gifting price, divorce tier)?
3. What is the single best acquisition channel for a solo owner with no ad budget, and what would you do in the first 90 days?
4. What would you add or cut to reach profitability fastest?

## Your round 1 answer

## 1. Most likely to fail: acquiring buyers economically

The plan assumes that a novel ritual can attract enough people willing to pay $100 for work they may still have to do themselves. Neither the demand nor the acquisition channel is proven.

The comparable-app calculation is not evidence for Clean Slate. Downloads are not qualified visitors, and a 2% paid conversion rate for a different product—at an unknown price—is not transferable. Even if 4,500 downloads and 2% conversion were real and applicable, that gives **90 sales, not 100**, and roughly $7,650 after a 15% commission, before other costs.

The second big risk is the **recoverability promise**. “Stored in the customer’s iCloud” does not, by itself, establish that content can be collected, protected and restored years later. Storage limits, account changes, device loss, app removal, encryption and what iOS permits all matter. If the product fails at restoration, its central reason to buy fails.

## 2. Change the ladder, not the $100 anchor

- **Cleanup: $100.** Keep it simple while testing exactly what one purchase covers. Don’t promise removal from every app or restoration of items the vault never received.
- **Go Back: test $29, $49 and $79**, rather than treating $49 as established. Disclose the separate charge before purchase; disclose the exact price if it has been set. Test willingness to pay alongside whether customers understand the ex-held code requirement.
- **Second cleanup: no automatic $50 discount yet.** It may weaken the $100 price and add entitlement complexity before repeat demand exists. If the owner later wants a repeat-customer offer, first define what is being sold and confirm it fits the fixed pricing decision and store rules.
- **Gifts: no discount.** A gift is a distribution mechanism, not evidence that the price needs to fall. Check Apple’s purchase and gifting rules before designing the flow.
- **Cut concierge for now.** Scheduling, emotional-support expectations and privacy handling are a poor fit for 5–10 hours a week. A divorce tier also introduces legal and financial situations this product is not equipped to resolve.

Go Back is unlikely to transform the economics immediately. At $49 and a 15% commission, it nets about $41.65 before other costs. If 5–10% of cleanup buyers each purchase it once, that adds only about **$2–$4 per cleanup buyer on average**. That usage rate is an assumption, not a forecast.

## 3. Best channel: high-intent search content

I would choose **useful, search-led guides** over short-form video. Someone searching “hide photos of my ex on iPhone” has a clearer immediate problem than someone watching breakup content. Search is slow and uncertain, but a small library can keep working without the owner publishing daily.

**First 90 days:**

- **Days 1–30:** Interview 10–15 people who have recently dealt with digital reminders. Ask what they actually did, what remained visible, and what they paid for—not just whether they like the idea. Put up one honest landing page with the $100 price, separate paid Go Back, ex-held code, and clear “not yet available” status.
- **Days 31–60:** Publish 3–4 genuinely useful guides on hiding or moving ex-related photos and attachments, with platform limitations and a relevant link to the landing page. Share them only in communities that permit it. Track page visits, qualified signups and interview requests.
- **Days 61–90:** Show interested people a clickable walkthrough and test whether they can explain what is protected, what remains manual, and how Go Back works. Compare Go Back price reactions in interviews. Review traffic and time spent; if search is producing little qualified interest, revise the channel rather than assuming it will eventually work.

I would **not A/B test the page with Go Back absent**: it is a core part of the actual offer, so that version tests a different product. At low traffic, an A/B test is also unlikely to yield a reliable answer. Test different explanations of the complete offer instead.

## 4. What I’d add or cut

**Add a feasibility spike before taking money:** demonstrate a small end-to-end vault: put customer-selected files into the proposed storage, verify they exist, remove originals only with appropriate confirmation, and restore them on a second device. Test failure cases. This is evidence about a prototype, not a promise of years-long durability.

**Add a contribution model that pays the owner for time.** The $85 figure applies only if the relevant Apple Small Business terms and purchase rules apply; taxes, refunds, support, email and maintenance still matter. For illustration, if each sale costs $5 in other variable costs and takes 30 minutes of support valued at $40/hour, contribution is **$60 per sale**. With hypothetical fixed costs of $500 for a period, that is nine sales to cover them—before paying back build and acquisition time.

**Cut the refundable preorder until feasibility and disclosure are solid.** It is stronger evidence than an email signup, but collecting money creates refund, support, payment-provider and legal obligations. First ask the owner whether to authorize it, after checking those requirements. Signups and stated willingness to pay are useful signals, not revenue.
