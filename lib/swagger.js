const swagger = require('koa2-swagger-ui');

module.exports = () => {
    return swagger({
        routePrefix: '/doc',
        swaggerOptions: {
            url: `https://ward-api.herokuapp.com/doc/swagger`
        },
    });
};