let School = require('../model/school');
let User = require('../model/user');

module.exports = { 
    find: async ctx => {
        if (!ctx.user) ctx.throw(401);

        const schools = ctx.query.name
        ? await School.find({ 'name': { $regex: `${ctx.query.name}`, $options: 'i' } }).exec() 
        : await School.find().exec()

        ctx.body = schools;
    },
    
    user: {
        find: async ctx => {
            let { schoolID } = ctx.query;

            let school = await School.findById(schoolID).exec();
            if (!school) ctx.throw(404);

            let users = await User.find({ schools: { $element_at: { id: schoolID } } }).exec();
            ctx.body = users;
        }
    }
}