# Проект my-site

## Технологии

- Astro 4 + TypeScript.
- Компоненты: в первую очередь на Astro, React только где нужна сложная интерактивность.
- Менеджер пакетов: pnpm.
- Node.js: 20.
- База данных: Supabase Postgres (free tier на старте).
- Деплой на старте: Vercel (статический билд) + Supabase.
- В будущем возможен переезд API + БД на Hetzner / Render.

## Команды

- Установка зависимостей: `pnpm install`.
- Запуск dev: `pnpm dev`.
- Билд: `pnpm build`.
- Превью билда: `pnpm preview`.
- Линтер: `pnpm lint` (если есть).
- Тесты: `pnpm test` (если есть).

## Правила

- Все новые страницы клади в `src/pages`.
- Повторно используемые части в `src/components`.
- Общая бизнес-логика в `src/lib` или `src/server` для серверной части.
- Не меняй структуру проекта без пояснения и плана.
- Конфиденциальные ключи хранить только в `.env.local`, не коммитить.
- Если предлагаешь изменить архитектуру или хостинг — сначала краткий план с оценкой по деньгам.

# Repository Guidelines

## Project Structure & Module Organization
The repository currently ships only with `LICENSE`, so each change should set up or extend the agreed layout: keep production code inside `src/`, mirror test fixtures under `tests/`, and drop static assets (images, fonts, favicons) into `public/`. Document any new top-level directories inside the README so future agents understand where to place follow-up modules. When adding frameworks (Next, Astro, plain Vite), store shared UI primitives in `src/components/` and site-wide styles in `src/styles/`.

## Build, Test, and Development Commands
Tooling is established per contribution, so describe any new scripts you introduce. Use `npm install` to sync dependencies, `npm run dev` for local preview servers, `npm run build` to emit optimized assets into `dist/`, and `npm test` to execute automated suites. If extra steps (e.g., `npm run lint` or `npm run storybook`) are needed, add them to `package.json` scripts and mention them in your PR description to keep the workflow reproducible.

## Coding Style & Naming Conventions
Default to modern JavaScript/TypeScript with 2-space indentation for JS/TS/JSON and 4 spaces for Python tooling scripts. Favor functional, modular components, avoid mutating shared state, and keep functions under 50 lines. Filenames use PascalCase for components, kebab-case for utilities, and `.spec.ts` suffixes for tests. Run Prettier and ESLint via `npm run lint` before committing; include the configs alongside new tooling so formatting remains consistent.

## Testing Guidelines
Author Jest or Vitest specs inside `tests/`, mirroring the structure of `src/`. Provide descriptive names (`feature-name.spec.ts`) and assert edge cases such as responsive breakpoints or data-loading failures. Target at least 80% statement coverage (`npm test -- --coverage`) and attach screenshots or logs for manual QA steps when visual changes occur. Keep fixtures lightweight and prefer test helpers over duplicated setup code.

## Commit & Pull Request Guidelines
Follow Conventional Commits (`feat: hero section`, `fix: navbar overlap`) with wrapped bodies at 72 characters and references to tracked issues (e.g., `Refs #12`). Keep pull requests narrowly scoped (<400 changed lines) and ensure CI/test commands pass before requesting review. Every PR description should outline the problem, solution, test evidence, and any deployment or configuration changes so reviewers can reproduce the results quickly.

## Security & Configuration Tips
Do not commit secrets, API keys, or environment files; use `.env.local`, document required keys, and provide safe defaults. Audit any new dependency (`npm audit`, license check) and explain why it is necessary. When touching configuration (ESLint, Vite, Next), comment tricky sections inline and validate that the repository still builds from a fresh clone.

