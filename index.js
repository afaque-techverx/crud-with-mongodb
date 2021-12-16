import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routes/users.js";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  console.log("Home page");
  res.send("Hello home");
});
app.use(bodyParser.json());
app.use("/users", userRouter);
app.listen(PORT, () => {
  console.log("Server goes brhhhh... on " + PORT);
});
