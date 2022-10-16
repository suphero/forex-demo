import Joi from 'joi';

/**
 * Find Schema
 * @returns Joi Schema
 */
export function findSchema() {
  const id = Joi.string().required();
  const date = Joi.date().required();
  const limit = Joi.number().default(10);
  const offset = Joi.number().default(0);

  const withIdSchema = Joi.object().keys({ id, limit, offset });
  const withDateSchema = Joi.object().keys({ date, limit, offset });
  const withIdDateSchema = Joi.object().keys({ id, date, limit, offset });
  return Joi.alternatives(withIdSchema, withDateSchema, withIdDateSchema)//.messages({ "number.min": "Either Id or Date is required" });
}

/**
 * Create Schema
 * @returns Joi Schema
 */
export function createSchema() {
  return Joi.object().keys({
    from: Joi.string().required(),
    to: Joi.string().required(),
    amount: Joi.number().required()
  });
}
