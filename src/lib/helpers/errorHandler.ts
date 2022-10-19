import { Request, Response, NextFunction } from 'express';
import logger from './logger';

/**
 * Handle Error
 * @param {Error} err Error
 * @param {Request} _req Request
 * @param {Response} res Response
 * @param {NextFunction} _next Next Function
 */
function handleError(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  logger.error(err);
  res.status(err.statusCode || 500).send(err.message || err.name);
}

export { handleError };
