import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import { StatusCodes } from 'http-status-codes';

import conversionRouter from './convert/routes';
import exchangeRouter from './exchange/routes';
import { handleError } from './lib/helpers/errorHandler';

let app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/convert', conversionRouter);
app.use('/exchange', exchangeRouter);

app.use((_req, _res, next) => {
  next(createError(StatusCodes.NOT_FOUND));
});

app.use(handleError);

export default app;
