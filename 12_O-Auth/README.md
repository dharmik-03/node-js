<div align="center">

# 🔐 Google OAuth Authentication using Passport.js

### A simple and secure **Node.js** authentication project that implements **Google OAuth 2.0** using **Passport.js**.

Users can sign in with their Google account, and their information is stored in **MongoDB**.
Authentication sessions are managed using **Express Session**.

![Node.js](https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white)
![Passport](https://img.shields.io/badge/Passport.js-Auth-34E27A?style=for-the-badge&logo=passport&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-Template-B4CA65?style=for-the-badge&logo=ejs&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap5-UI-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

</div>

<br>

---

<br>

## 📖 Overview

> This project demonstrates how to integrate Google OAuth authentication into an Express.js application using Passport.js. It includes session management, protected routes, user profile pages, and MongoDB integration.

<br>

---

<br>

## 🚀 Features

<table>
<tr>
<td width="50%">

🔑 **Google OAuth 2.0 Authentication**
👤 **User Login with Google**
💾 **User Data Stored in MongoDB**
🔒 **Protected Profile Route**

</td>
<td width="50%">

🛡️ **Passport.js Authentication Strategy**
🍪 **Express Session Management**
🎨 **Bootstrap 5 UI**
📄 **EJS Template Engine**
🚪 **Logout Functionality**

</td>
</tr>
</table>

<br>

---

<br>

## 🛠️ Tech Stack

<div align="center">

| Technology | Purpose |
|:---:|:---:|
| 🟢 **Node.js** | Runtime Environment |
| ⚫ **Express.js** | Backend Framework |
| 🔵 **Passport.js** | Authentication |
| 🔷 **passport-google-oauth20** | Google OAuth Strategy |
| 🍃 **MongoDB** | Database |
| 🟩 **Mongoose** | MongoDB ODM |
| 🍪 **Express Session** | Session Management |
| 📄 **EJS** | Template Engine |
| 🎨 **Bootstrap 5** | Frontend Styling |
| ⚙️ **dotenv** | Environment Variables |

</div>

<br>

---

<br>

## 📂 Project Structure

```text
O-auth/
│
├── config/
│   ├── DB.js
│   └── passport.js
│
├── middlewares/
│   ├── checkAuth.js
│   └── httpError.js
│
├── model/
│   └── userModel.js
│
├── routes/
│   ├── AuthRouter.js
│   └── profileRoute.js
│
├── views/
│   ├── home.ejs
│   ├── login.ejs
│   └── profile.ejs
│
├── .env
├── server.js
├── package.json
└── README.md
```

<br>

---

<br>

## 📌 Application Flow

<div align="center">

```text
┌─────────────────┐
│   Home Page      │
└────────┬─────────┘
         ▼
┌─────────────────┐
│   Login Page      │
└────────┬─────────┘
         ▼
┌─────────────────────┐
│ Google Authentication │
└────────┬─────────────┘
         ▼
┌───────────────────────┐
│ Passport Verification  │
└────────┬───────────────┘
         ▼
┌───────────────────────┐
│  Save User in MongoDB  │
└────────┬───────────────┘
         ▼
┌─────────────────┐
│  Create Session   │
└────────┬─────────┘
         ▼
┌─────────────────┐
│  Profile Page      │
└────────┬─────────┘
         ▼
┌─────────────────┐
│      Logout        │
└─────────────────┘
```

</div>

<br>

---

<br>

## 🌐 Routes

<div align="center">

| Method | Route | Description |
|:---:|:---|:---|
| 🟢 `GET` | `/` | Home Page |
| 🟢 `GET` | `/auth/login` | Login Page |
| 🟢 `GET` | `/auth/google/login` | Google Login |
| 🟢 `GET` | `/auth/google/redirect` | Google Callback |
| 🔒 `GET` | `/profile` | Protected Profile |
| 🟢 `GET` | `/auth/logout` | Logout User |

</div>

<br>

---

<br>

## 📸 Screenshots

<div align="center">

### 🏠 Home Page
<img width="1178" height="549" alt="image" src="https://github.com/user-attachments/assets/72dafb44-e07f-40a0-b4fd-d020d9e5f6da" />

<br><br>

### 🔑 Login Page
<img width="957" height="554" alt="image" src="https://github.com/user-attachments/assets/34d479dd-c1a7-45f5-9370-c26d9986f7f5" />
<br>
<img width="1341" height="510" alt="image" src="https://github.com/user-attachments/assets/33b70b5e-b3db-43ba-be03-eeed87aad488" />
<br>
<img width="1320" height="704" alt="image" src="https://github.com/user-attachments/assets/8103bf87-2407-4422-8a3e-1d017dfc2f77" />

<br><br>

### 👤 Profile Page
<img width="1030" height="661" alt="image" src="https://github.com/user-attachments/assets/d84fcc77-2ca2-437a-addf-1707b5eda94d" />

</div>

<br>

---

<br>

## 📦 Dependencies

```json
express
passport
passport-google-oauth20
mongoose
express-session
dotenv
ejs
nodemon
```

<br>

---

<br>

<div align="center">

## 👨‍💻 Author

### **Dharmik Ragiya**

</div>
