/*
 * @Date: 2023-03-27 00:11:53
 * @LastEditors: Timothy
 * @LastEditTime: 2023-03-27 00:22:49
 * @Description: 
 */
module.exports = {
  routes: [{ // Path defined with a regular expression
    method: 'GET',
    prefix: 'xt',
    path: '/cdsh5/product', // Only match when the URL parameter is composed of lowercase letters
    handler: 'product.findAll',
  }]
}
