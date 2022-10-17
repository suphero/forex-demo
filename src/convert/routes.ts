import { Router } from 'express';
import { InvalidInputError } from '../lib/helpers/errors';
import * as ctrl from './controller';
import { createSchema, findSchema } from './schema';
let router = Router();

/**
 * Find Conversions Route
 */
router.get('/', (req, res, next) => {
  try {
    const validationResult = findSchema().validate(req.query);
    const { value, error } = validationResult;
    if (error) {
      throw new InvalidInputError(error.message);
    }

    const result = ctrl.conversions(value);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

/**
 * Create Conversion Route
 */
router.post('/', async (req, res, next) => {
  try {
    const validationResult = createSchema().validate(req.body);
    const { value, error } = validationResult;
    if (error) {
      throw new InvalidInputError(error.message);
    }

    const result = await ctrl.convert(value.from, value.to, value.amount);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
