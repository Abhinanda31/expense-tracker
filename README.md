# Personal Expense Tracker API

## Project Overview

A backend web application that allows users to:

- Sign up and log in
- Record personal expenses
- View their expenses
- View a dashboard summarizing expenses by category
- Access only their own data using JWT authentication

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

## Features

### Authentication

- User Signup
- User Login
- JWT Token Generation
- Protected Routes

### Expense Management

- Add Expense
- View Expenses
- User-specific Data Access

### Validation

- Amount must be greater than 0
- Required fields validation
- Date validation through Mongoose schema

### Dashboard

Returns:

- Total Expenses
- Category-wise Expense Summary

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd expense-tracker
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/expense_tracker
JWT_SECRET=your_secret_key
```

---

## Start MongoDB

Make sure MongoDB is running:

```bash
brew services start mongodb-community
```

Verify:

```bash
brew services list
```

---

## Run the Application

Development Mode:

```bash
npm run dev
```

Production Mode:

```bash
npm start
```

---

## API Endpoints

### Signup

POST `/api/auth/signup`

### Login

POST `/api/auth/login`

### Add Expense

POST `/api/expenses`

Requires JWT Token

### Get Expenses

GET `/api/expenses`

Requires JWT Token

### Dashboard

GET `/api/expenses/dashboard`

Requires JWT Token

---

## Security Features

- Password hashing using bcryptjs
- JWT authentication
- Protected routes
- User-specific data access
- Server-side validation

---

## Acceptance Criteria Covered

- Users must log in to access expenses
- User A cannot access User B data
- Amount validation implemented
- Date validation implemented
- Dashboard totals match stored expenses

---

## Author

Abhinanda.P
BCA Project – Personal Expense Tracker
