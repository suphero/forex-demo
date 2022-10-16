import { Router } from 'express';
import { InvalidInputError } from '../helpers/errors.js';
import * as ctrl from './controller.js';
import { createSchema, findSchema } from './schema.js';
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
