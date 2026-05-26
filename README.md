# 💰 Personal Finance Dashboard

A full-stack personal finance tracking application built with **Next.js 14**,
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
| Framework       | Next.js 14 (App Router)   |
| Language        | TypeScript                |
| Styling         | Tailwind CSS              |
| Backend         | Supabase                  |
| Database        | PostgreSQL (via Supabase) |
| Charts          | Recharts                  |
| Package Manager | Yarn                      |
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

- [:heacy_check_mark:] Initialize Next.js 14 project
- [:heacy_check_mark:] Configure TypeScript and Tailwind
- [:heacy_check_mark:] Setup Supabase project
- [:heacy_check_mark:] Configure Docker (optional local DB)

### Phase 2 — Authentication

- [:heavy_check_mark:] Supabase Auth integration
- [:heavy_check_mark:] Login & register pages
- [:heavy_check_mark:] Protected routes (layout-based)
- [:heavy_check_mark:] Session handling
- [:heavy_check_mark:] RLS policies

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
