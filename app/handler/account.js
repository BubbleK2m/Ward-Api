const User = require('../model/user');
const jwt = require('../../lib/jwt');

module.exports = {
    login: async ctx => {
        let { id, pw } = ctx.request.body;
        
        let user = await User.findOne({ id, pw }).exec(); 
        if (!user) ctx.throw(401);

        let accessToken = await jwt.encode({ id: user["_id"] }, { expiresIn: '7d' });
        ctx.body =  { accessToken };
    },

    register: async ctx => {
        let { id, pw, name, phone, email, ward, schools } = ctx.request.body;
        let user = new User({ id, pw, name, phone, email, ward, schools });

        await user.save();
        ctx.status = 201;
    }
}