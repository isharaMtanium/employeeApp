const winston = require("winston");

const logger = new winston.createLogger({
  level: "info",
  exitOnError: false,
  transports: [
    new winston.transports.Console({
      prettyPrint: true,
      colorize: true,
    }),
  ],
});

module.exports = {
  logger: logger,
};
