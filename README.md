# FarmSec Frontend

FarmSec is a responsive Next.js frontend prototype for a human-centric, behaviour-driven cyber awareness platform for farmers and agricultural stakeholders.

The frontend was implemented for progress evaluation. It uses dummy accounts and browser-local data only. It does not include a production database, real authentication, email/SMS delivery, GoPhish API integration, or real credential collection.

## Technology

- Next.js 16 App Router
- React 19
- TypeScript
- Plain responsive CSS
- Lucide React icons
- Browser localStorage for dummy authentication and demonstration data

## Demo accounts

### Farmer
- Email: `farmer@farmsec.demo`
- Password: `farmer123`

### Administrator / Researcher
- Email: `admin@farmsec.demo`
- Password: `admin123`

The login page also includes one-click demo access buttons.

## Implemented screens

### Public and farmer area
- Public landing page
- Login and language selection
- Farmer context onboarding
- Farmer dashboard
- Awareness module library
- Scenario-based lesson and knowledge check
- Authorised phishing simulation introduction
- Simulation inbox and scam-identification activity
- Simulation result and learning feedback
- Suspicious-message reporting form
- Progress and awareness-improvement dashboard
- Profile and accessibility settings

### Administrator and researcher area
- Admin dashboard
- Participant overview
- Awareness-module management
- Simulation campaign management
- Create-training-simulation form
- Suspicious-message report review
- Evaluation and analytics dashboard

## Run locally

### Requirements

- Node.js 20.9 or later
- npm

### Commands

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production build check

```bash
npm run build
npm start
```

## Windows quick start

Double-click `RUN_FARMSEC.bat`. The script installs packages when needed and starts the development server.

## Important frontend limitations

This package is intentionally frontend-only:

- Authentication is a dummy localStorage demonstration.
- Data resets when browser storage is cleared.
- The screenshot upload control is only a visual placeholder.
- Export buttons are visual frontend controls.
- GoPhish campaign sync and message delivery are not connected.
- Analytics values are dummy progress-evaluation data.
- A production version needs a secure backend, role-based server authentication, database, consent records, API validation, encrypted transport, audit logging, and privacy controls.

## Useful routes

```text
/                         Public landing page
/login                    Dummy login
/onboarding               Farmer context setup
/dashboard                Farmer dashboard
/awareness                Awareness library
/simulation               Phishing-practice introduction
/report                    Suspicious-message report
/progress                  Farmer improvement dashboard
/profile                   Settings
/admin                     Administrator dashboard
/admin/campaigns           Simulation management
/admin/analytics           Evaluation analytics
```
