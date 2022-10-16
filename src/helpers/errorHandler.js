import express from 'express';
import logger from './logger.js';

/**
 * Log Error
 * @param {Error} err Error
 */
function logError (err) {
  logger.error(err)
}

/**
 * Return Error
 * @param {Error} err Error
 * @param {express.Request} _req Request
 * @param {express.Response} res Response
 * @param {express.NextFunction} _next Next Function
 */
function returnError (err, _req, res, _next) {
  res.status(err.statusCode || 500).send(err.message)
}

export {
  logError,
  returnError
}
