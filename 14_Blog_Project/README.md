<div align="center">

# 🚀 Blog Management API

### Secure REST API built with **Node.js**, **Express.js**, **MongoDB**, **JWT**, and **Cloudinary**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

A secure and scalable REST API that provides user authentication, role-based authorization, blog management, image uploads, and JWT-based security.

</div>

---

# ✨ Features

- 👤 User Registration & Login
- 🔐 JWT Authentication
- 🛡 Role Based Authorization
- 📝 Blog CRUD Operations
- ☁️ Cloudinary Image Upload
- 📁 Multer File Upload
- ✅ Joi Validation
- 🔒 Password Hashing (bcrypt)
- ⚡ Custom Error Handling

---

# 🛠 Tech Stack

| Backend | Database | Authentication | Cloud |
|----------|-----------|---------------|--------|
| Node.js | MongoDB | JWT | Cloudinary |
| Express.js | Mongoose | bcryptjs | Multer |

---

# 📂 Folder Structure

```text
BLOG_PROJECT
│
├── config
│   ├── DB.js
│   └── cloudinary.js
│
├── controller
│   ├── user.controller.js
│   └── blog.controller.js
│
├── middlewares
│   ├── auth.js
│   ├── checkRole.js
│   ├── upload.js
│   ├── validate.js
│   └── httpError.js
│
├── model
│   ├── user.model.js
│   └── blog.model.js
│
├── routes
│   ├── user.routes.js
│   ├── blog.routes.js
│   └── admin.routes.js
│
├── validation
│   ├── user.validation.js
│   └── blog.validation.js
│
├── .env
├── package.json
└── server.js
```



---

# 📡 API Endpoints

## User

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /user/register | Register User |
| POST | /user/login | Login User |
| GET | /user/auth | Authenticated User |
| GET | /user/getall | Get All Users |
| PATCH | /user/update/:id | Update User |
| DELETE | /user/delete/:id | Delete User |
| POST | /user/logout | Logout |
| POST | /user/logoutall | Logout All Devices |

---

## Blog

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /blog/add | Create Blog |
| GET | /blog/getall | Get All Blogs |
| PATCH | /blog/update/:id | Update Blog |
| DELETE | /blog/delete/:id | Delete Blog |

---

# 👤 User Controller

## ➜ Register User

Registers a new user with profile image.


<img width="977" height="708" alt="image" src="https://github.com/user-attachments/assets/62f1dc8a-546d-43f1-8f79-e1cea6ef6ca5" />


---

## ➜ Login User

Logs in the user and generates a JWT token.



<img width="977" height="751" alt="image" src="https://github.com/user-attachments/assets/a367ca2b-95e7-4d9e-a660-bdc23276fe92" />


---

## ➜ Auth Login

Returns authenticated user details.


<img width="970" height="767" alt="image" src="https://github.com/user-attachments/assets/830ccefc-cda5-4853-9ca3-b12ed0a85f7c" />


---

## ➜ Get All Users

Returns all users.


<img width="958" height="770" alt="image" src="https://github.com/user-attachments/assets/68e5b7cd-2f40-45ba-b49d-0d2fff7ed113" />


---

## ➜ Update User

Updates user profile.

<img width="933" height="770" alt="image" src="https://github.com/user-attachments/assets/c25f746b-c64e-499b-93a9-2654fa13717b" />


---

## ➜ Logout

Logs out the current device.

<img width="771" height="564" alt="image" src="https://github.com/user-attachments/assets/48a6f243-7c22-4822-a31c-c45511f72b87" />


---

## ➜ Logout All Devices

Logs out from all devices.


<img width="610" height="543" alt="image" src="https://github.com/user-attachments/assets/9828b0b3-428a-4e2f-b11e-4e5dd87f6412" />


---

## ➜ Delete User

Deletes a user.

<img width="778" height="568" alt="image" src="https://github.com/user-attachments/assets/38604cbc-31fd-434e-ae7c-f54256a3b656" />


---

# 📝 Blog Controller


## ➜ Create Blog

Creates a new blog.


<img width="958" height="738" alt="image" src="https://github.com/user-attachments/assets/9ce8a57f-1c09-4a1c-be5f-8a90fdddaa0f" />


---

## ➜ Get All Blogs

Returns all blogs.


<img width="972" height="740" alt="image" src="https://github.com/user-attachments/assets/eab9afe0-c02d-4fc5-89a1-93ececeeb1d3" />


---

## ➜ Update Blog

Updates an existing blog.


<img width="959" height="716" alt="image" src="https://github.com/user-attachments/assets/66aeda3c-077e-4366-97e7-167a6456f9a9" />


---

## ➜ Delete Blog

Deletes a blog.



<img width="1054" height="588" alt="image" src="https://github.com/user-attachments/assets/2f2da7db-2d12-4d65-bec6-330af8737cca" />


---

# 🛡 Middlewares

| Middleware | Description |
|------------|-------------|
| auth.js | Verifies JWT Token |
| upload.js | Uploads Images |
| validate.js | Joi Validation |
| checkRole.js | Role Based Access |
| httpError.js | Custom Error Handler |

---

# 🗄 Database Models

## User

- name
- email
- password
- MobileNumber
- address
- Role
- image
- cloudinary_id
- tokens

---

## Blog

- title
- description
- category
- image
- author
- cloudinary_id

---


<div align="center">

## 👨‍💻 Developer

**Dharmik**


</div>
