# Simple CRUD Backend with Node.js and MySQL

This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and MySQL. It provides basic functionalities to manage user records in a database.

## Features
- **List Users (`index()`)** - Retrieves a list of all users.
- **Create User (`create()`)** - Adds a new user to the database.
- **Get User (`show()`)** - Retrieves details of a specific user by ID.
- **Update User (`update()`)** - Updates user information.
- **Delete User (`delete()`)** - Removes a user from the database.

## Tech Stack
- **Node.js** - JavaScript runtime for building the backend.
- **Express.js** - Fast and lightweight web framework.
- **MySQL** - Relational database for storing user data.
- **Knex.js** - SQL query builder for easier database interactions.

## Installation & Usage

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/CaioFiszuk/node_react_simple_crud_backend
   ```

2. Install dependencies:
```sh   
  npm install
```

3. Configure the database in the .env file:
```sh
  DB_HOST=your-database-host
  DB_USER=your-database-user
  DB_PASSWORD=your-database-password
  DB_NAME=your-database-name
```

4. Run migrations to set up the database schema:
```sh
  npx knex migrate:latest
```

5. Start the server:
```sh
  npm run serve
```  

### API Endpoints
| Method | Endpoint    | Description                |
|--------|------------|----------------------------|
| GET    | `/users`   | Get all users              |
| POST   | `/users`   | Create a new user          |
| GET    | `/users/:id` | Get a user by ID          |
| PUT    | `/users/:id` | Update user by ID        |
| DELETE | `/users/:id` | Delete user by ID        |


### License
This project is licensed under the MIT License.