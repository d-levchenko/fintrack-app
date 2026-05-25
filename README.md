# 💰 Personal Finance Dashboard

A full-stack personal finance tracking application built with **Next.js 14**, **TypeScript**, and **Docker**. Users can track income and expenses, manage budgets by category, and visualize financial data through an analytics dashboard.

---

## 🚀 Features

**Transactions**
- Add, edit, and delete income/expense transactions
- Categorize transactions with custom categories
- Filter by date, category, and transaction type

**Budget Tracking**
- Set monthly spending limits per category
- Track budget usage in real time

**Analytics Dashboard**
- Income vs. expenses overview
- Category breakdown charts
- Monthly spending trends

**UX**
- Responsive layout (mobile / tablet / desktop)
- Protected routes with session-based auth
- Loading and error states throughout

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Auth | NextAuth.js |
| ORM | Prisma |
| Database | PostgreSQL |
| Charts | Recharts |
| Package Manager | Yarn |
| Containerization | Docker + Docker Compose |
| Database | PostgreSQL |
| Deployment | Vercel (frontend) + Supabase (DB) |

---

## 🏗️ Project Architecture

Feature-based structure with clear separation of concerns.

```
/app
  /                         # Public routes
    page.tsx                # Landing page
    /login
    /register

  /dashboard                # Protected routes
    layout.tsx              # Auth layout wrapper
    page.tsx                # Dashboard overview

    /transactions
      page.tsx
      /[id]/page.tsx

    /categories
      page.tsx
      /[id]/page.tsx

    /budget
      page.tsx

    /analytics
      page.tsx

/components
  /ui                       # Buttons, inputs, cards
  /charts                   # Recharts wrappers
  /layout                   # Navbar, Sidebar

/lib
  /api                      # Axios/fetch clients
  /auth                     # NextAuth helpers
  /utils                    # Date, currency formatting

/services
  transactionService.ts
  categoryService.ts
  authService.ts

/hooks
  useTransactions.ts
  useAuth.ts
  useBudget.ts

/types
  transaction.ts
  user.ts
  category.ts

/prisma
  schema.prisma

/docker
  Dockerfile
  docker-compose.yml
```

---

## 🗄️ Database Schema

```prisma
model User {
  id           String        @id @default(auto())
  email        String        @unique
  passwordHash String
  createdAt    DateTime      @default(now())
  transactions Transaction[]
  categories   Category[]
  budgets      Budget[]
}

model Transaction {
  id          String   @id @default(auto())
  userId      String
  amount      Float
  type        String   // "income" | "expense"
  categoryId  String
  description String?
  date        DateTime
  user        User     @relation(fields: [userId], references: [id])
  category    Category @relation(fields: [categoryId], references: [id])
}

model Category {
  id           String        @id @default(auto())
  userId       String
  name         String
  color        String
  user         User          @relation(fields: [userId], references: [id])
  transactions Transaction[]
  budgets      Budget[]
}

model Budget {
  id          String   @id @default(auto())
  userId      String
  categoryId  String
  limitAmount Float
  month       DateTime
  user        User     @relation(fields: [userId], references: [id])
  category    Category @relation(fields: [categoryId], references: [id])
}
```

---

## 🔐 Authentication Flow

1. User registers or logs in via NextAuth.js
2. Session stored as a secure HTTP-only cookie
3. Middleware (`middleware.ts`) checks session on all `/dashboard` routes
4. Unauthenticated requests redirect to `/login`

---

## 🔄 Data Flow

```
UI action (e.g. add transaction)
  → Custom hook (useTransactions)
    → Service layer (transactionService.ts)
      → Next.js API route (/api/transactions)
        → Prisma ORM
          → PostgreSQL
            → State update / revalidation → UI refresh
```

---

## 🐳 Docker Setup

Docker is a first-class concern in this project — not an afterthought.

**Development with Docker Compose:**
```bash
docker compose up --build
```

The `docker-compose.yml` spins up:
- `app` — Next.js dev server
- `db` — PostgreSQL instance
- `adminer` (optional) — database UI for local inspection

**Environment variables** are loaded from `.env.local` (never committed). See `.env.example` for required keys.

---

## 🧭 Development Roadmap

### Phase 1 — Setup
- [ ] Initialize Next.js 14 project with Yarn
- [ ] Configure TypeScript and Tailwind CSS
- [ ] Set up Docker + Docker Compose
- [ ] Configure Prisma + PostgreSQL
- [ ] Initialize Git repository

### Phase 2 — Authentication
- [ ] Integrate NextAuth.js
- [ ] Build login and register pages
- [ ] Add middleware for route protection
- [ ] Persist and validate user session

### Phase 3 — Core Features
- [ ] Transaction CRUD (API routes + UI)
- [ ] Category management
- [ ] Budget system with per-category limits

### Phase 4 — Dashboard & Analytics
- [ ] Dashboard overview layout
- [ ] Income vs. expenses chart (Recharts)
- [ ] Category breakdown chart
- [ ] Monthly trend chart

### Phase 5 — UI/UX Polish
- [ ] Responsive layout (mobile / tablet / desktop)
- [ ] Loading and error states
- [ ] Empty states
- [ ] Accessibility pass

### Phase 6 — Optimization
- [ ] API caching and revalidation
- [ ] Code splitting
- [ ] Service and hook refactoring

### Phase 7 — Deployment
- [ ] Deploy frontend to Vercel
- [ ] Deploy database to Supabase
- [ ] Configure environment variables
- [ ] Final smoke testing

---

## 📌 Learning Goals

This project demonstrates practical competence in:

- Next.js App Router architecture and routing
- Authentication flows with session management
- Full CRUD with a relational database via Prisma
- Server/client data patterns in Next.js
- REST API design and service layering
- Containerized development with Docker
- Production-ready project structure and TypeScript throughout

---

## 🧠 Design Philosophy

> A finished simple system beats a complex unfinished one.

Priorities: **clarity**, **consistency**, **completion**.
