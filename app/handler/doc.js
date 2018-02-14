const swagger = require('../doc/swagger');

module.exports = {
    swagger: {
        find: ctx => {
            ctx.body = swagger;
        }
    }
}