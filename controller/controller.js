import { Task } from "../function/function.js";
import db from "../database/conection.js";
const task = new Task(db);

export const controller = {
  showTask: async function (req, res) {
    try {
      const show = await task.showTaskFunction();
      return await res.status(200).json(show);
    } catch (error) {
      return await res.status(500).json(error);
    }
  },
  newTask: async function (req, res) {
    try {
      const { newTask } = req.body;
      await task.newTaskFunction(newTask);
      return await res.status(200).json("Tarea creada con éxito.");
    } catch (error) {
      await res.status(500).json(error);
    }
  },
  editTask: async function (req, res) {
    try {
      const { editTask } = req.body;
      console.log(req.params.id);
      await task.editTaskFunction(req.params.id, editTask);
      return await res.status(200).json("Tarea actualizada con éxito.");
    } catch (error) {
      await res.status(500).json(error);
    }
  },
  deleteTask: async function (req, res) {
    try {
      await task.deleteTaskFunction(req.params.id);
      return await res.status(200).json("Tarea eliminada con èxito.");
    } catch (error) {
      await res.status(500).json(error);
    }
  },
  showTaskID: async function (req, res) {
    try {
      const showID = await task.showTaskIDFunction(req.params.id);
      return await res.status(200).json(showID);
    } catch (error) {
      return await res.status(500).json(error);
    }
  },
  editTaskCompleted: async function (req, res) {
    try {
      const { completed } = req.body;
      await task.editCompleted(completed, req.params.id);

      return await res.status(200).json();
    } catch (error) {
      return await res.status(500).json(error);
    }
  },
  taskCompleted: async function (req, res) {
    try {
      const data = await task.showTaskCompleted();
      return await res.status(200).json(data);
    } catch (error) {
      return error;
    }
  },
};
