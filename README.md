# Task Manager API

A lightweight in-memory Task Manager REST API. Used as the sample codebase for the
"Create an AGENTS.md for This Repo" training exercise.

## Run

```bash
npm install
npm run dev      # start dev server on http://localhost:3000
```

## Test

```bash
npm test
```

## Endpoints

- `GET /health`
- `GET /tasks`
- `POST /tasks` `{ "title": string }`
- `GET /tasks/:id`
- `PATCH /tasks/:id` `{ "title"?: string, "status"?: "pending" | "in_progress" | "done" }`
- `DELETE /tasks/:id`
