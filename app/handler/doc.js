const path = require('path');
const send = require('koa-send');

module.exports = {
    swagger: async ctx => {
        await send(ctx, 'app/doc/swagger.json');
    }
};