<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- Added/Expanded Principles: Security now includes Auth-First (SAML) and strict input sanitization.
- Added Additional Constraints: NextJS, Atomic Design, Clean Architecture, SQLite (Cloud Storage mount), Cloud Run, GCP, Docker, GitHub Actions CI/CD, Artifact Registry.
- Added Development Workflow details: ESLint, Jest, Docker build, Cloud Run deploy, TDD enforcement.
- Updated Governance: no change to process.
- Templates updated: ✅ .specify/templates/spec-template.md, plan-template.md, tasks-template.md.
-->
# BlogWebApp Constitution
<!-- Specified for a personal web application with top page, profile, and blogging features. -->

## Core Principles

### I. Content-First
The application prioritizes high‑quality, well‑structured content. All features must support content creation, editing, and publishing workflows, with a focus on ease of use for authors.

### II. SEO‑friendly
Every route, meta tag, and data payload must be optimized for search engines. URLs should be human‑readable, headings structured, and schema.org annotations used wherever applicable.

### III. Responsive Design
The UI must adapt seamlessly to mobile, tablet, and desktop. All components are built with CSS flexbox/grid and tested on the latest two major browsers.

### IV. Performance
The application should load in under 2 seconds on a 3G connection. Caching strategies, code splitting, and asset optimization are mandatory.

### V. Security & Authentication (Auth‑First)
- All user input is sanitized to prevent XSS.
- CSRF protection is mandatory; all POST routes require a valid CSRF token.
- Authentication is SAML‑based; only users with a permitted SAML assertion may edit or publish content.
- Stateless JWTs are issued post‑login and stored securely on the client.
- All API endpoints require proper scope checks.

## Additional Constraints

### Technology Stack & Architecture
- Frontend: Next.js 16 (React 18) with Atomic Design and Clean Architecture patterns.
- Backend: Node.js 25 with Express, serving a server‑less API.
- Database: SQLite3 stored in Cloud Storage, mounted into Cloud Run via volume.
- Infrastructure: Deployed on Google Cloud Run; Dockerized via a multi‑stage Dockerfile.
- Development: Docker Compose on macOS (Linux containers) exposing `localhost:3000` (Node 25, Next 16).
- CI/CD: GitHub Actions running ESLint, Jest, Docker build, Artifact Registry push, and Cloud Run deployment (Node 25, Next 16).
- Authentication: SAML SSO integrated with Google Workspace or another IdP.

## Development Workflow

### Review Process
- All pull requests must pass unit tests (≥90% coverage), linting (ESLint), and static type checks (TS).
- Code reviews are mandatory; at least one senior developer must approve.
- All PRs must include a migration plan if database schema changes occur.

### Quality Gates
- Deployments to staging trigger performance benchmarks (Lighthouse audits) and security scans (OWASP Zap).
- Docker images are built and scanned with Trivy before being pushed to Artifact Registry.

### Test‑Driven Development
- Tests (Jest) are written before or alongside implementation.
- No code merge is allowed unless all tests pass under the CI pipeline.

## Governance

All changes to the constitution must be proposed in a GitHub issue, discussed, and approved via a 2/3 majority of council members. Amendments trigger a release candidate build to ensure backward compatibility. Compliance is reviewed quarterly by the governance board.

**Version**: 1.1.0 | **Ratified**: 2025-10-23 | **Last Amended**: 2025-10-23