
# 🛡️ Task Management API (Node.js + Express)

A secure and scalable task management REST API built with Node.js, Express, and MongoDB. It supports:

- 🧾 User authentication with JWT + refresh tokens
- ✅ CRUD operations on personal tasks
- 📈 Rate-limited endpoint for motivational quotes
- 🔐 Security best practices (helmet, input validation, cookie tokens)

---

## 📁 Folder Structure

```
task-api/
├── controllers/
│   ├── authController.js
│   ├── taskController.js
│   └── quoteController.js
├── middlewares/
│   ├── auth.js
│   └── rateLimiter.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   ├── taskRoutes.js
│   └── quoteRoutes.js
├── .env
├── app.js
├── server.js
└── README.md
```

---

## 🧪 Features

- **Register/Login/Logout**
- **Refresh Tokens** via HTTP-only cookies
- **Task CRUD** (Create, Read, Update, Delete)
- **Rate-Limited Quotes** from public API
- **Sanitization** and **Validation**
- **MongoDB with Mongoose**
- **Postman-ready** with sample requests

---

## 🚀 Installation & Setup

```bash
git clone https://github.com/YOUR_USERNAME/task-api.git
cd task-api
npm install
cp .env.example .env
```
npm install express mongoose dotenv bcryptjs jsonwebtoken cookie-parser cors helmet express-rate-limit axios

Fill in your `.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/task-api
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

Start the server:

```bash
npm run dev
# OR
node server.js
```

---

## 🧪 API Endpoints

### 🔐 Auth

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| POST   | `/api/auth/register` | Register a new user     |
| POST   | `/api/auth/login`    | Login and get tokens    |
| POST   | `/api/auth/refresh`  | Get new access token    |
| POST   | `/api/auth/logout`   | Logout user             |

### ✅ Tasks

| Method | Endpoint      | Description        |
|--------|---------------|--------------------|
| GET    | `/api/tasks`  | Get all user tasks |
| POST   | `/api/tasks`  | Create a new task  |
| PUT    | `/api/tasks/:id` | Update task     |
| DELETE | `/api/tasks/:id` | Delete task     |

> Requires Bearer Token in Authorization Header

### 🌟 Quotes (Rate Limited)

| Method | Endpoint        | Description          |
|--------|-----------------|----------------------|
| GET    | `/api/quotes`   | Get a motivational quote (5 req/min per IP) |

---

## 🧪 Postman Collection

Import the following collection into Postman to test all endpoints:

📁 [`task-api.postman_collection.json`](./postman/task-api.postman_collection.json)

---

## 📌 Assumptions

- Only registered users can manage tasks
- Each user has private access to their own data
- Quotes are public but rate-limited by IP
- Refresh tokens are stored in cookies for added security

---

## ⚙️ Scalability (for 100k+ users)

To scale:
- ✅ Use **MongoDB Atlas** with sharding
- ✅ Move tokens and sessions to **Redis**
- ✅ Use **Load Balancer + Horizontal Scaling** (PM2 or Docker + Kubernetes)
- ✅ Rate limiting with **Redis-backed middleware**
- ✅ Use **Cloud logging/monitoring** (Datadog, Grafana)

---

## 🛡️ Production Readiness

For production:
- ✅ Use HTTPS (SSL) + Helmet for security headers
- ✅ Use **env-based secrets**, not hardcoded
- ✅ CSRF protection for stateful clients
- ✅ Input validation + sanitization (e.g., express-validator)
- ✅ Refresh tokens with rotation & blacklist (advanced)

---

## 🧑‍💻 Author

**Kishan** – [GitHub](https://github.com/YOUR_GITHUB)

---

## 📄 License

MIT License

