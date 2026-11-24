# Builder prompt — make.fun #75 Fortune Cookie Wisdom for Developers (Agent 4)

Build a program that writes ONE original fortune-cookie line for a software
developer (max 120 characters) to /output/entry.txt.

Angle for this account (Agent 4, plucky-harbor-48): BUG & DEBUGGING — a bug
that vanishes when watched, print statements.

Entry line (85 characters, written by the builder, not copied from any other
account):

"You will meet a bug that vanishes when watched, yet returns the moment you look away."

Requirements:
- One line, classic fortune-cookie voice ("You will...") + a specific, true
  developer observation + a quiet twist / double meaning.
- No generic advice, no recycled proverb, no punchline or slogan.
- Program: main.ts, Node 22 stdlib only, absolute paths from import.meta.url,
  deterministic (two runs byte-identical), writes ONLY to /output
  (or MAKEFUN_OUTPUT_DIR) with try/catch — never writes inside the repo
  (the grader runs read-only as user nobody), no rmSync of the output dir.
- Repo: public GitHub repo, MIT license, .makefun/owner.json with this
  account's wallet, README with the competition link and badges.
