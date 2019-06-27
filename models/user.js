const orm = require("../config/orm.js");

let users = {
    // select: function (cb) {
    //     orm.select(['todo_id', 'todo_name', 'todo_complete'], 'users', function (res) {
    //         cb(res);
    //     });
    // },
    
    selectUser: function (cb) {
        orm.selectUser(['user_id', 'first_name', 'last_name'], 'users', function (res) {
            cb(res);
        });
    },


    select: function (cb) {
        let query = {
            columns: ['user_id', 'alias', 'first_name', 'last_name'], //will default to ['*'] (not recommended)
            table: 'users',
        };
        orm.select(query, function (error, data) {
            // console.log(data);
            cb(data);
        });
    },
    selectJoin: function (cb) {
        let queryString = `SELECT * FROM users 
                            JOIN messages
                                ON messages.user_id = users.user_id WHERE users.user_id = ? `;
        let queryArray = 1;//[user.user_id]; //has to be a primitive value
        orm.query(queryString, queryArray, function (error, data) {
            console.log(data);
        });
    },
    selectWhere: function (where, cb) {
        let query = {
            columns: ['user_id', 'alias', 'first_name', 'last_name'], //will default to ['*'] (not recommended)
            table: 'users',
            where: [where]
        };
        orm.select(query, function (error, data) {
            // console.log(data);
            cb(data);
        });
    },
    createUser: function (userObj, cb) {
        let query = {
            table: 'users',
            data: userObj //ensure the keys of the object match the table columns
        };
        orm.insert(query, function (error, data) {
            if (error) {
                console.log(error.code +' - ' +error.sqlMessage);
            }
            cb(data);
        });
    },
    deleteUser: function (user_id, cb) {
        let query = {
            table: 'users',
            where: [{ user_id: user_id }]
        };
        orm.delete(query, function (error, data) {
            cb(data);
        });
    },

    login: function (cb) {
        orm.login("users", function (res) {
            cb(res);
        });
    },

};

// Export the database functions for the controller (catsController.js).
module.exports = users;