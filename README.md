# CareerTrack – Full-Stack Job Portal and Recruitment Management System

A MERN-stack recruitment portal built to meet the CareerTrack Major Project specification. Public visitors can browse jobs and apply without registering. Administrators can securely manage job postings and candidate applications.

## Features

- Public job listing, search, filtering, sorting and pagination
- Job detail pages and guest applications
- PDF/DOCX résumé upload with file type and size checks
- Duplicate application prevention by job + normalized email
- JWT administrator authentication with bcrypt password hashing
- Protected job and application management APIs
- Recruitment statuses: Submitted, Under Review, Shortlisted, Interview Scheduled, Selected, Rejected
- Internal notes, CSV export, dashboard statistics
- MongoDB schemas, indexes, server-side validation and centralized errors
- Rate limiting, Helmet, CORS allowlist and Mongo sanitization

## Stack

React + Vite, React Router, Axios, Node.js, Express, MongoDB/Mongoose, JWT, bcryptjs, Multer.

## Requirements

- Node.js 20+
- npm 10+
- MongoDB local instance or MongoDB Atlas database

## Project structure

```text
CareerTrack_Major_Project/
├── frontend/
│   ├── src/
│   ├── .env.example
│   └── package.json
├── backend/
│   ├── src/config/
│   ├── src/models/
│   ├── src/routes/
│   ├── src/controllers/
│   ├── src/middleware/
│   ├── src/utils/
│   ├── .env.example
│   └── package.json
├── docs/
├── screenshots/
├── Project_Report.pdf
├── README.md
└── .gitignore
```

## Local setup

### 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run seed:admin
npm run seed:jobs
npm run dev
```

Set `MONGO_URI`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `CLIENT_URL` in `backend/.env`. The seed script creates an administrator using those environment values. Change the password after the first login.

Backend default: `http://localhost:5000/api`

### 2. Frontend

In another terminal:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend default: `http://localhost:5173`

Set `VITE_API_URL=http://localhost:5000/api` in `frontend/.env`.

## Demo workflow

1. Open the public portal and search for a job.
2. Open a job detail page and submit the application form with a PDF or DOCX résumé.
3. Sign in at `/admin/login` using the administrator account created by the backend seed script.
4. Create/publish a job, inspect applications, update a status and add an internal note.
5. Export application records to CSV.

## API documentation

See [`docs/API_Documentation.pdf`](docs/API_Documentation.pdf) and [`docs/API_Documentation.md`](docs/API_Documentation.md).

## Database documentation

See [`docs/Database_Schema.pdf`](docs/Database_Schema.pdf) and [`docs/Database_Schema.md`](docs/Database_Schema.md).

## Testing

Run backend tests:

```bash
cd backend
npm test
```

A test-case workbook is in `docs/Test_Cases.xlsx`. The workbook intentionally marks actual execution as **Not Run** until you run the application and verify each scenario. Do not report tests as passed without executing them.

## Deployment

Suggested deployment:
- Frontend: Vercel (root directory `frontend`, build `npm run build`, output `dist`)
- Backend: Render (root directory `backend`, start `npm start`)
- Database: MongoDB Atlas

Configure production environment variables and the exact frontend URL in `CLIENT_URL` and `CORS_ORIGINS`. Set `VITE_API_URL` to the deployed backend API URL. Use a private file-storage provider for production résumé storage; the included local disk upload adapter is intended for local demonstration and is not durable on ephemeral hosts.

Live URLs are intentionally left blank until deployment is performed:
- Public portal: `PENDING_DEPLOYMENT`
- Backend API: `PENDING_DEPLOYMENT`
- Admin login: `PENDING_DEPLOYMENT/admin/login`

## GitHub

Create a public repository named `CareerTrack-MERN-Job-Portal`, then:

```bash
git init
git add .
git commit -m "Initial CareerTrack MERN project"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/CareerTrack-MERN-Job-Portal.git
git push -u origin main
```

Do not commit `.env`, real candidate data, or résumé files.

## Security notes and limitations

- The demo stores résumé files on the backend filesystem. For production, replace this with private object storage and signed, short-lived download URLs.
- JWT is returned to the frontend and stored in session storage for this training demo. For production, prefer secure, HttpOnly, SameSite cookies and a CSRF strategy.
- Configure HTTPS, backups, monitoring, email notifications, malware scanning and retention policies before handling real candidate data.
- No real deployment, screenshots, or test execution are claimed by this starter deliverable.
