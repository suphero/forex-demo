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
  constructor(name: string, statusCode: number, description?: string) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
  statusCode: number;
}

/**
 * Invalid Input Error
 */
class InvalidInputError extends BaseError {
  /**
   * Constructor
   * @param {string} description Description
   */
  constructor(description?: string) {
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
  constructor(description?: string) {
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
  constructor(description?: string) {
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
  constructor(description?: string) {
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
