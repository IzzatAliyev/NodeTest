import express from 'express';
import { TestController } from './controller/test.controller';
import { TestFacade } from './facade/impl/test.facade';
import { TestRepository } from './repository/impl/test.repository';
import { TestService } from './service/impl/test.service';

const app = express();
const testRepository = new TestRepository();
const testService = new TestService(testRepository);
const testFacade = new TestFacade(testService);
const testController = new TestController(testFacade);

app.use('/tests', testController.router);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
