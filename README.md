# Personal Project Showcase App

A React single-page application (SPA) for showcasing portfolio projects. Users can view projects, add new ones dynamically, and filter the list with live search. The layout follows the provided `se_c4_m8_mockup` wireframe.

## Live features

- Landing page with a list of projects
- Form to add new projects (title + description)
- Search bar that filters projects as you type
- Responsive layout inspired by the design mock-up
- Automated tests with Jest and React Testing Library

## Tech stack

- React 19 (functional components, hooks)
- Vite
- Plain CSS (component-scoped stylesheets — no Tailwind / Material UI)
- Jest + React Testing Library

---

## Task 1: Define the Problem

A creative agency needs a maintainable online portfolio so potential clients can browse past work and the team can add new projects without rebuilding the site.

**Problem statement:** Build a responsive React SPA that displays projects, supports adding projects through a form, and filters the list with search.

**Success criteria (from the rubric):**

| Area | Goal |
| --- | --- |
| Component hierarchy | Reusable presentational + container components |
| State management | `useState` at the nearest shared parent; optional custom hook |
| Event handling | Form submit + controlled search input |
| Props | Clear data flow from `App` → list/form/search children |
| Styling & UX | Mock-up inspired, readable on phone and desktop |

---

## Task 2: Determine the Design

### Wireframe alignment (`se_c4_m8_mockup`)

1. Centered page title: **Personal Project Showcase App.**
2. Bordered **Add Project** section with Title, Description, and **Add**.
3. Full-width **Search Projects.** field.
4. Vertical project list; each item has an image placeholder (`X`), title, and description.

### Component hierarchy

```text
App
├── Header
├── ProjectForm
├── SearchBar
└── ProjectList
    └── ProjectCard (one per project)
```

### State design

- `projects` and `searchQuery` live in `App` (nearest parent of every consumer).
- `ProjectForm` keeps local draft fields (`title`, `description`) until submit.
- Filtered results are derived with `useMemo` (or via `useProjects` in `src/hooks/useProjects.js`).

### Data shape

```js
{ id: number, title: string, description: string }
```

---

## Task 3: Develop the Code

### Project structure

```text
personal-project-showcase/
├── public/                    (optional static assets)
├── src/
│   ├── components/            UI building blocks
│   ├── data/                  seed projects
│   ├── hooks/                 reusable state helpers
│   ├── styles/                global + app layout CSS
│   ├── __tests__/             Jest + RTL tests
│   ├── App.jsx
│   ├── main.jsx
│   └── setupTests.js
├── index.html
├── package.json
├── vite.config.js
├── jest.config.cjs
├── babel.config.cjs
└── README.md
```

### Getting started

```bash
cd personal-project-showcase
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

### Other scripts

```bash
npm run build      # production build
npm run preview    # preview production build
npm test           # run Jest suite
npm run test:watch # watch mode
```

---

## Task 4: Test and Debug

Tests live in `src/__tests__/` and cover:

- Rendering the title and seed projects
- Adding a project through the form
- Filtering with the search box
- Form validation when fields are empty
- Empty list messaging

Run:

```bash
npm test
```

**Manual checks**

1. Add a project → it appears at the top of the list.
2. Search by title or description → list updates immediately.
3. Clear search → full list returns.
4. Resize the browser → layout stays centered and readable.

---

## Task 5: Document and Maintain

### How to extend

- Add fields (e.g. image URL, tags) to the project object and update `ProjectForm` + `ProjectCard`.
- Persist projects with `localStorage` or a backend API.
- Switch `App` to the `useProjects` hook for a single reusable state module.

### Maintenance notes

- Keep state close to where it is needed; lift only when siblings share data.
- Prefer presentational components that receive props over deeply nested state.
- Match new UI to the bordered, single-column mock-up so the UX stays consistent.

### Submission

1. Push this repository to GitHub.
2. Submit the GitHub repository URL for the lab.

---

## Author notes

Built for the Summative Lab: **Single Page Application (SPA) with React — Portfolio Platform**. Styling uses React + CSS only, matching the provided mock-up screenshots rather than external CSS frameworks.
