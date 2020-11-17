"use strict";
const resposeUtil = require("./response-util");
const { logger } = require("./common-util");
const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

exports.syncData = async (event) => {
  logger.info("Inside sync data function");
};
