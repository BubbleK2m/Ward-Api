const Router = require('koa-router');
const User = require('../handler/user');

const jwt = require('../middleware/jwt');
const user = new Router();

user.use(jwt());

user.get('/user', User.find);
user.get('/user/profile', User.profile.find);
user.put('/user/profile', User.profile.update);
user.put('/user/ward', User.ward.update);
user.get('/user/school', User.school.find);
user.post('/user/school', User.school.create);
user.delete('/user/school', User.school.remove);

module.exports = user;