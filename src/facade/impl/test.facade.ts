import { Test } from "../../model/test.model";
import { ITestService } from "../../service/i.test.service";
import { ITestFacade } from "../i.test.facade";

export class TestFacade implements ITestFacade {
    private readonly testService: ITestService;

    constructor(testService: ITestService) {
        this.testService = testService;
    }

    async getById(id: string): Promise<Test | null> {
        const test = await this.testService.getById(id);
        return test;
    }
    async getAll(): Promise<Test[]> {
        const tests = await this.testService.getAll();
        return tests;
    }
    async create(test: Test): Promise<Test> {
        const createdTest = await this.testService.create(test);
        return createdTest;
    }
    async update(id: string, test: Test): Promise<Test | null> {
        const updatedTest = await this.testService.update(id,test);
        return updatedTest;
    }
    async delete(id: string): Promise<boolean> {
        const isDeleted = await this.testService.delete(id);
        return isDeleted;
    }
}
