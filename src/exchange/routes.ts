import { Router } from 'express';
import Container from 'typedi';
import { validateSchema } from '../lib/helpers/joi';
import { ExchangeController } from './controller';
import { exchangeSchema } from './schema';
let router = Router();

/**
 * Get Exchange Route
 */
router.get('/', async (req, res, next) => {
  try {
    const value = validateSchema(exchangeSchema(), req.query);
    const ctrl = Container.get(ExchangeController);
    const rate = await ctrl.exchange(value.base, value.symbol);
    res.json({ rate });
  } catch (error) {
    next(error);
  }
});

export default router;
