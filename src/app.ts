import createError from 'http-errors';
import express, { json, urlencoded, Application } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Service } from 'typedi';

import { ConvertRoutes } from './convert/routes';
import { ExchangeRoutes } from './exchange/routes';
import { handleError } from './lib/helpers/errorHandler';
import { IRoutes } from './lib/helpers/express';

/**
 * App
 */
@Service()
export class App {
  public app: Application;
  private routes: IRoutes[];

  /**
   * App Constructor
   * @param convertRoutes /convert Routes
   * @param exchangeRoutes /exchange Routes
   */
  constructor(convertRoutes: ConvertRoutes, exchangeRoutes: ExchangeRoutes) {
    this.app = express();
    this.routes = [convertRoutes, exchangeRoutes];

    this.initializeMiddlewares();
    this.initializeControllers();
    this.initializeErrorHandlers();
  }

  /**
   * Initialize Middlewares
   */
  private initializeMiddlewares() {
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }

  /**
   * Initialize Controllers
   */
  private initializeControllers() {
    this.routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }

  /**
   * Initialize Error Handlers
   */
  private initializeErrorHandlers() {
    this.app.use((_req, _res, next) => {
      next(createError(StatusCodes.NOT_FOUND));
    });

    this.app.use(handleError);
  }
}
