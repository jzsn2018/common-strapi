/*
 * @Date: 2023-03-26 23:17:30
 * @LastEditors: Timothy
 * @LastEditTime: 2023-03-27 00:00:41
 * @Description: 
 */
'use strict';

/**
 * product service
 */

const {
  createCoreService
} = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product.product');
