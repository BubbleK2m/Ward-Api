const swagger = require('swagger-injector');

module.exports = () => {
    return swagger.koa({
        path: '../app/doc/swagger.json'
    });
};