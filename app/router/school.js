const Router = require('koa-router');
const School = require('../handler/school');

const jwt = require('../middleware/jwt');
const school = new Router();

school.use(jwt());

school.get('/school', School.find);
school.get('/school/user', School.user.find);

module.exports = school;