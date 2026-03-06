<div align="center">

<br/>

```
██╗    ██╗ █████╗ ███╗   ██╗██████╗ ███████╗██████╗ ██╗     ██╗   ██╗███████╗████████╗
██║    ██║██╔══██╗████╗  ██║██╔══██╗██╔════╝██╔══██╗██║     ██║   ██║██╔════╝╚══██╔══╝
██║ █╗ ██║███████║██╔██╗ ██║██║  ██║█████╗  ██████╔╝██║     ██║   ██║███████╗   ██║   
██║███╗██║██╔══██║██║╚██╗██║██║  ██║██╔══╝  ██╔══██╗██║     ██║   ██║╚════██║   ██║   
╚███╔███╔╝██║  ██║██║ ╚████║██████╔╝███████╗██║  ██║███████╗╚██████╔╝███████║   ██║   
 ╚══╝╚══╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝   ╚═╝   
```

### 🌍 &nbsp; *Your world. Your stays. Your story.*

<br/>

<a href="#"><img src="https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Mapbox-GL_JS-000000?style=for-the-badge&logo=mapbox&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Cloudinary-Storage-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white"/></a>
<a href="#"><img src="https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white"/></a>

<br/><br/>

<a href="https://your-wanderlust.onrender.com">
  <img src="https://img.shields.io/badge/🚀%20%20LIVE%20DEMO-%20%20Click%20Here-ff6b6b?style=for-the-badge"/>
</a>
&nbsp;&nbsp;
<a href="https://github.com/officialvikas455/Projects/issues">
  <img src="https://img.shields.io/badge/🐛%20%20BUG%20REPORT-%20%20Open%20Issue-ffd93d?style=for-the-badge"/>
</a>
&nbsp;&nbsp;
<a href="https://github.com/officialvikas455/Projects/stargazers">
  <img src="https://img.shields.io/badge/⭐%20%20STAR%20THIS-%20%20Repo-6bcb77?style=for-the-badge"/>
</a>

</div>

<br/>

---

<br/>

## 🧭 &nbsp; Overview

**WanderLust** is a full-stack travel accommodation platform built with the **MEN stack** (MongoDB · Express · Node.js). It lets travelers discover unique stays worldwide, hosts share their spaces with the world, and communities grow through honest reviews — all wrapped in a secure, production-ready architecture.

> Think of it as a personal Airbnb clone — but built entirely by hand, from schema design to cloud deployment.

<br/>

---

<br/>

## 🎯 &nbsp; Core Features

<br/>

<table width="100%">
  <tr>
    <td align="center" width="25%">
      <h3>🗺️</h3>
      <b>Live Maps</b><br/>
      <sub>Mapbox-powered interactive maps with real-time geocoding for every listing</sub>
    </td>
    <td align="center" width="25%">
      <h3>🔐</h3>
      <b>Auth System</b><br/>
      <sub>Passport.js local strategy with persistent encrypted MongoDB sessions</sub>
    </td>
    <td align="center" width="25%">
      <h3>🖼️</h3>
      <b>Cloud Uploads</b><br/>
      <sub>Multer + Cloudinary pipeline for images with auto-generated thumbnails</sub>
    </td>
    <td align="center" width="25%">
      <h3>⭐</h3>
      <b>Reviews</b><br/>
      <sub>Nested-populated ratings and comments with author attribution</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="25%">
      <h3>🛡️</h3>
      <b>Ownership Guards</b><br/>
      <sub>Middleware-enforced rules — only owners edit listings, only authors delete reviews</sub>
    </td>
    <td align="center" width="25%">
      <h3>✅</h3>
      <b>Joi Validation</b><br/>
      <sub>Server-side schema validation on every form submission before DB writes</sub>
    </td>
    <td align="center" width="25%">
      <h3>⚡</h3>
      <b>Flash Messages</b><br/>
      <sub>Session-based success/error notifications across all redirects</sub>
    </td>
    <td align="center" width="25%">
      <h3>📱</h3>
      <b>Responsive UI</b><br/>
      <sub>Mobile-first Bootstrap layout that works on any screen size</sub>
    </td>
  </tr>
</table>

<br/>

---

<br/>

## 🛠️ &nbsp; Tech Stack

<br/>

```yaml
Backend:
  Runtime:      Node.js v18+
  Framework:    Express.js 4.x
  Database:     MongoDB (Mongoose ODM)
  Auth:         Passport.js — Local Strategy
  Sessions:     express-session + connect-mongo
  Validation:   Joi

Frontend:
  Templating:   EJS + EJS-Mate (layouts)
  Styling:      Bootstrap 5
  Maps:         Mapbox GL JS

Infrastructure:
  Images:       Cloudinary + Multer
  Geocoding:    Mapbox Geocoding API
  Hosting:      Render
  DB Hosting:   MongoDB Atlas
  Env Secrets:  dotenv
```

<br/>

---

<br/>

## ⚡ &nbsp; Getting Started

