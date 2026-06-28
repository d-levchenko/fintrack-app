# 💰 Personal Finance Dashboard

A full-stack personal finance tracking application built with **Next.js 16**,
**TypeScript**, and **Supabase**. Users can track income and expenses, manage
categories, and visualize financial data through an analytics dashboard.

---

## 🚀 Features

### 📊 Transactions

- Add, edit, and delete income/expense transactions
- Assign categories to transactions
- Filter by date, category, and type

### 🏷️ Categories

- Create custom categories (Food, Salary, Rent, etc.)
- Color-coded classification system

### 💰 Budget Tracking _(planned)_

- Monthly spending limits per category
- Budget usage tracking

### 📈 Analytics Dashboard

- Income vs. expenses overview
- Category breakdown charts
- Monthly spending trends

### 🔐 Authentication

- Supabase Auth (email/password)
- Session-based protected routes
- Secure per-user data access (RLS)

---

## 🧱 Tech Stack

| Layer           | Technology                |
| --------------- | ------------------------- |
| Framework       | Next.js 16 (App Router)   |
| Language        | TypeScript                |
| Styling         | Tailwind CSS              |
| Backend         | Supabase                  |
| Database        | PostgreSQL (via Supabase) |
| Charts          | Recharts                  |
| Package Manager | pnpm                      |
| Deployment      | Vercel                    |

---

## 🏗️ Project Architecture

```
/app
  /page.tsx
  /layout.tsx

  /(public)
    /sign-in
    /sign-up

  /(protected)
    layout.tsx
    /dashboard
    /transactions
    /categories
    /budget
    /analytics

/components
  /ui
  /charts
  /layout

/lib
  /supabase

/services
  transactionService.ts
  categoryService.ts

/types
  transaction.ts
  category.ts
  user.ts
```

---

## 🔄 Data Flow

```
UI Component
  → Service layer (Supabase calls)
    → Supabase PostgreSQL
      → RLS (row-level security)
        → UI refresh
```

---

## 🔐 Authentication Flow

1. User logs in via Supabase Auth
2. Session stored in secure cookies
3. Protected layout checks session on server
4. Unauthorized users redirected to `/login`
5. RLS ensures users only access their own data

---

## 🧭 Development Roadmap

### Phase 1 — Setup

- [✔️] Initialize Next.js 14 project
- [✔️] Configure TypeScript and Tailwind
- [✔️] Setup Supabase project
- [✔️] Configure Docker (optional local DB)

### Phase 2 — Authentication

- [✔️] Supabase Auth integration
- [✔️] Login & register pages
- [✔️] Protected routes (layout-based)
- [✔️] Session handling
- [✔️] RLS policies

### Phase 3 — Core Features

- [ ] Transaction CRUD
- [ ] Category management
- [ ] Link transactions → categories

### Phase 4 — Dashboard & Analytics

- [ ] Overview dashboard
- [ ] Income vs. expense charts
- [ ] Category breakdown
- [ ] Monthly trends

### Phase 5 — UI Polish

- [ ] Responsive layout
- [ ] Loading states
- [ ] Empty states
