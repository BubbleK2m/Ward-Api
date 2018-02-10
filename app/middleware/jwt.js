const jwt = require('../../lib/jwt');

const User = require('../model/user');

module.exports = () => {
    return async (ctx, next) => {
        ctx.jwt = ctx.request.headers["x-access-token"];
        
        if (!ctx.jwt) return ctx.throw(400, "Cannot Found JWT");

        ctx.auth = await jwt.decode(ctx.jwt);
        ctx.user = await User.findById(ctx.auth.id).exec();
        
        if (!ctx.user) return ctx.throw(401, "Unautorized User");

        return next();
    }
};