# CareerTrack REST API

Base URL (local): `http://localhost:5000/api`

All JSON errors use `{ "message": "..." }`. Admin endpoints require `Authorization: Bearer <JWT>`.

| Method | Endpoint | Auth | Purpose |
|---|---|---|---|
| GET | `/health` | Public | API health check |
| POST | `/auth/login` | Public | Admin login; body: email, password |
| GET | `/jobs` | Public | Published jobs; query: q, location, employmentType, sort, page, limit |
| GET | `/jobs/:id` | Public | Published job detail |
| POST | `/applications/:jobId` | Public | Guest application; multipart form including required resume |
| GET | `/admin/dashboard` | Admin | Dashboard statistics |
| GET | `/admin/jobs` | Admin | List all jobs |
| POST | `/admin/jobs` | Admin | Create job |
| PATCH | `/admin/jobs/:id` | Admin | Update job fields/status |
| DELETE | `/admin/jobs/:id` | Admin | Close a job (soft close) |
| GET | `/admin/applications` | Admin | List applications; query: job, status, from, to, page, limit |
| PATCH | `/admin/applications/:id/status` | Admin | Update application status |
| POST | `/admin/applications/:id/notes` | Admin | Add internal note; body: text |
| GET | `/admin/applications/:id/resume` | Admin | Download private résumé |
| GET | `/admin/applications/export/csv` | Admin | Export applications as CSV |

## Application multipart fields

`name`, `email`, `phone`, `education`, `experience`, `skills`, optional `coverLetter`, and `resume` (PDF/DOCX, max 5 MB by default).

## Main success responses

- Login: `{ token, admin: { id, name, email } }`
- Job list: `{ jobs: [], pagination: { page, limit, total, pages } }`
- Job detail: `{ job: {} }`
- Application: `{ message, applicationId }`
- Dashboard: `{ totalJobs, activeJobs, closedJobs, totalApplications }`

## Important errors

- `400`: validation error, invalid status, invalid file or closed job
- `401`: missing/invalid/expired admin token
- `404`: job, application, résumé or route not found
- `409`: duplicate application for same job and email
- `429`: rate limit exceeded
- `500`: unexpected server error

The résumé download endpoint must be called with the bearer token in the Authorization header. Do not place tokens in public URLs.
