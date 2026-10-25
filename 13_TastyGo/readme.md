# TastyGo — Food Ordering Platform Backend

A modular REST API backend for a food ordering platform, built with Node.js and organized around user management, restaurants, food items, categories, orders, providers, and administrative operations.

TastyGo uses a structured backend architecture with dedicated routes, controllers, models, middleware, validation schemas, and utility modules to support maintainable API development.

## Overview

TastyGo provides the backend foundation for managing food ordering platform resources. Its codebase separates request routing, business logic, data models, authentication, validation, media uploads, and email functionality into dedicated modules.

## Key Features

- **User Management** — User-related API operations and user data management.
- **Restaurant Management** — Restaurant-related operations and data handling.
- **Food Management** — Food item management.
- **Category Management** — Food category organization and management.
- **Order Management** — Order-related API operations.
- **Provider Management** — Provider-related operations.
- **Admin Module** — Dedicated administrative routes and controller.
- **Authentication Middleware** — Middleware for protecting routes.
- **Role-Based Access Control** — Role-checking middleware for authorization.
- **Request Validation** — Reusable validation middleware and schemas.
- **Image Upload Integration** — Cloudinary configuration and upload middleware.
- **Email Functionality** — Email configuration, templates, and mail-sending utility.
- **Rate Limiting** — Middleware to help limit excessive requests.
- **Centralized Error Handling** — Dedicated HTTP error middleware.
- **Modular REST API Architecture** — Separate routes, controllers, and models for each major resource.

## CRUD Operations

CRUD stands for Create, Read, Update, and Delete. These are the standard operations used to manage application resources.

| Operation | HTTP Method | Purpose |
|---|---|---|
| Create | POST | Create a new resource |
| Read | GET | Retrieve one or more resources |
| Update | PUT / PATCH | Update an existing resource |
| Delete | DELETE | Remove a resource |

The following modules are present in the project structure and are the primary areas for CRUD functionality.

| Module | Resource |
|---|---|
| Users | User records |
| Restaurants | Restaurant records |
| Food | Food item records |
| Categories | Food categories |
| Orders | Order records |
| Providers | Provider records |
| Admin | Administrative operations |

*Note: The folder structure confirms these modules exist, but the exact CRUD operations implemented in each module must be verified in the controller and route files.*

## Technology Stack

- **Node.js** — JavaScript runtime for backend development.
- **Express.js** — REST API framework, if configured in the project.
- **MongoDB** — Database, subject to the implementation in `config/DB.js`.
- **Mongoose** — Object modeling, if used by the models.
- **Cloudinary** — Cloud-based image and media management integration.
- **JavaScript** — Backend application logic.
- **Postman** — Recommended for API testing.

## Project Architecture

```text
TastyGo/
├── config/
│   ├── cloudinary.js
│   ├── DB.js
│   └── email.js
├── controller/
│   ├── admin.Controller.js
│   ├── category.Controller.js
│   ├── food.Controller.js
│   ├── order.Controller.js
│   ├── provider.Controller.js
│   ├── restaurant.Controller.js
│   └── user.Controller.js
├── middlewares/
│   ├── auth.js
│   ├── checkRole.js
│   ├── httpError.js
│   ├── rateLimit.js
│   ├── upload.js
│   └── validate.js
├── model/
│   ├── categoryModel.js
│   ├── FoodModel.js
│   ├── order.Model.js
│   ├── provider.model.js
│   ├── restaurant.model.js
│   └── user.model.js
├── routes/
│   ├── admin.route.js
│   ├── category.route.js
│   ├── food.route.js
│   ├── order.route.js
│   ├── provider.route.js
│   ├── restaurant.route.js
│   └── user.route.js
├── templates/
│   ├── emailtemplate.js
│   └── loginEmail.js
├── utils/
│   └── sendMail.js
├── validation/
│   ├── providerSchema.js
│   ├── restaurantSchema.js
│   └── UserSchema.js
├── .env
├── package.json
├── package-lock.json
└── server.js
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Access to the configured database
- Cloudinary credentials, if image uploads are enabled
- Email service credentials, if email functionality is enabled

### 1. Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root and configure the variables required by the application.

Example placeholders:

```env
PORT=5000
MONGODB_URI=your_database_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Configure any additional email or authentication variables required by the source code. The variable names above are illustrative; use the exact names referenced by your configuration files.

**Security:** Never commit real credentials, API keys, passwords, or tokens to GitHub.

### 3. Run the Application

If no start script is configured in `package.json`, start the server with:

```bash
node server.js
```

For development, if Nodemon is available:

```bash
npx nodemon server.js
```

### 4. Test the API

Use Postman or another HTTP client to test the routes registered in `server.js`.

Check the relevant route files to identify their actual paths, HTTP methods, required authentication, request bodies, and response formats.

## Security & Validation

The project structure includes middleware and schemas for several important backend concerns:

- Authentication middleware.
- Role-checking middleware.
- Request validation.
- Rate limiting.
- File upload handling.
- HTTP error handling.
- Resource-specific validation schemas.

These components provide the structure for implementing safer and more reliable API operations. Actual enforcement depends on how the middleware is applied to the routes.

## Code Organization

The project follows a modular separation of responsibilities:

- **Config:** Database, email, and Cloudinary configuration.
- **Controllers:** Request-handling and business logic.
- **Models:** Resource data structures and database interactions.
- **Routes:** API endpoint definitions.
- **Middlewares:** Authentication, authorization, validation, uploads, rate limiting, and errors.
- **Validation:** Schemas for incoming data.
- **Templates:** Email content templates.
- **Utils:** Reusable utilities such as email delivery.
- **Server:** Application entry point and server configuration.

## Future Enhancements

- API documentation with Swagger or OpenAPI.
- Automated unit and integration testing.
- Standardized API response formats.
- Structured logging and production monitoring.
- Pagination, filtering, and search where required.
- Continuous integration and deployment workflows.

## Author

**Dharmik**


---

*Built with Node.js and JavaScript.*
