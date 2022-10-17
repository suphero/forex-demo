import express from 'express';
import logger from './logger';

/**
 * Log Error
 * @param {Error} err Error
 */
function logError(err: Error) {
  logger.error(err);
}

/**
 * Return Error
 * @param {Error} err Error
 * @param {express.Request} _req Request
 * @param {express.Response} res Response
 * @param {express.NextFunction} _next Next Function
 */
function returnError(
  err: any,
  _req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  res.status(err.statusCode || 500).send(err.message);
}

export { logError, returnError };
