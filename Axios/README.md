
# HTTP Requests & Axios

## What is an HTTP Request?

An **HTTP request** is a message sent by a client (such as a React application or browser) to a server to request data or perform an action.

### Basic Flow

**React App → Server/API → Response → React App**

For example:

```js
axios.get("https://api.example.com/users");
```

The server processes the request and sends a response:

```json
[
  { "id": 1, "name": "Nithesh" },
  { "id": 2, "name": "Rahul" }
]
```

The React application can then use this data to display the users.

---

# HTTP Methods

| Method     | Purpose                      | Example            |
| ---------- | ---------------------------- | ------------------ |
| **GET**    | Retrieve data                | Get users          |
| **POST**   | Create/send data             | Create a user      |
| **PUT**    | Replace an existing resource | Replace user       |
| **PATCH**  | Partially update a resource  | Change user's name |
| **DELETE** | Delete data                  | Delete a user      |

---

# Axios

**Axios** is a JavaScript library used to make HTTP requests from applications such as React and Node.js.

Install Axios:

```bash
npm install axios
```

Import it:

```js
import axios from "axios";
```

---

# 1. GET Request

Used to **fetch data**.

```js
const response = await axios.get("/users");

console.log(response.data);
```

Example:

```js
const response = await axios.get(
  "https://api.example.com/users"
);
```

Axios response contains information such as:

```js
response.data
response.status
response.headers
```

Usually, the most important one is:

```js
response.data
```

---

# 2. POST Request

Used to **send/create data**.

```js
const response = await axios.post("/users", {
  name: "Nithesh",
  age: 20
});
```

The second argument is the **request body**.

```text
POST
 ↓
Server
 ↓
Create new user
```

---

# 3. PUT Request

Used to **replace/update an entire resource**.

```js
const response = await axios.put("/users/1", {
  name: "Nithesh",
  age: 21
});
```

For example, the existing user:

```json
{
  "id": 1,
  "name": "Rahul",
  "age": 20
}
```

can be replaced with:

```json
{
  "name": "Nithesh",
  "age": 21
}
```

---

# 4. PATCH Request

Used to **partially update** a resource.

```js
const response = await axios.patch("/users/1", {
  name: "Nithesh"
});
```

Only the name is changed.

```text
Before:
name → Rahul
age  → 20

PATCH:
name → Nithesh

After:
name → Nithesh
age  → 20
```

---

# 5. DELETE Request

Used to **delete a resource**.

```js
const response = await axios.delete("/users/1");
```

This requests the server to delete the user with ID `1`.

---

# 6. Query Parameters

You can send parameters in the URL.

Instead of:

```js
axios.get("/users?page=1&limit=10");
```

Axios allows:

```js
const response = await axios.get("/users", {
  params: {
    page: 1,
    limit: 10
  }
});
```

Axios creates:

```text
/users?page=1&limit=10
```

This is especially useful for:

* Pagination
* Search
* Filtering
* Sorting

---

# 7. Request Headers

Headers contain additional information about the request.

```js
const response = await axios.get("/users", {
  headers: {
    Authorization: "Bearer TOKEN",
    "Content-Type": "application/json"
  }
});
```

Commonly used for authentication:

```js
headers: {
  Authorization: `Bearer ${token}`
}
```

---

# 8. POST with Headers and Data

You can combine them:

```js
const response = await axios.post(
  "/users",
  {
    name: "Nithesh",
    age: 20
  },
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);
```

The structure is:

```text
axios.post(
    URL,
    DATA,
    CONFIG
)
```

---

# 9. Axios Response

When you make a request:

```js
const response = await axios.get("/users");
```

Axios returns a response object.

Important properties:

```js
response.data
response.status
response.statusText
response.headers
```

Example:

```js
console.log(response.data);
console.log(response.status);
```

Usually:

```js
response.data
```

is what your application needs.

---

# 10. Error Handling

Use `try...catch` with Axios:

```js
try {
  const response = await axios.get("/users");

  console.log(response.data);
} catch (error) {
  console.log(error);
}
```

A better approach:

```js
try {
  const response = await axios.get("/users");

  return response.data;
} catch (error) {
  console.log(error.message);
  throw error;
}
```

---

# 11. Axios Instance

Instead of repeatedly writing the base URL:

```js
axios.get("https://api.example.com/users");
axios.get("https://api.example.com/products");
```

create an Axios instance:

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com"
});

export default api;
```

Now:

```js
api.get("/users");
api.get("/products");
```

Axios automatically uses:

```text
https://api.example.com
```

as the base URL.

---

# 12. Axios Instance with Headers

You can also configure common headers:

```js
const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json"
  }
});
```

Then:

```js
api.post("/users", {
  name: "Nithesh"
});
```

---

# 13. Async/Await

Axios requests are asynchronous.

```js
const response = await axios.get("/users");
```

`await` waits for the response before continuing.

Example:

```js
const fetchUsers = async () => {
  try {
    const response = await axios.get("/users");

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};
```

---

# Quick Axios Syntax

```js
// GET
axios.get(url);

// GET with query parameters
axios.get(url, {
  params: {
    page: 1
  }
});

// POST
axios.post(url, data);

// PUT
axios.put(url, data);

// PATCH
axios.patch(url, data);

// DELETE
axios.delete(url);

// Headers
axios.get(url, {
  headers: {
    Authorization: `Bearer ${token}`
  }
});
```

---

# Simple Summary

```text
GET
→ Fetch data

POST
→ Create/send data

PUT
→ Replace entire resource

PATCH
→ Partially update resource

DELETE
→ Delete resource

params
→ Send query parameters

headers
→ Send additional request information

response.data
→ Get server data

try/catch
→ Handle errors

axios.create()
→ Create reusable Axios instance
```

### In one line

> **HTTP = communication protocol between client and server.**

> **Axios = JavaScript library that makes HTTP requests easier to send, configure, and handle.**
