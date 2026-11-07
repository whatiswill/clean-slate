# Studio kit

Same setup as the games: GitHub stores the project, Claude builds it, GPT reviews.

- **Pull request opened:** runs the tests, sends the changes to GPT and posts its review on the pull request.
- **Creative review:** add the label `creative-review` to a pull request once there are screens to capture.
- **Ask GPT a design question:** add a file to `studio/questions/` on a branch named `ask/...` and push. GPT's reply is saved beside it as `.answer.md`.
- **Cost control:** without the `OPENAI_API_KEY` secret, nothing runs and nothing is charged.
