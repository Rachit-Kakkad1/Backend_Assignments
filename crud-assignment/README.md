# 📝 Advanced Notes API - CRUD Assignment

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen?style=for-the-badge)

**A high-performance, scalable Notes Management System built with Express 5.0 and MongoDB.**

[Explore Docs](#-api-documentation) · [Report Bug](https://github.com/rachit-kakkad/backend-assignments/issues) · [Request Feature](https://github.com/rachit-kakkad/backend-assignments/issues)

</div>

---

## 🌟 Key Features

- 🚀 **Built on Express 5.0** - Utilizing the latest features of the web framework.
- 🛠 **Full CRUD Lifecycle** - Complete management of note resources.
- 📦 **Bulk Operations** - Create and delete multiple notes in a single request for high efficiency.
- 🔍 **Granular Updates** - Support for both `PUT` (replacement) and `PATCH` (partial updates).
- 🛡 **Security Ready** - CORS enabled and environment variable protection.
- 🔗 **Live Ready** - Seamless deployment to Render or similar platforms.

---

## 🚀 Live Demo & Documentation

| Resource | URL |
| :--- | :--- |
| 🌐 **Live API** | [https://backend-assignments-j3db.onrender.com](https://backend-assignments-j3db.onrender.com) |
| 🚀 **Postman Docs** | [View Postman Documentation](https://documenter.getpostman.com/view/YOUR_POSTMAN_ID) |

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js (v5.2.1)
- **Database:** MongoDB Atlas
- **ODM:** Mongoose (v9.4.1)
- **Middleware:** CORS, Dotenv, Express JSON Parser

---

## 📁 Project Structure

```bash
crud-assignment/
├── src/
│   ├── config/          # Database configuration
│   ├── controllers/     # Business logic & Request handling
│   ├── models/          # Mongoose schemas & Data models
│   ├── routes/          # API endpoint definitions
│   ├── app.js           # Express app setup
│   └── server.js        # Server entry point
├── .env.example         # Environment template
└── package.json         # Dependencies & scripts
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rachit-Kakkad1/backend-assignments.git
   cd crud-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the application**
   ```bash
   # Development mode
   npm start
   ```

---

## 📑 API Documentation

### 📓 Notes Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/notes` | Fetch all notes |
| `GET` | `/api/notes/:id` | Get a specific note |
| `POST` | `/api/notes` | Create a new note |
| `POST` | `/api/notes/bulk` | 🚀 Bulk create notes |
| `PUT` | `/api/notes/:id` | Replace entire note |
| `PATCH` | `/api/notes/:id` | Partial update note |
| `DELETE` | `/api/notes/:id` | Delete a note |
| `DELETE` | `/api/notes/bulk` | 🔥 Bulk delete notes |

#### Example Request (Bulk Create):
`POST /api/notes/bulk`
```json
[
  { "title": "Buy groceries", "content": "Milk, Eggs, Bread" },
  { "title": "Gym", "content": "Leg day at 5 PM" }
]
```

---

## 👤 Author

**Rachit Kakkad**
- GitHub: [@Rachit-Kakkad1](https://github.com/Rachit-Kakkad1)
- LinkedIn: [rachit-kakkad](https://www.linkedin.com/in/rachit-kakkad/)

---

<div align="center">
  Developed with ❤️ by Rachit Kakkad
</div>
