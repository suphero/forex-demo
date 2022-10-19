import { Router } from 'express';

/**
 * Routes Base
 */
export interface IRoutes {
  path: string;
  router: Router;
}
