# api-cloud-storage

# Tenet Database API

This is a Node.js application that serves as an API for accessing and manipulating data from a SQLite database. It includes routes for various tables in the database, enabling CRUD (Create, Read, Update, Delete) operations. The API fetches a remote SQLite database periodically, ensuring up-to-date data availability for all requests.

## Features

- **Express.js**: The app is built on top of the Express.js framework, providing a simple and flexible interface for creating API routes.
- **SQLite3 Integration**: The app connects to an SQLite database using the `sqlite3` package, allowing for direct interaction with the database.
- **Periodic Database Fetch**: The application uses the `rclone` command to periodically download the database every 3 minutes and update the local SQLite instance.
- **CORS Configuration**: CORS is enabled for specific origins, ensuring security while allowing cross-origin requests from trusted sources.
- **CRUD Operations**: Standard API endpoints are provided for interacting with various database tables, supporting create, read, update, and delete operations.

## API Endpoints

The API exposes CRUD endpoints for various tables in the database. Here is a summary of the available routes:

- **GET** `/api/{tableName}`: Fetch all records from the table.
- **GET** `/api/{tableName}/:id`: Fetch a single record by ID.
- **POST** `/api/{tableName}`: Create a new record in the table.
- **PUT** `/api/{tableName}/:id`: Update an existing record by ID.
- **DELETE** `/api/{tableName}/:id`: Delete a record by ID.

### Available Tables

The following tables are available via the API:

- `bot_status`
- `orders`
- `network_data`
- `liquidity_data`
- `trade_events`
- `positions`
- `balances`
- `trade_settings`
- `token_prices`
- `account_data`
- `runtime_data`
- `indicators`
- `caller_balance`

### Example Requests

**GET all data from the `orders` table:**

```bash
curl http://localhost:3333/api/orders
