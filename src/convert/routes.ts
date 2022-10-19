import { Router, Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import { IRoutes } from '../lib/helpers/express';
import { validateSchema } from '../lib/helpers/joi';
import { ConvertController } from './controller';
import { createSchema, findSchema } from './schema';

/**
 * Convert Routes
 */
@Service()
export class ConvertRoutes implements IRoutes {
  public path = '/convert';
  public router = Router();
  controller: ConvertController;

  /**
   * Constructor
   */
  constructor(controller: ConvertController) {
    this.controller = controller;
    this.intializeRoutes();
  }

  /**
   * Initialize Routes
   */
  public intializeRoutes() {
    this.router.get('/', this.findConversions);
    this.router.post('/', this.createConversion);
  }

  /**
   * Find Conversions
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  findConversions = (req: Request, res: Response, next: NextFunction) => {
    try {
      const value = validateSchema(findSchema(), req.query);
      const result = this.controller.findConversions(value);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };

  /**
   * Create Conversion
   * @param req Request
   * @param res Response
   * @param next Next Function
   */
  createConversion = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { from, to, amount } = validateSchema(createSchema(), req.body);
      const result = await this.controller.createConversion(from, to, amount);
      res.json(result);
    } catch (error) {
      next(error);
    }
  };
}
