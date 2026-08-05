# 🚀 Node.js Authentication API

A simple authentication API built using **Node.js**, **Express.js**, **MongoDB**, and **JWT**. This project demonstrates user authentication, authorization, CRUD operations, and JWT token management.

---

**Video Link**
 : https://drive.google.com/file/d/1Xs1k4RxjNgdJ7Ow8mXpY_0kdaX_VZcs9/view?usp=sharing


**Render Link**
 : https://node-js-2-672a.onrender.com/user/allUserRender


# 📌 Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Get All Users
- Update User
- Delete User
- Logout
- Logout From All Devices
- Custom Error Handling

---

# 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv

---

# 📂 Project Structure

```
config/
│── DB.js

controller/
│── user.controller.js

middlewares/
│── Auth.js
│── httpError.js

model/
│── user.model.js

routes/
│── user.route.js

server.js
.env
package.json
```

---

# 🔐 Authentication

After successful login, a JWT token is generated.

Use the token in every protected API.

```
Authorization: Bearer <JWT_TOKEN>
```

---

# 📮 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /register | Register User |
| POST | /login | User Login |
| GET | /users | Get All Users |
| GET | /authLogin | Protected Route |
| PATCH | /update | Update User |
| POST | /logout | Logout Current Device |
| POST | /logoutAll | Logout All Devices |
| DELETE | /delete | Delete User |

---

# 📖 Controller Logic

## 1️⃣ Register User

Registers a new user in MongoDB.

### Working
- Reads user details from request body.
- Creates a new user.
- Saves user into database.
- Returns success response.

### Fields

- Name
- Email
- Password
- Mobile Number
- Address

### 📷 Output

<img width="895" height="726" alt="image" src="https://github.com/user-attachments/assets/1ab05b03-a52d-4837-aad4-7ad8081c10a1" />


---

## 2️⃣ Login

Authenticates user using email and password.

### Working

- Verifies credentials.
- Generates JWT Token.
- Stores token in database.
- Returns logged-in user with token.

### 📷 Output

<img width="918" height="732" alt="image" src="https://github.com/user-attachments/assets/9ae315cd-3ce2-4daf-8a13-b148777d3838" />


---

## 3️⃣ Get All Users

Returns all registered users.

### Working

- Fetches all users using `User.find()`.
- Returns total users.
- Returns complete user list.

### 📷 Output

<img width="826" height="756" alt="image" src="https://github.com/user-attachments/assets/3737c89a-e112-47bc-9568-03be117f53b2" />


---

## 4️⃣ Auth Login

Protected API.

### Working

- Auth middleware verifies JWT.
- If token is valid,
  `req.user`
  contains authenticated user.
- Returns authenticated user's details.

### 📷 Output

<img width="953" height="709" alt="image" src="https://github.com/user-attachments/assets/833fabb8-ba87-4494-862a-97f9a5193e08" />


---

## 5️⃣ Logout

Logs out only the current device.

### Working

- Removes current JWT token.
- Saves updated token array.
- Current session ends.

### 📷 Output

<img width="856" height="560" alt="image" src="https://github.com/user-attachments/assets/1b68eebe-ada9-48b1-b9ee-43ca4816ba31" />


---

## 6️⃣ Logout All

Logs out user from every device.

### Working

- Removes all stored JWT tokens.
- Saves user.
- Every logged-in device becomes unauthorized.

### 📷 Output

<img width="858" height="516" alt="image" src="https://github.com/user-attachments/assets/6a3e7f9f-8133-45a8-8a7f-00d0ae03f01e" />


---

## 7️⃣ Update User

Updates authenticated user's profile.

### Allowed Fields

- Name
- Address

### Working

- Validates allowed fields.
- Updates user.
- Saves changes.

### 📷 Output

<img width="990" height="751" alt="image" src="https://github.com/user-attachments/assets/de6fe716-57fe-4526-9286-79550a120933" />


---

## 8️⃣ Delete User

Deletes authenticated user's account.

### Working

- Gets logged-in user.
- Finds user by ID.
- Deletes account.
- Returns success response.

### 📷 Output

<img width="865" height="655" alt="image" src="https://github.com/user-attachments/assets/a618000f-9c42-4a65-ae76-5debf6e055a1" />


---

---

# 👨‍💻 Author

**Dharmik Ragiya**

Node.js Authentication Practice Exam
