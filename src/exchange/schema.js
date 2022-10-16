import Joi from 'joi';

/**
 * Exchange Schema
 * @returns Joi Schema
 */
export function exchangeSchema() {
  return Joi.object().keys({
    base: Joi.string().required(),
    symbol: Joi.string().required(),
  });
}
