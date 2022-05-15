'use strict';

/**
 * master-page service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::master-page.master-page');
