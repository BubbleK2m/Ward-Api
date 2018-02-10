const Router = require('koa-router');
const Account = require('../handler/account');

const account = new Router();
account.post('/login', Account.login);
account.post('/register', Account.register);

module.exports = account;