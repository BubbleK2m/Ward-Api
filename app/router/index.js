const Router = require('koa-router');
const router = new Router();

const account = require('./account');
const doc = require('./doc');
const school = require('./school');
const user = require('./user');

router.use(account.routes());
router.use(doc.routes());
router.use(school.routes());
router.use(user.routes());

module.exports = router;