'use strict';

/**
 * product controller
 */

const {
  createCoreController
} = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product', ({
  strapi
}) => ({
  async findAll(ctx) {
    const entries = await strapi.db.query("api::product.product").findMany();

    ctx.body = entries;
  },
}));
