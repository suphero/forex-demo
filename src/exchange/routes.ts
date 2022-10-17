import { Router } from 'express';
import Container from 'typedi';
import { InvalidInputError } from '../lib/helpers/errors';
import { ExchangeController } from './controller';
import { exchangeSchema } from './schema';
let router = Router();

/**
 * Get Exchange Route
 */
router.get('/', async (req, res, next) => {
  try {
    const validationResult = exchangeSchema().validate(req.query);
    const { value, error } = validationResult;
    if (error) {
      throw new InvalidInputError(error.message);
    }

    const ctrl = Container.get(ExchangeController);
    const rate = await ctrl.exchange(value.base, value.symbol);
    res.json({ rate });
  } catch (error) {
    next(error);
  }
});

export default router;
