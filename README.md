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

### API Routes

## API Routes

- **GET** `https://rebekah.cloud/api/bot_status`: Fetch all records from the `bot_status` table.
- **GET** `https://rebekah.cloud/api/bot_status/:id`: Fetch a single record by ID from the `bot_status` table.

- **GET** `https://rebekah.cloud/api/orders`: Fetch all records from the `orders` table.
- **GET** `https://rebekah.cloud/api/orders/:id`: Fetch a single record by ID from the `orders` table.

- **GET** `https://rebekah.cloud/api/network_data`: Fetch all records from the `network_data` table.
- **GET** `https://rebekah.cloud/api/network_data/:id`: Fetch a single record by ID from the `network_data` table.

- **GET** `https://rebekah.cloud/api/liquidity_data`: Fetch all records from the `liquidity_data` table.
- **GET** `https://rebekah.cloud/api/liquidity_data/:id`: Fetch a single record by ID from the `liquidity_data` table.

- **GET** `https://rebekah.cloud/api/trade_events`: Fetch all records from the `trade_events` table.
- **GET** `https://rebekah.cloud/api/trade_events/:id`: Fetch a single record by ID from the `trade_events` table.

- **GET** `https://rebekah.cloud/api/positions`: Fetch all records from the `positions` table.
- **GET** `https://rebekah.cloud/api/positions/:id`: Fetch a single record by ID from the `positions` table.

- **GET** `https://rebekah.cloud/api/balances`: Fetch all records from the `balances` table.
- **GET** `https://rebekah.cloud/api/balances/:id`: Fetch a single record by ID from the `balances` table.

- **GET** `https://rebekah.cloud/api/trade_settings`: Fetch all records from the `trade_settings` table.
- **GET** `https://rebekah.cloud/api/trade_settings/:id`: Fetch a single record by ID from the `trade_settings` table.

- **GET** `https://rebekah.cloud/api/token_prices`: Fetch all records from the `token_prices` table.
- **GET** `https://rebekah.cloud/api/token_prices/:id`: Fetch a single record by ID from the `token_prices` table.

- **GET** `https://rebekah.cloud/api/account_data`: Fetch all records from the `account_data` table.
- **GET** `https://rebekah.cloud/api/account_data/:id`: Fetch a single record by ID from the `account_data` table.

- **GET** `https://rebekah.cloud/api/runtime_data`: Fetch all records from the `runtime_data` table.
- **GET** `https://rebekah.cloud/api/runtime_data/:id`: Fetch a single record by ID from the `runtime_data` table.

- **GET** `https://rebekah.cloud/api/indicators`: Fetch all records from the `indicators` table.
- **GET** `https://rebekah.cloud/api/indicators/:id`: Fetch a single record by ID from the `indicators` table.

- **GET** `https://rebekah.cloud/api/caller_balance`: Fetch all records from the `caller_balance` table.
- **GET** `https://rebekah.cloud/api/caller_balance/:id`: Fetch a single record by ID from the `caller_balance` table.

