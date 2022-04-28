'use strict';

/**
 *  robot controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::robot.robot');
