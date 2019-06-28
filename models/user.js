const orm = require("../config/orm.js");

let users = {
    select: cb => {
        let query = {
            columns: [
                'user_id',
                'first_name',
                'last_name',
                'email_address',
                'alias',
                'session_token',
                'created',
                'updated'],
            table: 'users',
        };
        orm.select(query, cb);
    },
    selectJoin: (cb) => {
        let queryString = `SELECT * FROM users 
                            JOIN messages
                                ON messages.user_id = users.user_id WHERE users.user_id = ? `;
        let queryArray = 1;//[user.user_id]; //has to be a primitive value
        orm.query(queryString, queryArray, function (error, data) {
            console.log(data);
        });
    },
    selectWhere: (where, cb) => {
        let query = {
            columns: [
                'user_id',
                'first_name',
                'last_name',
                'email_address',
                'alias',
                'session_token',
                'created',
                'updated'],
            table: 'users',
            where: [where]
        };
        orm.select(query, cb);
    },
    createUser: (userObj, cb) => {
        let query = {
            table: 'users',
            data: userObj //ensure the keys of the object match the table columns
        };
        orm.insert(query, cb);
    },
    deleteUser: (user_id, cb) => {
        let query = {
            table: 'users',
            where: [{ user_id: user_id }]
        };
        orm.delete(query, cb);
    },

    selectByEmail: (email, cb) => {
        let query = {
            table: 'users',
            where: [{ email_address: email.toLowerCase() }]
        };

        orm.select(query, cb);
    },
    updateSession: (email, uuid, cb) => {
        let query = {
            table: 'users',
            data: { session_token: uuid },
            where: [{ email_address: email.toLowerCase() }]
        };

        orm.update(query, cb);
    },
    update: (where, cb) => {
        let query = {
            table: 'users',
            data: { session_token: null },
            where: [{ where }]
        };

        orm.update(query, cb);
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = users;