# HTTP Requests & Axios

## What is an HTTP Request?

An **HTTP request** is a message sent by a client (such as a React application or browser) to a server to request data or perform an action.

### Basic Flow

**React App → Server/API → Response → React App**

For example, when a React application needs a list of users, it sends an HTTP request to the server:

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

## HTTP Methods

| Method     | Purpose                      | Example            |
| ---------- | ---------------------------- | ------------------ |
| **GET**    | Retrieve data                | Get users          |
| **POST**   | Create/send data             | Create a user      |
| **PUT**    | Replace/update existing data | Update a user      |
| **PATCH**  | Partially update data        | Change user's name |
| **DELETE** | Delete data                  | Delete a user      |

## Axios

**Axios** is a JavaScript library used to make HTTP requests from applications such as React and Node.js.

### Example

```js
import axios from "axios";

// GET request
const response = await axios.get("/users");

// POST request
await axios.post("/users", {
  name: "Nithesh",
  age: 20
});
```

Axios makes API communication easier by providing a simple syntax for sending requests and handling responses.

### In Simple Words

> **HTTP request = Communication between your application and a server.**

> **Axios = A tool that makes sending HTTP requests easier.**
