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
            let { id, name, email, phone, ward, schools } = user;
            return { id, name, email, phone, ward, schools };
        });
    },

    profile: {
        find: async ctx => {
            const { id, name, email, phone, schools, ward } = ctx.user;
            ctx.body = { id, name, email, phone, schools, ward };
        },

        update: async ctx => {
            let { name, email, phone } = ctx.data;
            await user.update({ id }, { name, email, phone });

            ctx.status =  200;
        },
    },

    school: {
        create: async ctx => {
            let { id } = ctx.user;
            let { schoolID } = ctx.body;
            
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
            let { schoolID } = ctx.request.body;

            let school = await School.findById(ctx.params.id).exec();
            if (!school) ctx.throw(404);

            await User.update({ id: ctx.user.id }, { $pull: { schools: { "_id": ctx.params.id } } });
            return 200;
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