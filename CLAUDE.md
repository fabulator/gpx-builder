# gpx-builder

TypeScript library that builds GPX 1.1 XML (Garmin and Strava extensions supported), published to npm. Consumer-facing API reference for agents is in `llms.txt` – keep it in sync when the public API changes.

## Structure

- `src/index.ts` – public entry: `buildGPX`, `BaseBuilder`, `GarminBuilder`, `StravaBuilder`, `_experimentalParseGpx`.
- `src/builder/*` – builders; each exposes model classes via static `MODELS`. `GarminBuilder` extends `BaseBuilder`, `StravaBuilder` extends `GarminBuilder`.
- `src/creators/XMLCreator.ts` – serializes `GPXBuildData` (`src/types.ts`) with `xmlbuilder2`.
- `src/parser/parser.ts` – experimental GPX → `BaseBuilder` parser. `_experimental*` exports are outside semver – they may change in any release, so changing them does not need `BREAKING`.
- `tests/*.test.ts` – Vitest.

## Commands

- `npm test` – Vitest.
- `npm run typecheck` – `tsc --noEmit` (run by the shared CI workflow). `npm run tsc` emits declarations into `dist` and runs on publish (`prepublishOnly`).
- `npm run lint` / `npm run lint:fix` – ESLint (`eslint-config-fabulator`, strict type-checked).
- `npm run build` – Rollup (`rollup-config-fabulator`) → CJS in `dist`, ESM in `es`, one file per module. The build fails if the output imports a package missing from `dependencies` (e.g. Babel helpers, `core-js`). Polyfills are disabled for libraries.
- `npm run release` – semantic-release (CI only).

Before finishing a change run `npm run test:all && npm run build`.

## Release & CI

- `.github/workflows/main.yml` calls the shared `fabulator/workflows/.github/workflows/npm-package.yml@v1` (npm ci → lint → typecheck → test → release on `master`). `pr-title.yml` lints PR titles with commitlint.
- npm publishes via **trusted publishing (OIDC)** – `id-token: write` in `main.yml`, trusted publisher on npmjs.com = `fabulator/gpx-builder` + `main.yml`. There is no `NPM_TOKEN`.
- `GHUB_BOT_TOKEN` (PAT) is passed as `release-token` and only reaches the release step (pushes the release commit/tag, creates the GitHub release).
- `repository.url` in `package.json` must stay `git+https://github.com/fabulator/gpx-builder.git` – provenance checks it against the repo.
- Never bump `version` by hand; semantic-release derives it from commits.

## Commits

commitlint (`commitlint-config-fabulator`, husky `commit-msg` hook): `<Type>: <subject>`, no scope, PascalCase type from `Changed`, `Fixed`, `Removed`, `Added`, `Depreciated`, `Docs`, `Test`, `InProgress`, `WIP`, `Refactored`. `BREAKING` in the subject → major, `Removed` → major, `Changed`/`Added`/`Refactored`/`Depreciated` → minor, `Fixed`/`Docs` → patch. `NO_RELEASE` in the subject skips the release.

## Dependency notes (2026-11)

- Babel 8 (`babel-config-fabulator@2`, `@babel/core` is a peer of `rollup-config-fabulator@3`).
- `typescript` stays on `~6.0` – `typescript-eslint` 8 does not support TS 7. TS 6 needs explicit `rootDir` and `types: ["node"]` (xmlbuilder2 typings reference `events`).
- `rollup.config.mjs` must stay `.mjs` (Rollup 4 loads `.js` as CommonJS).
