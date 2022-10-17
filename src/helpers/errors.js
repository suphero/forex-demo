import { StatusCodes } from 'http-status-codes';

/**
 * Base Error class
 */
class BaseError extends Error {
  /**
   * Constructor
   * @param {string} name Name
   * @param {number} statusCode HTTP Status Code
   * @param {string} description Description
   */
  constructor(name, statusCode, description) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}

/**
 * Invalid Input Error
 */
class InvalidInputError extends BaseError {
  /**
   * Constructor
   * @param {string} description Description
   */
  constructor(description) {
    super('Invalid Input', StatusCodes.BAD_REQUEST, description);
  }
}

/**
 * External API Error
 */
class ExternalApiError extends BaseError {
  /**
   * Constructor
   * @param {string} description Description
   */
  constructor(description) {
    super('External API Error', StatusCodes.FAILED_DEPENDENCY, description);
  }
}

/**
 * Not Implemented Error
 */
class NotImplementedError extends BaseError {
  /**
   * Constructor
   * @param {string} description Description
   */
  constructor(description) {
    super('Not Implemented', StatusCodes.NOT_IMPLEMENTED, description);
  }
}

/**
 * Missing Configuration Error
 */
class MissingConfigurationError extends BaseError {
  /**
   * Constructor
   * @param {string} description Description
   */
  constructor(description) {
    super(
      'Missing Configuration',
      StatusCodes.INSUFFICIENT_STORAGE,
      description
    );
  }
}

export {
  BaseError,
  InvalidInputError,
  ExternalApiError,
  NotImplementedError,
  MissingConfigurationError,
};
