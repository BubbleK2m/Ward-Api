let School = require('../model/school');
let User = require('../model/user');

module.exports = { 
    find: async ctx => {
        if (!ctx.user) ctx.throw(401);

        let schools;
        
        if (ctx.query.name) {
            schools = await School.find({ 'name': { $regex: new RegExp(`${ctx.query.name}`), $options: 'i' } }).exec();
        } else {
            schools = await School.find().exec();
        }

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