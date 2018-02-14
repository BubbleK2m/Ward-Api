const swagger = require('koa2-swagger-ui');

module.exports = () => {
    return swagger({
        routePrefix: '/doc',
        swaggerOptions: {
            url: `https://localhost${`:${process.env.PORT}` || ""}/doc/spec`
        },
    });
};