import Joi from 'joi';

/**
 * Find Schema
 * @returns Joi Schema
 */
export function findSchema() {
  return Joi.object()
    .keys({
      id: Joi.string().min(1),
      date: Joi.string().min(1),
      limit: Joi.number().default(10),
      offset: Joi.number().default(0),
    })
    .or('id', 'date');
}

/**
 * Create Schema
 * @returns Joi Schema
 */
export function createSchema() {
  return Joi.object().keys({
    from: Joi.string().required(),
    to: Joi.string().required(),
    amount: Joi.number().required(),
  });
}
