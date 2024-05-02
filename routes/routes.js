import { controller } from "../controller/controller.js";
import express from "express";

const router = express.Router();
router.get("/task", controller.showTask);
router.get("/task/completed", controller.taskCompleted);
router.put("/completed/:id", controller.editTaskCompleted);
//
router.post("/task", controller.newTask);
router.put("/edit/:id", controller.editTask);
router.get("/task/:id", controller.showTaskID);
router.delete("/delete/:id", controller.deleteTask);

export default router;
