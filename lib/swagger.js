const swagger = require('swagger-injector');

module.exports = () => {
    return swagger.koa({
        path: '../app/doc/spec.json'
    });
};