# CivicConnect

AI-assisted civic issue reporting and tracking demo.

## Setup

### Backend
1. Open a terminal in `backend`.
2. Install dependencies: `npm install`.
3. Copy `.env.example` to `.env` and make sure MongoDB is running.
4. Start the API: `npm run dev` (Windows PowerShell users can run `npm.cmd run dev`).

When `OTP_DEV_MODE=true`, registration displays the dummy OTP **123456** on the verification screen. No SMS is sent in this mode. This is for local demonstrations only; set `OTP_DEV_MODE=false` and connect an SMS provider before production use.

### Frontend
1. Open a second terminal in `frontend`.
2. Install dependencies: `npm install`.
3. Start the app: `npm run dev`.

## Admin assignment
Reports are classified automatically using the category rules. In the Admin portal, use **Review / edit** to confirm or override the AI-suggested department and update the SLA. Changes are recorded in case history. Reassigning an in-progress case keeps its current status.

## Existing features
Citizen reporting, map location selection, evidence, report tracking, AI category analysis, SLA tracking, admin assignment, department progress updates, resolution proof, citizen verification, and support/feedback voting are retained.
