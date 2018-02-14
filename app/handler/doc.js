const spec = require('../doc/spec');

module.exports = {
    spec: {
        find: ctx => {
            ctx.body = spec;
        }
    }
}