# Custom Instructions for GitHub Copilot (VMODEL-based)

## 1. User Requirement Specification (URS)
- The application is a Muay Thai live scoreboard for Sunday afternoon broadcasts.
- Must be extremely easy to use, especially for elderly users with low IT skills.
- Supports three user roles: Referee, Viewer, Admin.
- Real-time score updates and role-based access control.
- Accessible via web browser, multi-user, and remote access.

## 2. System Requirement Specification (SRS)
- Stack: Next.js (frontend), NestJS (backend), PostgreSQL (database), Docker for development.
- Real-time data sync (WebSocket or similar).
- Secure login and session management.
- Persistent data storage with regular backup and restore capability.
- Logging of all user actions and HTTP access.

## 3. Functional Specification (FS)
- Referee: Input/edit scores (dropdown 0-10), edit boxer names, submit/update scores, edit match summary, navigate matches.
- Viewer: Read-only scoreboard and summary, no controls.
- Admin: Full access, user management, match editing, view/export logs, system settings.
- Scoreboard UI: Boxer names (red/blue), 3 judge columns, 5 rounds + summary, color-coded as specified.
- Automatic result summary (e.g., "Red wins 3-0"), editable by Referee/Admin.

## 4. Technical Design Specification (TDS)
- Next.js for responsive, accessible UI with large buttons and dropdowns.
- NestJS REST API/WebSocket for real-time updates.
- PostgreSQL schema for matches, boxers, scores, users, logs.
- Docker Compose for local development (Next.js, NestJS, PostgreSQL).
- Security: Role-based access, session, and password management.
- Logging: User actions, HTTP access, exportable as JSON.

## 5. Implementation & Unit Test
- Scaffold Next.js and NestJS apps in a monorepo.
- Implement Docker Compose for all services.
- Write unit tests for backend (NestJS) and frontend (Next.js).
- Ensure all role-based UI and API restrictions.
- Test real-time score updates and data persistence.

## 6. Integration & System Test
- Test multi-user, multi-role scenarios.
- Validate UI on common browsers and screen sizes.
- Simulate live event pressure and data recovery.
- Test log viewing and export.

## 7. Acceptance Test
- Elderly users can operate after minimal training.
- Real-time updates work reliably.
- Role-based access is enforced.
- Complete historical and log data is accessible.
- System is stable and available during live events.

---
**Instruction for Copilot:**  
When generating code, explanations, or tests for this repository, always align with the above requirements and structure your output according to the VMODEL phases. Use Next.js, NestJS, PostgreSQL, and Docker as the technology stack. Prioritize accessibility, simplicity, and reliability.
