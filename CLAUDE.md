# Clean Slate: working rules

Clean Slate is a breakup app that puts a relationship's digital history out of sight while keeping a paid way to get it back. Read `docs/PROJECT-CONTEXT.md` before planning work.

## Working with the owner
- Claude is primary and technical. GPT is the independent reviewer and creative/product sounding board. The owner makes every final decision.
- Do the technical work yourself. Ask the owner only for product, purchase, rights, legal and authorization decisions.
- When the owner must act, give a few precise steps in plain language.
- Never buy anything, accept a licence or sign up for a service on the owner's behalf.
- Updates go out as a Netlify preview link and a plain summary. No zip unless the owner asks or for app-store work.

## Fixed product decisions (do not redesign)
- The ex-held Go Back password is deliberate. The ex receives only a meaningless code by email: no content, no relationship details. Raise risks about it, but never propose removing or replacing it.
- The core price is $100, one time, not a subscription. Go Back is a separate paid unlock.
- A guided, manual cleanup route is a first-class option, not a fallback. AI-assisted discovery is optional.

## Rules
- Never put a customer's photos, messages or files on our servers without an explicit owner decision. Prefer on-device or the customer's own private cloud storage.
- Never promise in copy that something can be restored unless the build actually keeps a recoverable copy.
- Work on a branch and open a pull request. GPT reviews it automatically. Merge to `main` only with the owner's approval, because merging deploys to production.
- Live builds cost Netlify credits (previews are free). Release to production at most once a day.
- Run `npm test` before calling a build ready.
- Report implemented, automatically tested, manually verified and device-tested work separately.
- Keep this project separate from the games and from RedHawks work.
