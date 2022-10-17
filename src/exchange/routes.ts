import { Router } from 'express';
import { InvalidInputError } from '../helpers/errors';
import { exchange } from './controller';
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

    const rate = await exchange(value.base, value.symbol);
    res.json({ rate });
  } catch (error) {
    next(error);
  }
});

export default router;
