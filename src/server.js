const http = require("http");
require("dotenv").config();
const app = require("./app");
const connectDB = require("./db/database");

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("Database connection successful");
    server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
  } catch (error) {
    console.log(error.message);
  }
};

startServer();
