import express from 'express';
import logger from './logger';

/**
 * Handle Error
 * @param {Error} err Error
 * @param {express.Request} _req Request
 * @param {express.Response} res Response
 * @param {express.NextFunction} _next Next Function
 */
function handleError(
  err: any,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  logger.error(err);
  res.status(err.statusCode || 500).send(err.message || err.name);
}

export { handleError };
