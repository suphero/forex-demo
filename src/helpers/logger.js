import { createLogger, config, transports as _transports } from 'winston';

/**
 * Logger Options
 */
const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

/**
 * Create Logger
 */
const logger = createLogger({
  levels: config.npm.levels,
  transports: [new _transports.Console(options.console)],
  exitOnError: false,
});

export default logger;
