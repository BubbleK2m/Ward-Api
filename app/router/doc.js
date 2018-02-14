const Router = require('koa-router');
const Doc = require('../handler/doc');

const doc = new Router();
doc.get('/doc/spec', Doc.spec.find);

module.exports = doc;