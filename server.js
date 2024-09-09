const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const { exec } = require('child_process');
const path = require('path');
const cors = require('cors');  // Import the cors package

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, './database.db');

// CORS configuration for specific origins
const allowedOrigins = ['https://tenetbox.netlify.app', 'http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

let db = null;

function openDatabase() {
  db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('Failed to open the database:', err.message);
    } else {
      console.log('Connected to the database.');
    }
  });
}

function closeDatabase() {
  if (db) {
    db.close((err) => {
      if (err) {
        console.error('Error closing the database:', err.message);
      } else {
        console.log('Database connection closed.');
      }
    });
  }
}

function fetchDatabase() {
  closeDatabase(); // Close the current database connection

  const command = `rclone copy tenet:tenetdb/database.db /home/tenet/api/`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing rclone command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`rclone stderr: ${stderr}`);
      return;
    }
    console.log(`Database downloaded successfully to: ${dbPath}`);

    // Reopen the database connection after the new file is downloaded
    openDatabase();
  });
}

// Fetch the database every 3 minutes
setInterval(fetchDatabase, 180000);

// Open the database connection after the initial fetch
fetchDatabase(); // Immediately fetch the database on server start

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Failed to open the database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

// Generic function to handle database errors
const handleDBError = (res, err) => res.status(500).json({ error: err.message });

// Helper function to create GET routes for a table
const createTableRoutes = (tableName) => {
  // GET all records from the table
  app.get(`/api/${tableName}`, (req, res) => {
    if (!db) return handleDBError(res, new Error("Database not connected"));

    db.all(`SELECT * FROM ${tableName}`, [], (err, rows) => {
      if (err) return handleDBError(res, err);
      res.json({ data: rows });
    });
  });

  // GET a single record by ID from the table
  app.get(`/api/${tableName}/:id`, (req, res) => {
    const { id } = req.params;
    db.get(`SELECT * FROM ${tableName} WHERE id = ?`, [id], (err, row) => {
      if (err) return handleDBError(res, err);
      res.json({ data: row });
    });
  });
};

// Create routes for all tables (only GET requests)
createTableRoutes('bot_status');
createTableRoutes('orders');
createTableRoutes('network_data');
createTableRoutes('liquidity_data');
createTableRoutes('trade_events');
createTableRoutes('positions');
createTableRoutes('balances');
createTableRoutes('trade_settings');
createTableRoutes('token_prices');
createTableRoutes('account_data');
createTableRoutes('runtime_data');
createTableRoutes('indicators');
createTableRoutes('caller_balance');

// Start the HTTPS server
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
