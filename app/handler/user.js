const User = require('../model/user');
const School = require('../model/school');

module.exports = {
    find: async ctx => {
        let users;

        if (ctx.request.query.name) {
            users = await User.find({ 'name': { $regex: new RegExp(`${ctx.query.name}`), $options: 'i' } }).exec();
        } else {
            users = await User.find().exec();
        }

        ctx.body = users.map(user => {
            let { id, name, ward } = user;
            return { id, name, ward };
        });
    },

    findOne: async ctx => {
        let { id } = ctx.params;
        let user = await User.findOne({ id }).exec();

        if (!user) ctx.throw(404);
        
        delete user['pw'];
        delete user['_id'];

        ctx.body = user;
    },

    profile: {
        find: async ctx => {
            delete ctx.user['_id'];
            delete ctx.user['pw'];

            ctx.body = ctx.user;
        },

        update: async ctx => {
            let { name, phone, birthday } = ctx.body;
            await user.update({ id }, { name, phone, birthday });

            ctx.status =  200;
        },
    },

    school: {
        create: async ctx => {
            let { id } = ctx.user;
            let { schoolID } = ctx.request.body;
            
            let school = await School.findById(schoolID).exec();
            if (!school) ctx.throw(404);

            await User.update({ id }, { $push: { schools: school } });
            ctx.status =  201;
        },

        find: async ctx => {
            let { schools } = ctx.user;
            ctx.body = schools;
        },

        remove: async ctx => {
            let { id } = ctx.user;
            let { schoolID } = ctx.request.body;

            let school = await School.findById(schoolID).exec();
            if (!school) ctx.throw(404);

            await User.update({ id }, { $pull: { schools: { "_id": schoolID } } });
            ctx.status = 200;
        }
    },

    ward: {
        update: async ctx => {
            let { id } = ctx.user;
            let { lat, lng } = ctx.request.body;

            await User.update({ id }, { ward: [ lat, lng ] });
            ctx.status = 200;
        }
    },
};