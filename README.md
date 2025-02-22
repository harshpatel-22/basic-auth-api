# 🚀 Node.js Authentication API with Express & MongoDB

## 📌 Project Overview

This is a simple **authentication API** built using **Node.js, Express, and MongoDB (Mongoose)**. It provides user registration, login, and authentication using **JWT (JSON Web Tokens)**. The project follows **MVC architecture** and includes middleware for protecting routes.

---

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Backend framework
- **MongoDB & Mongoose** - Database & ODM
- **bcryptjs** - Password hashing
- **jsonwebtoken (JWT)** - Authentication
- **dotenv** - Environment variables
- **cors** - Cross-Origin Resource Sharing

---

## 📂 Folder Structure

```
📁 auth-api/
│-- 📁 node_modules/
│-- 📁 src/
│   │-- 📁 config/
│   │   ├── db.js            # MongoDB connection
│   │-- 📁 models/
│   │   ├── User.js          # User schema/model
│   │-- 📁 routes/
│   │   ├── authRoutes.js    # Authentication routes
│   │-- 📁 controllers/
│   │   ├── authController.js # Authentication logic
│   │-- 📁 middlewares/
│   │   ├── authMiddleware.js # Protect routes
│   │-- server.js            # Main server file
│-- .env                     # Environment variables
│-- package.json
│-- README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/harshpatel-22/auth-api.git
cd auth-api
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a \`\` file in the root directory and add the following:

```env
MONGO_URI=mongodb://127.0.0.1:27017/authDB
PORT=5000
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server

```sh
npm run dev  # Uses nodemon for development
# OR
npm start    # Runs server normally
```

Server should be running at: \`\`

---

## 🔥 API Endpoints

### **🔹 Authentication Routes** (`/api/auth`)

| Method | Endpoint    | Description          | Auth Required |
| ------ | ----------- | -------------------- | ------------- |
| `POST` | `/register` | Register new user    | ❌ No          |
| `POST` | `/login`    | Login user & get JWT | ❌ No          |
| `GET`  | `/profile`  | Get user profile     | ✅ Yes         |

#### **📌 Register a User**

```http
POST /api/auth/register
```

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "token": "jwt_token_here"
}
```

#### **📌 Login User**

```http
POST /api/auth/login
```

**Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "token": "jwt_token_here"
}
```

#### **📌 Get User Profile (Protected Route)**

```http
GET /api/auth/profile
```

**Headers:**

```json
{
  "Authorization": "Bearer your_jwt_token_here"
}
```

**Response:**

```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

---

## 🛡️ Authentication & Security

- **Password Hashing**: Uses `bcryptjs` to hash passwords before saving them to the database.
- **JWT Authentication**: Securely authenticates users and protects routes using JSON Web Tokens.
- **Middleware Protection**: Ensures only authenticated users can access protected routes.

---

## 🐞 Error Handling

- Handles **invalid requests**, **duplicate users**, **invalid credentials**, and **expired tokens**.
- Returns **standard HTTP status codes** (`400`, `401`, `403`, `500`) for error responses.

---

## 🤖 Running Tests (Postman)

1. Use **Postman** or **cURL** to test API requests.
2. Ensure **MongoDB is running** locally (`mongod`) or using MongoDB Atlas.
3. Test API endpoints with valid & invalid data.

---

## 📌 Future Enhancements

- ✅ **Refresh Token Implementation**
- ✅ **Role-Based Access Control (RBAC)**
- ✅ **OAuth (Google, Facebook Login)**

---

## 📄 License

This project is **open-source** and available under the **MIT License**.

🚀 Happy Coding! 🎉

