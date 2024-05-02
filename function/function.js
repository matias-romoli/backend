import { createTable } from "../database/conection.js";

export class Task {
  constructor(db) {
    this.database = db;
  }
  async showTaskFunction() {
    try {
      await createTable();
      const [rows] = await this.database.query("SELECT * FROM newtask");
      return rows;
    } catch (error) {
      return error;
    } finally {
      await this.database.releaseConnection();
    }
  }
  async showTaskCompleted() {
    try {
      const [rows] = await this.database.query(
        "SELECT * FROM newtask WHERE completed = 1"
      );
      return rows;
    } catch (error) {
      return error;
    } finally {
      await this.database.releaseConnection();
    }
  }
  async showTaskIDFunction(id) {
    try {
      await createTable();

      const [rows] = await this.database.query(
        "SELECT * FROM newtask WHERE id = ?",
        id
      );
      if (rows.length === 0) {
        return "Not exist task in database for task ID";
      }
      return rows;
    } catch (error) {
      return error;
    } finally {
      await this.database.releaseConnection();
    }
  }
  async newTaskFunction(newTask) {
    try {
      await createTable();
      return await this.database.query(
        "INSERT INTO newtask (name, completed) VALUES (?, DEFAULT)",
        [newTask]
      );
    } catch (error) {
      return error;
    } finally {
      await this.database.releaseConnection();
    }
  }
  async editTaskFunction(id, name) {
    try {
      const task = await this.showTaskIDFunction(id);
      if (task.length === 0) {
        return "No existe tarea con ese ID";
      }

      return await this.database.query(
        "UPDATE newtask SET name = ? WHERE id = ?",
        [name, id]
      );
    } catch (error) {
      return error;
    } finally {
      await this.database.releaseConnection();
    }
  }
  async deleteTaskFunction(id) {
    try {
      return await this.database.query("DELETE FROM newtask where id = ?", id);
    } catch (error) {
      return error;
    } finally {
      await this.database.releaseConnection();
    }
  }
  async editCompleted(completed, id) {
    try {
      return await this.database.query(
        "UPDATE newtask SET completed = ? WHERE id = ?",
        [completed, id]
      );
    } catch (error) {
      return error;
    } finally {
      await this.database.releaseConnection();
    }
  }

}
