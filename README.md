# Community Bridge

A bilingual community-resource navigator for Huntsville and North Alabama.

Public site: https://community-bridge-huntsville.bframber12.chatgpt.site

## Features

- English and Spanish resource search with official links
- Guided assessment with optional resource-grounded live AI
- Explicit on-device keyword fallback when AI is unavailable
- Browser-local saved plans, checklists, calendar-file downloads and printing
- Volunteer link and resource-suggestion downloads
- Built-in pitch presentation

## Source

`web/` contains the HTML, CSS, and browser interactions. `worker/handler.mjs` implements same-origin backend endpoints and the OpenAI integration. `scripts/embed.mjs` embeds the web assets and resource catalog into the Worker.

Build with:

```
node scripts/embed.mjs
bash scripts/build.sh
node scripts/validate-artifact.mjs
```

The published entrypoint is `dist/server/index.js`.

## Runtime configuration

Set `OPENAI_API_KEY` as a hosted secret, and optionally `OPENAI_MODEL` (default `gpt-4.1-mini`). Never put credentials in browser code or Git. The current OpenAI account must have API credits and model access. `/api/health` reports credential configuration, not billing health. `POST /api/assist` validates input, requests structured responses, validates returned resource identifiers, and does not store visitor descriptions in application storage.

The optional AI assessment sends the visitor's description, ZIP code, schedule, and language to OpenAI with `store:false`. Provider data policies still apply. Plans stay in local browser storage. The public endpoint uses per-isolate request limits; these are basic abuse controls, not a global spending cap. Configure account-level usage controls before a broad launch.

## Hosting and GitHub Pages

A GitHub repository stores source; creating one alone does not activate a website. GitHub Pages can host the `web/` static files. It cannot run this AI backend. The GitHub Pages frontend calls the hosted Community Bridge backend. That backend explicitly allows the https://framber-rodriguez.github.io origin and handles JSON request preflights. Other origins are rejected. The current public Sites deployment serves both the frontend and backend.

## Pilot limits

Resource information was manually reviewed on October 14, 2026. Confirm availability, eligibility, fees, and schedules with each provider. ZIP codes provide context and do not produce geospatial ranking. The app does not submit applications, book transport, or send messages. Calendar reminders must be imported by the visitor. Resource suggestions download as files and are not submitted automatically. No partnership with listed providers is implied.
