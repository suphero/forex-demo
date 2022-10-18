import Joi from 'joi';
import { InvalidInputError } from './errors';

export function validateSchema(schema: Joi.Schema, input: any) {
  const validationResult = schema.validate(input);
  const { value, error } = validationResult;
  if (error) {
    throw new InvalidInputError(error.message);
  }
  return value;
}