### Prerequisites
- Node.js `v18+`
- A [MongoDB Atlas](https://mongodb.com/atlas) cluster
- A [Mapbox](https://mapbox.com) account
- A [Cloudinary](https://cloudinary.com) account

<br/>

### 🔧 &nbsp; Installation

```bash
# 1. Clone the repo
git clone https://github.com/officialvikas455/Projects.git
cd Projects

# 2. Install dependencies
npm install

# 3. Create your environment file
touch .env
```

<br/>

### 🔑 &nbsp; Environment Variables

Paste this into your `.env` and fill in your values:

```bash
#--------------------------------------------
#  DATABASE
#--------------------------------------------
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/wanderlust

#--------------------------------------------
#  MAPS & GEOCODING
#--------------------------------------------
MAP_TOKEN=pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJ4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4In0.xxxxxxxxxx

#--------------------------------------------
#  CLOUDINARY IMAGE STORAGE
#--------------------------------------------
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=123456789012345
CLOUD_API_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

#--------------------------------------------
#  SESSION
#--------------------------------------------
SECRET=pick_a_long_random_secret_string_here
NODE_ENV=development
```

<br/>

### 🚀 &nbsp; Run the App

```bash
node app.js
```

```
✓  Connected to DB
✓  Server is listening on port 8080
```

Visit → **[http://localhost:8080/listings](http://localhost:8080/listings)**

<br/>

---

<br/>

## 📂 &nbsp; Project Structure

```
wanderlust/
│
├── 📁 controllers/
│   ├── listings.js          # Index, Show, Create, Edit, Update, Delete + geocoding
│   ├── reviews.js           # Create & Delete reviews
│   └── users.js             # Signup, Login, Logout
│
├── 📁 models/
│   ├── listings.js          # Listing schema (title, price, location, geometry, image, owner)
│   ├── review.js            # Review schema (rating, comment, author)
│   └── user.js              # User schema via passport-local-mongoose
│
├── 📁 routes/
│   ├── listing.js           # RESTful listing routes
│   ├── review.js            # Review routes (mergeParams: true)
│   └── user.js              # Auth routes
│
├── 📁 views/
│   ├── listings/            # index.ejs · show.ejs · new.ejs · edit.ejs · error.ejs
│   ├── users/               # signup.ejs · login.ejs
│   └── layouts/             # boilerplate.ejs (EJS-Mate)
│
├── 📁 public/
│   ├── css/                 # Custom stylesheets
│   └── js/                  # Client-side JS (map.js etc.)
│
├── 📁 utils/
│   ├── ExpressError.js      # Custom error class with statusCode + message
│   └── wrapAsync.js         # Wraps async route handlers → passes errors to next()
│
├── middleware.js             # isLoggedIn · isOwner · isReviewAuthor · validateListing · validateReview
├── schema.js                # Joi schemas for listings and reviews
├── .env                     # 🔒 Secret keys (never commit this)
├── .gitignore               # node_modules, .env
└── app.js                   # Express app · session · passport · routes · error handlers
```

<br/>

---

<br/>

## 🛣️ &nbsp; Routes Reference

<br/>

### 🏠 Listings

| Method | Path | Middleware | Action |
|--------|------|-----------|--------|
| `GET` | `/listings` | — | Show all listings |
| `GET` | `/listings/new` | `isLoggedIn` | Render new form |
| `POST` | `/listings` | `isLoggedIn` · `validateListing` | Create + geocode |
| `GET` | `/listings/:id` | — | Show single listing + map |
| `GET` | `/listings/:id/edit` | `isLoggedIn` · `isOwner` | Render edit form |
| `PUT` | `/listings/:id` | `isLoggedIn` · `isOwner` · `validateListing` | Update + re-geocode |
| `DELETE` | `/listings/:id` | `isLoggedIn` · `isOwner` | Destroy listing |

### ⭐ Reviews

| Method | Path | Middleware | Action |
|--------|------|-----------|--------|
| `POST` | `/listings/:id/reviews` | `isLoggedIn` · `validateReview` | Create review |
| `DELETE` | `/listings/:id/reviews/:reviewId` | `isLoggedIn` · `isReviewAuthor` | Delete review |

### 👤 Users

| Method | Path | Action |
|--------|------|--------|
| `GET` | `/signup` | Render signup form |
| `POST` | `/signup` | Register + auto login |
| `GET` | `/login` | Render login form |
| `POST` | `/login` | Authenticate via Passport |
| `GET` | `/logout` | Destroy session |

<br/>

---

<br/>

## ☁️ &nbsp; Deployment Guide (Render)

<br/>

**Step 1 — Push your code**
```bash
git add .
git commit -m "Production ready"
git push origin main
```

**Step 2 — Create a new Web Service on [Render](https://render.com)**

| Setting | Value |
|--------|-------|
| Build Command | `npm install` |
| Start Command | `node app.js` |
| Environment | `Node` |

**Step 3 — Add Environment Variables**

Copy every key from your `.env` into the Render **Environment** tab.

**Step 4 — Fix MongoDB Atlas Network Access**

```
Atlas Dashboard → Network Access → + Add IP Address → Allow Access from Anywhere (0.0.0.0/0)
```

> Without this, Render's servers are blocked from connecting to your database.

<br/>

---

<br/>

## 🔐 &nbsp; Authorization Matrix

| Action | Guest | Logged In | Owner | Author |
|--------|:-----:|:---------:|:-----:|:------:|
| View listings | ✅ | ✅ | ✅ | ✅ |
| Create listing | ❌ | ✅ | ✅ | ✅ |
| Edit listing | ❌ | ❌ | ✅ | — |
| Delete listing | ❌ | ❌ | ✅ | — |
| Add review | ❌ | ✅ | ✅ | ✅ |
| Delete review | ❌ | ❌ | — | ✅ |

<br/>

---

<br/>

## 🤝 &nbsp; Contributing

Contributions are welcome! Here's how:

```bash
# 1. Fork the project
# 2. Create your feature branch
git checkout -b feature/AmazingFeature

# 3. Commit your changes
git commit -m "Add some AmazingFeature"

# 4. Push to the branch
git push origin feature/AmazingFeature

# 5. Open a Pull Request
```

<br/>

---

<br/>

## 📄 &nbsp; License

Distributed under the **MIT License**. See `LICENSE` for more information.

<br/>

---

<br/>

<div align="center">

**Made with ❤️ &nbsp;by [Vikas](https://github.com/officialvikas455)**

<br/>

*If this project helped you, a ⭐ on GitHub goes a long way!*

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer"/>

</div>
