'use strict';

/**
 * robot service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::robot.robot');
