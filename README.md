# Shreesha Engineering — Production Website

A full-stack, production-ready business website for **Shreesha Engineering (Die & Pattern Shop)**, MIDC Kupwad, Sangli, Maharashtra.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Database | MongoDB (via Mongoose) |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| Validation | Zod |

---

## 📁 Project Structure

```
shreesha-engineering/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── globals.css             # Tailwind + custom CSS
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About Us
│   ├── services/page.tsx       # Services
│   ├── contact/page.tsx        # Contact form
│   ├── login/page.tsx          # Admin login
│   ├── dashboard/page.tsx      # Admin dashboard (protected)
│   ├── not-found.tsx           # 404 page
│   └── api/
│       ├── auth/
│       │   ├── login/route.ts  # POST: login
│       │   └── seed/route.ts   # POST: create admin (setup only)
│       └── contact/
│           ├── route.ts        # POST: submit / GET: list (admin)
│           └── [id]/route.ts   # PATCH: update status (admin)
├── components/
│   ├── Navbar.tsx              # Sticky responsive navbar
│   └── Footer.tsx              # Footer with company info
├── lib/
│   ├── mongodb.ts              # DB connection with caching
│   └── auth.ts                 # JWT sign/verify utilities
├── models/
│   ├── User.ts                 # Admin user schema
│   └── Contact.ts              # Contact inquiry schema
├── .env.example                # Environment variables template
├── tailwind.config.js
├── next.config.mjs
└── tsconfig.json
```

---

## ⚙️ Setup Instructions

### 1. Clone & Install
```bash
git clone <your-repo>
cd shreesha-engineering
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
MONGODB_URI=mongodb://localhost:27017/shreesha-engineering
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/shreesha-engineering

JWT_SECRET=your-long-random-secret-key-here

ADMIN_EMAIL=admin@shreeshaengineering.com
ADMIN_PASSWORD=YourSecurePassword@123

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Create Admin User (One-time Setup)
After starting the dev server, run:
```bash
curl -X POST http://localhost:3000/api/auth/seed
```

Or visit `http://localhost:3000/api/auth/seed` in a REST client.

> ⚠️ After creating the admin, **remove or disable the seed route** (`/app/api/auth/seed/route.ts`) in production.

### 4. Run Development Server
```bash
npm run dev
```

Visit: `http://localhost:3000`

### 5. Production Build
```bash
npm run build
npm start
```

---

## 🔐 Admin Access

1. Visit `/login`
2. Enter admin credentials from `.env.local`
3. Access dashboard at `/dashboard`

---

## 🗃️ MongoDB Schemas

### User Schema
```typescript
{
  email: String (unique, required),
  password: String (hashed with bcrypt),
  name: String,
  role: 'admin',
  timestamps: true
}
```

### Contact Schema
```typescript
{
  name: String,
  email: String,
  phone: String,
  message: String,
  status: 'new' | 'read' | 'replied',  // default: 'new'
  timestamps: true
}
```

---

## 📡 API Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/login` | None | Admin login |
| POST | `/api/auth/seed` | None | Create admin user |
| POST | `/api/contact` | None | Submit inquiry |
| GET | `/api/contact` | Bearer JWT | List all inquiries |
| PATCH | `/api/contact/:id` | Bearer JWT | Update inquiry status |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Steel Gray | `#2F2F2F` |
| Warm Beige | `#F5EBDD` |
| Industrial Orange | `#E67E22` |
| Charcoal | `#1C1C1C` |
| Amber Warm | `#D4A853` |

**Fonts:** Playfair Display (headings) + DM Sans (body)

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```
Set all environment variables in Vercel dashboard.

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 📞 Company Info

**Shreesha Engineering (Die & Pattern Shop)**  
Plot No 31, Opp. Savali RTO Office  
MIDC Kupwad, Sangli, Savali, Maharashtra 416436  
📞 +91 95591 33771  
⏰ Open · Closes 11:30 PM
