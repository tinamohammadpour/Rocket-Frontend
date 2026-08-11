# Contributing Guide

## 1- Project Architecture

\`\`\`
public/                # all fonts, icons, and images used in the project (e.g. logo)
src/
├── app/                # routes and pages (Next.js App Router)
├── components/
│   ├── ui/             # shadcn components
│   └── features/       # components specific to a particular feature
├── constants/          # constant values (e.g. navbar items)
├── store/              # Zustand files
├── schemas/            # Zod schemas
├── services/           # API communication functions
├── hooks/              # custom hooks (e.g. React Query hooks)
├── providers/          # context providers
├── lib/                # general helper functions
└── types/               # shared TypeScript types
\`\`\`

Each new file must go in the folder that matches its role — not wherever is most convenient.

## 2- File Naming Rules

| File type | Convention | Example |
| --- | --- | --- |
| React component | PascalCase | `UserProfile.tsx` |
| Custom hook | camelCase with `use` prefix | `useOrders.ts` |
| Zustand store | camelCase with `use` prefix and `Store` suffix | `useUserStore.ts` |
| Service/API | camelCase with `Service` suffix | `orderService.ts` |
| Schema (Zod) | camelCase with `Schema` suffix | `authSchema.ts` |
| Type/Interface | camelCase with `Type` suffix | `userProfileType.ts` |
| Folders | kebab-case or camelCase (no spaces or capital letters) | `user-profile/` |

## 3- Code Naming Rules (inside files)

- Components: `PascalCase` → `function UserCard() {}`
- Variables and functions: `camelCase` → `const userName = ...`
- Global constants: `UPPER_SNAKE_CASE` → `const MAX_RETRY_COUNT = 3`
- Interface/Type: `PascalCase` → `interface UserData {}`

## 4- Commit Message Rules

We use the **Conventional Commits** pattern (enforced by commitlint):

\`\`\`
feat: adding a new feature
fix: fixing a bug
chore: side changes (settings or packages)
docs: documentation changes
refactor: rewriting code without changing behavior
style: styling/formatting changes without changing logic
test: adding or changing tests
\`\`\`

Examples of correct commit messages:
\`\`\`
git commit -m "feat: add login form validation"
git commit -m "fix: resolve order list not updating after delete"
\`\`\`

## 5- Branch Rules

**Never work or commit directly on the `main` branch.**

For any feature or change:

\`\`\`bash
git checkout main
git pull origin main          # always get the latest version of main first
git checkout -b feature/[feature-name]
\`\`\`


### If you accidentally commit directly on `main`

Since `main` is protected, if you commit and try to push directly on it,
you will get an error like this:

\`\`\`
remote: error: GH013: Repository rule violations found for refs/heads/main.
remote: - Changes must be made through a pull request.
\`\`\`

This is expected — it means the branch protection is working correctly.
To fix it, undo your last local commit with:

\`\`\`bash
git reset --hard HEAD~1
\`\`\`

**What this command does:** it removes your last commit from your local
`main` branch and restores your files to the state they were in before
that commit — as if the commit never happened.

⚠️ **Warning:** this command permanently discards your changes. Make sure
you actually want to undo the commit before running it. If you're not
sure, copy your changed files somewhere safe first.

After running it, create a new branch from the current state and commit
your work there instead:

\`\`\`bash
git checkout -b feature/[feature-name]
git add .
git commit -m "feat: [explain the change]"
git push -u origin feature/[feature-name]
\`\`\`


### If you accidentally made multiple commits directly on `main`

If you committed several times on your local `main` branch before trying
to push, follow these steps to move your work to a proper branch without
losing anything:

\`\`\`bash
# 1. Create a new branch — this carries all your commits with it
git checkout -b feature/[feature-name]

# 2. Go back to main and reset it to match GitHub's version
git checkout main
git reset --hard origin/main

# 3. Push your new branch (with all your commits intact)
git checkout feature/[feature-name]
git push -u origin feature/[feature-name]
\`\`\`

**What happened here:**
- Step 1 creates a snapshot branch that includes every commit you made,
  exactly as they were.
- Step 2 only resets your **local** `main` to match the clean version on
  GitHub — it does not touch or delete your commits, since they're now
  safely saved on `feature/[feature-name]`.
- Step 3 pushes your actual work as a normal feature branch.

After this, open a pull request from `feature/[feature-name]` into `main`
as usual.

⚠️ Always double-check with `git log` before and after running
`git reset --hard` to confirm your commits are safe on the new branch
first.


### 6- Branch Naming Pattern

| Task | Prefix | Example |
| --- | --- | --- |
| Adding a new feature | `feature/` | `feature/login-page` |
| Fixing a bug | `fix/` | `fix/order-delete-bug` |
| Side changes | `chore/` | `chore/update-dependencies` |

After your work is done:

\`\`\`bash
git add .
git commit -m "feat: [explain the change]"
git push -u origin feature/[feature-name]
\`\`\`

Then open a pull request to `main` and wait for a team member to review your code.

## 7- Before Every Pull Request

- [ ] `npm run lint` runs with no errors
- [ ] `npm run build` passes with no errors
- [ ] You have tested the code yourself at least once