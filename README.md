# Priority Focus Tracker — Task List

A small productivity app that helps users decide what to work on next.  
Users add tasks, set priority, deadline, and estimated time, and the app recommends the next task for a focused work session.

## MVP Scope

- [x] Landing page
- [x] Sign up / Sign in
- [x] Dashboard
- [ ] Authentication and registration
- [ ] Tasks CRUD
- [ ] Priority scoring
- [ ] Focus timer
- [ ] History and stats
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

```txt
src/
  app/
    providers/
    layouts/

  pages/
    dashboard/
      ui/
        DashboardPage.vue

  widgets/
    dashboard-timer/
      ui/
        DashboardTimer.vue

    today-tasks-list/
      ui/
        TodayTasksList.vue

    recommended-task-card/
      ui/
        RecommendedTaskCard.vue

  features/
    quick-add-task/
      ui/
        QuickAddTaskForm.vue
      model/
        useQuickAddTask.ts

    start-timer/
      ui/
        StartTimerButton.vue
      model/
        useStartTimer.ts

  entities/
    task/
      ui/
        TaskRow.vue
        TaskPriorityBadge.vue
      model/
        types.ts
        constants.ts

    project/
      ui/
        ProjectSelect.vue
      model/
        types.ts

    timer-session/
      model/
        types.ts

  shared/
    ui/
    lib/
    api/

```

```txt
type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum]
```
