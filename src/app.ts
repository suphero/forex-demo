import createError from 'http-errors';
import express, { json, urlencoded } from 'express';

import conversionRouter from './convert/routes';
import exchangeRouter from './exchange/routes';
import { logError, returnError } from './lib/helpers/errorHandler';

let app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/convert', conversionRouter);
app.use('/exchange', exchangeRouter);

app.use((_req, _res, next) => {
  next(createError(404));
});

app.use(logError);
app.use(returnError);

export default app;
