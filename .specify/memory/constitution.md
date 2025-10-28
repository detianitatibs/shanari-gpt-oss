# Shanari GPT OSS Constitution

<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### I. Code Quality

<!-- Example: I. Library-First -->

All code must follow a consistent, maintainable style, be fully documented, and be written with readability and extensibility in mind. Every change must be reviewed, tested, and documented before merging.

<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### II. Testing Standards

<!-- Example: II. CLI Interface -->

Unit, integration, and end‑to‑end tests are required for every feature. Pass rates of 100 % and a code coverage minimum of 90 % for public APIs must be met before a PR is merged. Tests are automatically run in CI and must not fail.

<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### III. User Experience Consistency

<!-- Example: III. Test-First (NON-NEGOTIABLE) -->

All interfaces—CLI, API, or web—must follow a single design language. Command names, flags, response keys, and error messages are standardized, and visual or textual consistency is validated by linting and review checklists.

<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### IV. Performance Requirements

<!-- Example: IV. Integration Testing -->

All new code must complete in a predictable, bounded time. Performance regressions are detected by automated benchmarks and must stay within an acceptable tolerance (≤ 10 % slowdown) unless a documented justification is approved.

<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

## Additional Constraints

<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

Security requirements are enforced through dependency scanning, code‑level linting, and runtime constraints. All public APIs must validate inputs, handle errors gracefully, and not expose sensitive data.

Accessibility guidelines, including WCAG 2.1 AA compliance, apply to all web components. UI components must be navigable via keyboard and screen readers.

Runtime guarantees define acceptable memory usage, response latency, and availability thresholds (e.g., < 99 % uptime for core services).

<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## Development Workflow, Review & Quality Gates

<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

All development follows feature‑branch Git flow. Pull requests must include unit tests, documentation updates, and a checklist of quality gates. CI validates style, linting, tests, performance benchmarks, and accessibility scans before approval. Major changes trigger a requirement for a dedicated design review and a security audit.

<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance

<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

All PRs and reviews must verify compliance with the principles and section requirements. Changes that affect a public interface must include a deprecation plan and version bump according to Semantic Versioning. Adoption of new third‑party libraries requires a security audit and performance impact assessment. Governance officers review all amendments for consistency before merge.

<!-- Example: All PRs/reviews must verify compliance; Complexity must be justified; Use [GUIDANCE_FILE] for runtime development guidance -->

**Version**: 1.0.0 | **Ratified**: TODO(RATIFICATION_DATE) | **Last Amended**: 2025-10-28

<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->
