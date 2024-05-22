import { OkPacket, RowDataPacket } from "mysql2/promise";
import { Test } from "../../model/test.model";
import { pool } from "../db";
import { ITestRepository } from "../i.test.repository";

class TestRepository implements ITestRepository {

  async getById(id: string): Promise<Test | null> {
    const [rows] = await pool.query('SELECT * FROM tests WHERE id = ?', [id]) as RowDataPacket[];
    if (rows.length === 0) {
      return null;
    }
    return rows[0] as Test;
  }

  async getAll(): Promise<Test[]> {
    const [rows] = await pool.query('SELECT * FROM tests');
    return rows as Test[];
  }

  async create(test: Test): Promise<Test> {
    const { name } = test;
    const [result] = await pool.query('INSERT INTO tests VALUES ?', [name]) as OkPacket[];
    const insertId = result.insertId.toString();
    const createdTest = { ...test, id: insertId };
    return createdTest;
  }

  async update(id: string, test: Test): Promise<Test | null> {
    const { name } = test;
    const [result] = await pool.query('UPDATE tests SET name = ? WHERE id = ?', [name, id]) as OkPacket[];
    if (result.affectedRows === 0) {
      return null;
    }
    const updatedTest = { ...test, id };
    return updatedTest;
  }

  async delete(id: string): Promise<boolean> {
    const [result] = await pool.query('DELETE FROM tests WHERE id = ?', [id]) as OkPacket[];
    return result.affectedRows > 0;
  }
}

export { TestRepository };
