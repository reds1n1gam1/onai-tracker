# Priority Focus Tracker — Task List

A small productivity app that helps users decide what to work on next.  
Users add tasks, set priority, deadline, and estimated time, and the app recommends the next task for a focused work session.

The main goal:

> Add tasks → prioritize them → start the most important task now.

---

## Public

- [ ] Build landing page  
  Create a simple public page that explains the product and encourages users to sign up.
  - [ ] Add hero section
  - [ ] Add problem / solution section
  - [ ] Add “How it works” section
  - [ ] Add main features section
  - [ ] Add CTA to sign up

- [ ] Add authentication  
  Allow users to create an account, sign in, and access protected app pages.
  - [ ] Add sign up page
  - [ ] Add sign in page
  - [ ] Add logout action
  - [ ] Protect app routes

---

## App

- [ ] Build dashboard page  
  The main app page where users see what they should work on next.
  - [ ] Show recommended next task
  - [ ] Add “Start focus” button
  - [ ] Show today’s focus time
  - [ ] Show tasks due soon

- [ ] Build tasks page  
  A page for managing all user tasks.
  - [ ] Add create task action
  - [ ] Add edit task action
  - [ ] Add delete task action
  - [ ] Add change task status action
  - [ ] Add filters by priority
  - [ ] Add filters by status

- [ ] Define task model  
  Define the core data structure for user tasks.
  - [ ] Add title field
  - [ ] Add description field
  - [ ] Add priority field: `low`, `medium`, `high`, `urgent`
  - [ ] Add status field: `backlog`, `active`, `completed`, `skipped`
  - [ ] Add estimated minutes field
  - [ ] Add deadline field
  - [ ] Add optional category field

- [ ] Build priority algorithm  
  Calculate which task should be recommended next.
  - [ ] Calculate task score
  - [ ] Sort tasks by score
  - [ ] Select recommended next task

- [ ] Build focus session page  
  A focused screen for working on one selected task.
  - [ ] Add timer
  - [ ] Add start action
  - [ ] Add pause/resume action
  - [ ] Add complete task action
  - [ ] Add skip task action
  - [ ] Save focus session history

- [ ] Build history page  
  Show previous focus sessions and completed work.
  - [ ] Show completed focus sessions
  - [ ] Show task name
  - [ ] Show session duration
  - [ ] Show session date

- [ ] Build stats page  
  Show basic productivity statistics.
  - [ ] Show total focus time today
  - [ ] Show total focus time this week
  - [ ] Show completed tasks count
  - [ ] Show time by priority
  - [ ] Show time by category

- [ ] Build settings page  
  Allow users to configure basic app preferences.
  - [ ] Add default focus duration setting
  - [ ] Add break duration setting
  - [ ] Add user profile section
  - [ ] Add optional theme setting

---

## MVP Scope

- [ ] Landing page
- [ ] Sign up / Sign in
- [ ] Dashboard
- [ ] Tasks CRUD
- [ ] Priority scoring
- [ ] Focus timer
- [ ] History
- [ ] Settings

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
