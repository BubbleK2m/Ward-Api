const Router = require('koa-router');
const Doc = require('../handler/doc');

const doc = new Router();
doc.get('/doc/swagger', Doc.swagger.find);

module.exports = doc;