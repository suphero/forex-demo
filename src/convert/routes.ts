import { Router } from 'express';
import Container from 'typedi';
import { validateSchema } from '../lib/helpers/joi';
import { ConvertController } from './controller';
import { createSchema, findSchema } from './schema';
let router = Router();

/**
 * Find Conversions Route
 */
router.get('/', (req, res, next) => {
  try {
    const value = validateSchema(findSchema(), req.query);
    const ctrl = Container.get(ConvertController);
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
    const value = validateSchema(createSchema(), req.body);
    const ctrl = Container.get(ConvertController);
    const result = await ctrl.convert(value.from, value.to, value.amount);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
