import { Test } from "../model/test.model";

export interface ITestRepository {
    getById(id: string): Promise<Test | null>;
    getAll(): Promise<Test[]>;
    create(todo: Test): Promise<Test>;
    update(id: string, todo: Test): Promise<Test | null>;
    delete(id: string): Promise<boolean>;
  }