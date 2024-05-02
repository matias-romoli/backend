import router from "./routes/routes.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = "8080";
app.use(cors());

app.use(express.json());
app.use("/", router);

//middleware routes
app.use((req, res, next) => {
  res.status(400).json({
    message: "Endpoint not found",
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log("listening on port:", PORT);
});
