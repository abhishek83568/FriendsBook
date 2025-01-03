const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connection = require("./config/db");
const userRouter = require("./Routes/user.route");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  try {
    res.status(200).json({
      message: "Welcome to Friend's Book ",
    });
  } catch (error) {
    res.status(404).send(`${error} while running server`);
  }
});

app.listen(PORT, "0.0.0.0", async () => {
  try {
    await connection;
    console.log(
      `Server is running on Port ${PORT} and database is also connected`
    );
  } catch (error) {
    console.log(`Error while connecting to server and database`);
  }
});
