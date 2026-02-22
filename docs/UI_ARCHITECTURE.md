# MR Architecture Guidelines

_Last updated: 2026-02-22_

## Purpose

This document defines how Merge Requests (MRs) should be designed and scoped in this project.

Primary goal: every MR should be easy to review, have a clear purpose, and add meaningful value to the application.

---

## Core MR Principles

1. **Reviewable size**
   - Keep MRs small enough for fast, focused review.
   - Prefer incremental changes over large bundled work.
   - If an MR starts growing, split it into follow-up MRs.

2. **Explicit goal**
   - Each MR should have one primary objective.
   - The objective should be stated in the title and summary.
   - Avoid mixing unrelated concerns in the same MR.

3. **Value delivery**
   - Every MR should improve the product, developer workflow, reliability, or maintainability.
   - “Scaffolding-only” MRs are acceptable when they clearly unblock upcoming value.

---

## Required MR Structure

Each MR should include:

- **Goal:** one-sentence statement of intended outcome.
- **Scope:** what is included.
- **Out of scope:** what is intentionally excluded.
- **Validation:** what checks were run and the results.
- **Acceptance criteria:** concrete conditions for approval.

---

## Suggested MR Sizing Heuristics

Use these as guardrails (not rigid limits):

- Prefer a single coherent theme per MR.
- Keep file changes focused and understandable in one pass.
- Keep implementation depth aligned with the stated objective.
- Defer secondary enhancements to a subsequent MR.

If reviewers must context-switch heavily to understand the MR, it is likely too large.

---

## MR Value Categories

An MR should add value in at least one category:

- **User value:** better UX, clearer flows, new capability.
- **Engineering value:** better architecture, readability, testability.
- **Quality value:** improved validation, fewer defects, stronger security.
- **Delivery value:** unblocks future work with intentional scaffolding.

---

## MR Lifecycle (Default)

1. Clarify direction and acceptance criteria.
2. Implement the smallest viable change for the goal.
3. Run validation pipeline (`npm run lint`, `npm run build`, plus applicable checks).
4. Prepare concise MR summary + checklist.
5. Request review.
6. Address feedback in focused commits.

---

## Anti-Patterns to Avoid

- Combining multiple feature goals in one MR.
- Hidden scope expansion during implementation.
- Unvalidated code submitted for review.
- Architecture changes without documenting intent.
- Large refactors without incremental checkpoints.

---

## Practical Rule

If you cannot explain the MR in 2–3 sentences with a clear “why,” it is likely not scoped correctly yet.

---

## Related Docs

- `./CODEBASE_INTERACTION.md`
- `./../BUILD_PIPELINE.md`
- `/Users/xaviermendez/Desktop/Develop/docs/DEVELOPMENT_VALIDATION_PIPELINE.md`
