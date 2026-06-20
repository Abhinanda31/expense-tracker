# Expense Tracker API Contract

# Expense Tracker API Contract

## Authentication APIs

### 1. Signup User

**Endpoint**

POST /api/auth/signup

**Request Body**

```json
{
  "name": "John Doe",
  "email": "john@gmail.com",
  "password": "Password123"
}
```

**Success Response (201)**

```json
{
  "message": "User created successfully"
}
```

**Validation Rules**

- Name is required
- Email must be valid
- Password must be at least 6 characters

### 2. Login User

**Endpoint**

POST /api/auth/login

**Request Body**

```json
{
  "email": "john@gmail.com",
  "password": "Password123"
}
```

**Success Response (200)**

```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

**Validation Rules**

- Email must be valid
- Password is required

## Expense APIs

### 3. Add Expense

**Endpoint**

POST /api/expenses

**Authentication Required**

Yes (Bearer Token)

**Request Body**

```json
{
  "amount": 500,
  "category": "Food",
  "date": "2026-06-20",
  "note": "Lunch"
}
```

**Success Response (201)**

```json
{
  "message": "Expense added successfully"
}
```

**Validation Rules**

- Amount must be a number greater than 0
- Category is required

### 4. Get Expenses

**Endpoint**

GET /api/expenses

**Authentication Required**

Yes (Bearer Token)

**Request Body**

None

**Success Response (200)**

```json
[
  {
    "_id": "expense_id",
    "amount": 500,
    "category": "Food",
    "date": "2026-06-20T00:00:00.000Z",
    "note": "Lunch"
  }
]
```

### 5. Get Dashboard

**Endpoint**

GET /api/expenses/dashboard

**Authentication Required**

Yes (Bearer Token)

**Request Body**

None

**Success Response (200)**

```json
{
  "totalExpenses": 500,
  "byCategory": {
    "Food": 500
  }
}
```

### 6. Update Expense

**Endpoint**

PUT /api/expenses/:id

**Authentication Required**

Yes (Bearer Token)

**Request Body**

```json
{
  "amount": 750,
  "category": "Food",
  "date": "2026-06-20",
  "note": "Updated Lunch"
}
```

**Success Response (200)**

```json
{
  "message": "Expense updated successfully"
}
```

### 7. Delete Expense

**Endpoint**

DELETE /api/expenses/:id

**Authentication Required**

Yes (Bearer Token)

**Request Body**

None

**Success Response (200)**

```json
{
  "message": "Expense deleted successfully"
}
```
