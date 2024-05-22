import { Router, Request, Response } from 'express';
import { ITestFacade } from '../facade/i.test.facade';

export class TestController {
  public router: Router;

  private readonly testFacade: ITestFacade

  constructor(testFacade: ITestFacade) {
    this.testFacade = testFacade;
    this.router = Router();
    this.routes();
  }

  private routes() {
    this.router.get('/', async (req: Request, res: Response) => {
      const tests = await this.testFacade.getAll();
      res.json(tests);
    });

    this.router.post('/', async (req: Request, res: Response) => {
      const createdTest = await this.testFacade.create(req.body);
      res.json(createdTest);
    });

    this.router.get('/:id', async (req: Request, res: Response) => {
      const id = req.params.id;
      const test = await this.testFacade.getById(id);
      if (!test) {
        res.sendStatus(404);
      } else {
        res.json(test);
      }
    });

    this.router.put('/:id', async (req: Request, res: Response) => {
      const id = req.params.id;
      const updatedTest = await this.testFacade.update(id, req.body);
      if (!updatedTest) {
        res.sendStatus(404);
      } else {
        res.json(updatedTest);
      }
    });

    this.router.delete('/:id', async (req: Request, res: Response) => {
      const id = req.params.id;
      const deletedTest = await this.testFacade.delete(id);
      if (!deletedTest) {
        res.sendStatus(404);
      } else {
        res.json(deletedTest);
      }
    });
  }
}
