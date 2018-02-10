let School = require('../model/school');
let User = require('../model/user');

module.exports = { 
    find: async ctx => {
        if (!ctx.user) ctx.throw(401);

        let schools;
        
        if (ctx.request.query.name) {
            schools = await School.find({ $where: `this.name.includes("${ctx.request.query.name}")` }).exec();
        } else {
            schools = await School.find().exec();
        }

        ctx.body = schools;
    },
    
    user: {
        find: async ctx => {
            let { id } = ctx.params;

            let school = await School.findById(id).exec();
            if (!school) ctx.throw(404);

            let users = await User.find({ schools: { $element_at: { id } } }).exec();
            ctx.body = users;
        }
    }
}