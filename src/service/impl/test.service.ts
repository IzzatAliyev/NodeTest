import { Test } from "../../model/test.model";
import { ITestRepository } from "../../repository/i.test.repository";
import { ITestService } from "../i.test.service";

class TestService implements ITestService {
    private readonly testRepository: ITestRepository;

    constructor(testRepository: ITestRepository) {
        this.testRepository = testRepository;
    }

    async getById(id: string): Promise<Test | null> {
        return this.testRepository.getById(id);
    }

    async getAll(): Promise<Test[]> {
        return this.testRepository.getAll();
    }

    async create(test: Test): Promise<Test> {
        return this.testRepository.create(test);
    }

    async update(id: string, test: Test): Promise<Test | null> {
        return this.testRepository.update(id, test);
    }

    async delete(id: string): Promise<boolean> {
        return this.testRepository.delete(id);
    }
}

export { TestService };
