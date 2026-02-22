# DisasterPaws Frontend — BUILD_PIPELINE

_Last updated: 2026-02-22_

## Purpose

Project-specific validation workflow for reliably finding, building, and validating this codebase.

This file complements the shared standard:
- `/Users/xaviermendez/Desktop/Develop/docs/DEVELOPMENT_VALIDATION_PIPELINE.md`

---

## Project Root

```bash
cd /Users/xaviermendez/Desktop/Develop/xavisProjects/DisasterPawsFrontend
```

---

## Validation Pipeline (run in order)

## 1) Install dependencies

```bash
npm ci
```

If lockfile/deps changed during active development and `npm ci` is too strict:

```bash
npm install
```

## 2) Lint (static quality gate)

```bash
npm run lint
```

## 3) Production build (required gate)

```bash
npm run build
```

## 4) Optional local production smoke check

```bash
npm run start
```

Then open: `http://localhost:3000`

---

## Fast Pre-MR Command Bundle

```bash
cd /Users/xaviermendez/Desktop/Develop/xavisProjects/DisasterPawsFrontend \
  && npm ci \
  && npm run lint \
  && npm run build
```

---

## Pass/Fail Criteria

A change is validation-ready when all are true:
- `npm run lint` exits successfully.
- `npm run build` exits successfully.
- No new warnings/errors indicating broken app behavior.
- Manual smoke check completed for changed route(s).

---

## Route Smoke Checklist (current scaffold)

Validate these pages load without crash:
- `/`
- `/login`
- `/incidents`
- `/review-queue`
- `/assignments`
- `/communications`
- `/anomalies`
- `/reports/daily`
- `/settings/users`
- `/settings/resources`
- `/settings/models`

---

## Security Checks During Validation

- Confirm no secrets in repo (`.env`, keys, tokens).
- Confirm client code does not expose sensitive internals.
- Confirm any new user inputs have validation and safe handling.

---

## If Validation Fails

1. Fix lint/type/build errors first.
2. Re-run full pipeline.
3. Document root cause + resolution in MR notes.
4. If failure is due to unclear requirements, pause and request clarification before further code changes.

---

## Future Enhancements

When test framework is added, extend pipeline:

```bash
npm run test
npm run test:e2e
```

and make tests required before MR ready.