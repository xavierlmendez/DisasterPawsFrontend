# DisasterPaws Frontend — UI Architecture Map

_Last updated: 2026-02-22_

## 1) Purpose

Design a production-style frontend for Human-in-the-Loop (HITL) rescue operations, where AI suggestions are always reviewable and critical actions are human-approved.

Tech stack (selected):
- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**

---

## 2) Core UX Principles

1. **Human-first control:** AI suggests, humans decide.
2. **Fast triage workflows:** reduce click depth for high-frequency actions.
3. **Explainable AI outputs:** confidence, rationale, and risk flags visible by default.
4. **Auditability:** every approval/rejection/edit is traceable in timeline form.
5. **Graceful degradation:** manual fallback path available for every AI-assisted flow.

---

## 3) Route Architecture (App Router)

```txt
/src/app
  /(auth)
    /login
  /(dashboard)
    /layout.tsx
    /page.tsx                          # Ops overview
    /incidents
      /page.tsx                        # Incident list + filters
      /[incidentId]/page.tsx           # Incident detail + timeline
    /review-queue
      /page.tsx                        # AI suggestions pending approval
    /assignments
      /page.tsx                        # Resource assignment board
    /communications
      /page.tsx                        # Message drafts + send gate
    /anomalies
      /page.tsx                        # Low-confidence/duplicate/stale alerts
    /reports
      /daily/page.tsx                  # Daily ops summary + sign-off
    /settings
      /users/page.tsx                  # Roles: Operator/Reviewer/Admin
      /resources/page.tsx              # Shelter/foster/transport registry
      /models/page.tsx                 # AI behavior config + thresholds
```

### Layout zones
- **Left nav:** primary workflows
- **Top bar:** active queue counts, global search, user/role
- **Main panel:** route content
- **Right drawer (contextual):** AI rationale, audit snippets, quick actions

---

## 4) Feature Modules & Responsibilities

### A) Incident Intake + Triage
- Incident list table/cards (priority, status, confidence, location, age)
- AI triage panel: suggested priority + confidence + rationale
- Human actions: **Approve / Reject / Edit**
- Required fields before approval (guardrails)

### B) Review Queue (HITL Core)
- Central queue for pending AI decisions
- Filters: confidence band, severity, region, age, model version
- Batch-safe actions only where low risk; high-risk actions remain single-item

### C) Resource Matching
- Suggested shelter/foster/transport options with fit score
- Capacity + distance + constraints surfaced
- Human confirmation required before assignment commit
- Manual assignment fallback path

### D) Communications Drafting
- AI-generated outbound drafts (volunteers/shelters)
- Edit + preview + approval gate before send
- Version history for draft changes

### E) Anomaly Guardrails
- Duplicate report detection
- Low-confidence model output queue
- Stale incident alerts
- Human resolution workflow with reason capture

### F) Daily Summary
- Daily AI-generated report
- Suggested next actions
- Human sign-off action + immutable snapshot

---

## 5) Shared Component Map

```txt
/src/components
  /layout
    AppShell.tsx
    Sidebar.tsx
    Topbar.tsx
  /incidents
    IncidentTable.tsx
    IncidentFilters.tsx
    IncidentStatusBadge.tsx
    IncidentDetailPanel.tsx
  /triage
    TriageSuggestionCard.tsx
    ConfidenceBadge.tsx
    ApprovalActionBar.tsx
    ApprovalReasonModal.tsx
  /assignments
    ResourceMatchList.tsx
    CapacityIndicator.tsx
    AssignmentConfirmDialog.tsx
  /communications
    DraftEditor.tsx
    SendGateDialog.tsx
    DraftHistoryPanel.tsx
  /anomalies
    AnomalyQueueTable.tsx
    ResolutionForm.tsx
  /audit
    Timeline.tsx
    AuditEventItem.tsx
  /common
    EmptyState.tsx
    ErrorState.tsx
    LoadingSkeleton.tsx
    Pagination.tsx
```

---

## 6) State Architecture

## Server state (recommended)
- Use query/mutation layer (e.g., TanStack Query) for:
  - incidents
  - triage suggestions
  - assignments
  - draft messages
  - anomaly queue
  - metrics/report endpoints

## Client state
- Local UI state: drawers, selected rows, filter panel visibility
- Form state: approval reason, assignment overrides, draft edits

## Global app state (minimal)
- Auth session + role
- Active organization/site context
- Notification toasts

### Real-time updates
- Start with polling for queue pages (e.g., 10–30s)
- Upgrade to SSE/WebSocket for live queue counts and status changes

---

## 7) Data Contract Shapes (Frontend-facing)

```ts
type AISuggestion = {
  id: string;
  incidentId: string;
  type: 'triage' | 'resource_match' | 'message_draft';
  confidence: number; // 0..1
  rationale?: string;
  modelVersion?: string;
  createdAt: string;
};

type ApprovalDecision = {
  suggestionId: string;
  decision: 'approved' | 'rejected' | 'edited';
  reason?: string;
  editedPayload?: Record<string, unknown>;
};

type AuditEvent = {
  id: string;
  incidentId: string;
  actorType: 'human' | 'ai' | 'system';
  actorId: string;
  action: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
};
```

---

## 8) Access Control in UI

Roles:
- **Operator:** executes day-to-day incident handling
- **Reviewer:** approves/rejects AI outputs
- **Admin:** config + model threshold management

UI policy:
- Hide/disable actions not permitted by role
- Show explicit “requires reviewer approval” badges
- Never render destructive actions without confirmation

---

## 9) Observability & UX Safeguards

- Request-state indicators everywhere (loading/success/error)
- Optimistic updates only where reversible
- Idempotency-aware action buttons (prevent double submit)
- Error surfaces include next best action (“Retry”, “Fallback to manual”)
- Track product metrics in UI events:
  - approval acceptance rate
  - override rate
  - review turnaround time

---

## 10) Milestone-based UI Build Plan

### Milestone 1 — Foundation
- App shell + nav + auth gate
- Incident list + incident detail page
- Basic API client + error/loading states

### Milestone 2 — Triage HITL Loop
- Triage suggestion card
- Approval/reject/edit actions
- Audit timeline integration

### Milestone 3 — Resource Matching
- Match recommendation UI
- Human confirmation flow
- Manual fallback flow

### Milestone 4 — Communications + Anomalies
- Draft editor + send gate
- Anomaly queue + resolution forms

### Milestone 5 — Reports + hardening
- Daily summary view + sign-off
- Reliability polish, accessibility pass, perf checks

---

## 11) Open Questions

1. Do we want map-first incident views in v1, or list-first only?
2. Should communications send occur in-app in v1, or approval-only with external handoff?
3. What confidence threshold should auto-route to mandatory reviewer lane?
4. What is the minimum audit detail required for grading/demo success?
