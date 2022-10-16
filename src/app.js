import createError from 'http-errors';
import express, { json, urlencoded } from 'express';
import cookieParser from 'cookie-parser';

import conversionRouter from './conversion/routes.js';
import exchangeRouter from './exchange/routes.js';
import { logError, returnError } from './helpers/errorHandler.js'

let app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/conversion', conversionRouter);
app.use('/exchange', exchangeRouter);

app.use((_req, _res, next) => {
  next(createError(404));
});

app.use(logError);
app.use(returnError);

export default app;
