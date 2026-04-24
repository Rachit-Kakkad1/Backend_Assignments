# 📝 Advanced Notes Management API - Assignment 02

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![Status](https://img.shields.io/badge/Status-Production--Ready-brightgreen?style=for-the-badge)

**A feature-rich, high-performance Notes Management REST API built with Express 5.0 and MongoDB, supporting advanced filtering, pagination, and sorting.**

[Explore Docs](#-api-documentation) · [Report Bug](https://github.com/Rachit-Kakkad1/backend-assignments/issues) · [Request Feature](https://github.com/Rachit-Kakkad1/backend-assignments/issues)

</div>

---

## 🌟 Key Features

- 🚀 **Built on Express 5.0** - Utilizing the latest features for modern backend development.
- 🛠️ **19 Robust Endpoints** - Comprehensive API covering CRUD, Filtering, Pagination, and Sorting.
- 📦 **Bulk Operations** - High-efficiency bulk creation and deletion support.
- 🔍 **Advanced Filtering** - Filter by Category, Pinned Status, and Date Ranges.
- 📄 **Smart Pagination** - Scalable data retrieval with detailed pagination metadata.
- 🔢 **Custom Sorting** - Flexible sorting by multiple fields and directions.
- 🏷️ **Dynamic Summaries** - Optimized endpoints for lightweight data fetching.

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
- **ODM:** Mongoose (v9.5.0)
- **Middleware:** Express JSON Parser, Dotenv

---

## 📂 Project Structure

```bash
notes-assignment/
├── src/
│   ├── config/          # Database connection setup
│   ├── controllers/     # Business logic & Response handling
│   ├── models/          # Mongoose schemas & Data models
│   ├── routes/          # Advanced API route definitions
│   ├── app.js           # Express application configuration
│   └── index.js         # Entry point & Server initialization
├── .env.example         # Environment template
└── package.json         # Dependencies & Scripts
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rachit-Kakkad1/backend-assignments.git
   cd notes-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the application**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

---

## 📖 API Documentation

### 📌 Core CRUD & Bulk Operations

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/notes` | Create a single note |
| `POST` | `/api/notes/bulk` | 🚀 Create multiple notes at once |
| `GET` | `/api/notes` | Fetch all notes |
| `GET` | `/api/notes/:id` | Get a single note by ID |
| `PUT` | `/api/notes/:id` | Full replacement of a note |
| `PATCH` | `/api/notes/:id` | Partial update of a note |
| `DELETE` | `/api/notes/:id` | Delete a single note |
| `DELETE` | `/api/notes/bulk` | 🔥 Delete multiple notes at once |

### 🔍 Specialized Query & Filter

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/notes/category/:category` | Fetch notes by category parameter |
| `GET` | `/api/notes/status/:isPinned` | Fetch notes by pinned status parameter |
| `GET` | `/api/notes/:id/summary` | Get note summary (selected fields) |
| `GET` | `/api/notes/filter` | General filter (category, isPinned) |
| `GET` | `/api/notes/filter/pinned` | Get pinned notes with optional category |
| `GET` | `/api/notes/filter/category` | Filter by category using query param |
| `GET` | `/api/notes/filter/date-range` | 📅 Filter notes between two dates |

### 📄 Pagination & Sorting

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/notes/paginate` | Paginated list of all notes |
| `GET` | `/api/notes/paginate/category/:cat` | Paginated notes within a category |
| `GET` | `/api/notes/sort` | Sort notes by field and order |
| `GET` | `/api/notes/sort/pinned` | Sort only pinned notes |

---

## 👤 Author

**Rachit Kakkad**
- GitHub: [@Rachit-Kakkad1](https://github.com/Rachit-Kakkad1)
- LinkedIn: [rachit-kakkad](https://www.linkedin.com/in/rachit-kakkad/)

---

<div align="center">
  Developed with ❤️ by Rachit Kakkad
</div>
