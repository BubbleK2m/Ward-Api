const Router = require('koa-router');
const Doc = require('../handler/doc');

const doc = new Router();
doc.get('/swagger', Doc.swagger);

module.exports = doc;