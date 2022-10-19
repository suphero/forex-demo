import { Router, Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import { IRoutes } from '../lib/helpers/express';
import { validateSchema } from '../lib/helpers/joi';
import { ExchangeController } from './controller';
import { exchangeSchema } from './schema';

/**
 * Exchange Routes
 */
@Service()
export class ExchangeRoutes implements IRoutes {
  public path = '/exchange';
  public router = Router();
  controller: ExchangeController;

  /**
   * Constructor
   */
  constructor(controller: ExchangeController) {
    this.controller = controller;
    this.intializeRoutes();
  }

  /**
   * Initialize Routes
   */
  public intializeRoutes() {
    this.router.get('/', this.getExchangeRate);
  }

  /**
   * Get Exchange Route
   */
  getExchangeRate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const value = validateSchema(exchangeSchema(), req.query);
      const rate = await this.controller.exchange(value.base, value.symbol);
      res.json({ rate });
    } catch (error) {
      next(error);
    }
  };
}
