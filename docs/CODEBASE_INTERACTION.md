# Codebase Interaction Guide

_Last updated: 2026-02-22_

This file defines how changes should be introduced in this repository.

## Order of operations

1. Read `docs/UI_ARCHITECTURE.md` for current implementation scope.
2. Read `BUILD_PIPELINE.md` for local validation commands.
3. If direction is unclear, stop and ask for clarification before changing code.
4. Implement the smallest viable change.
5. Run validation (`npm run lint` and `npm run build`).
6. Summarize what changed, what was validated, and what remains.

## Change style

- Prefer small, reviewable MRs.
- One main objective per MR.
- Avoid adding new abstractions until needed.
- Keep placeholder code obvious and easy to replace.

## Clarification gate

Before coding, confirm:
- feature goal
- in-scope routes/components
- out-of-scope items
- acceptance criteria

If any of these are missing, request direction first.
