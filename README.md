# Peace & Justice

A modern React + Vite web application for a nonprofit organization focused on social impact, community projects, volunteer management, and blog content. This project includes public pages, a protected admin dashboard, and a local JSON data source for projects, blogs, team members, and user authentication.

---

## 🚀 Project Overview

`peace-justice` is built with:
- React 19
- Vite
- Tailwind CSS 4
- React Router DOM
- Axios
- JSON Server (for local API data)

The app includes:
- Public pages: Home, About, Project, Blog, Involved, Contact
- Login page and protected dashboard access
- Dashboard sections for overview, projects, blog posts, team, messages, and volunteers
- Responsive layout using Tailwind CSS

---

## ✨ Key Features

- Public-facing content pages for an NGO-style organization
- Dashboard access restricted by authentication
- Login form that validates credentials from `db.json`
- Local JSON API support via `json-server`
- Tailwind CSS styling and responsive design

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── assets/
│   ├── component/
│   │   ├── BlogCard.jsx
│   │   ├── Footer.jsx
│   │   ├── MissionCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── NavDashboard.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProtectedRoute.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BLogDashboard.jsx
│   │   ├── Contact.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   ├── Involved.jsx
│   │   ├── login.jsx
│   │   ├── MessageDashboard.jsx
│   │   ├── OverFlowDashboard.jsx
│   │   ├── Project.jsx
│   │   ├── ProjectDashboard.jsx
│   │   ├── TeamDashboard.jsx
│   │   ├── VolunteerDashboard.jsx
├── db.json
├── package.json
├── tailwindcss.config.js
├── vite.config.js
```

---

## 🌐 App Routes

Public pages:
- `/` — Home
- `/about` — About
- `/project` — Project page
- `/blog` — Blog page
- `/involved` — Involved page
- `/contact` — Contact page
- `/login` — Login page

Protected dashboard routes:
- `/dashboard/OverView`
- `/dashboard/Projects`
- `/dashboard/BlogPost`
- `/dashboard/Team`
- `/dashboard/Message`
- `/dashboard/Volunteers`

---

## 🔧 Installation

Install dependencies:

```bash
npm install
```

Start the Vite development server:

```bash
npm run dev
```

Optional: Run JSON Server for local API data from `db.json`:

```bash
npx json-server --watch db.json --port 3000
```

---

## 📦 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build production assets
- `npm run preview` — Preview production build locally
- `npm run lint` — Run ESLint checks

---

## 🔐 Authentication

The app uses a simple token-based check in `ProtectedRoute`:
- Successful login stores `token` in `localStorage`
- If `token` is missing, `ProtectedRoute` redirects to `/login`

The login credentials are loaded from `db.json` under `userInfo`.

---

## 🗂 Local Data

The application uses `db.json` for local content and authentication data, including:
- `project`
- `blog`
- `involved`
- `userInfo`
- `Team`

This local JSON file is ideal for development and testing without a backend service.

---

## ⚙️ Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- JSON Server
- ESLint

---

## 💡 Notes

- Dashboard pages are only accessible after login.
- The current login flow checks email and password against the local JSON API.
- The project is ready for future backend integration, improved authentication, and real data persistence.

---

## 🤝 Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Commit: `git commit -m "Add feature"`
5. Push: `git push origin feature/your-feature`
6. Open a pull request

---

## 📬 Contact

If you want to improve this project, update the README or add an issue to the repository.
