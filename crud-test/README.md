# Express CRUD API 🚀


---

# 📸 Project Preview

## 🖥️ Server Running

---

## 📌 About Project

This is a simple CRUD (Create, Read, Update, Delete) API built using Express.js and Node.js.

This project was created for backend practice and learning REST API concepts.

---



# 🚀 API Endpoints

## 🔹 Home Route

```http
GET /
```

### Response

```json
"hello from server"
```

---

## 🔹 Get All Tasks

```http
GET /taskList
```

---

## 🔹 Get Single Task

```http
GET /taskList/:id
```

Example:

```http
GET /taskList/1
```

---

## 🔹 Create Task

```http
POST /taskList
```

### Body

```json
{
  "task": "coding",
  "message": "practice daily"
}
```

---

## 🔹 Update Task

```http
PUT /taskList/:id
```

### Body

```json
{
  "task": "updated task",
  "message": "updated message"
}
```

---

## 🔹 Delete Task

```http
DELETE /taskList/:id
```

---

# 📸 CRUD Illustration

## ➕ Create Data

<img width="1497" height="659" alt="Screenshot 2026-05-11 173059" src="https://github.com/user-attachments/assets/391217dc-54a3-4c4d-9e5a-3df59859c9db" />


---

## 📖 Read Data

<img width="1773" height="889" alt="Screenshot 2026-05-11 173358" src="https://github.com/user-attachments/assets/233449cc-0b7d-43df-a832-bf44396ee5e3" />


---

## ✏️ Update Data

<img width="1788" height="722" alt="Screenshot 2026-05-11 173818" src="https://github.com/user-attachments/assets/8ed1eaac-ea05-4d4c-ac39-adc5c7d76c53" />
<img width="1508" height="742" alt="Screenshot 2026-05-11 173846" src="https://github.com/user-attachments/assets/97f88b5c-d60c-4f48-828b-92646a4367b8" />



---

## ❌ Delete Data

<img width="1521" height="763" alt="Screenshot 2026-05-11 174056" src="https://github.com/user-attachments/assets/dbf15dc7-92df-45b7-ab04-d5c55dfb6241" />
<img width="1503" height="871" alt="Screenshot 2026-05-11 174118" src="https://github.com/user-attachments/assets/6dbc6d14-10c0-49b5-8e2a-334722e2cd23" />


---


# 📖 What I Learned

* Express Server Setup
* Routing in Express
* REST API Concepts
* Middleware Usage
* CRUD Operations
* Handling JSON Data
* Status Codes

---


# 👨‍💻 Author

## Dharmik
