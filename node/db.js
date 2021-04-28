module.exports = (async() => {
    const mysql = require('mysql2/promise');

    const connection = await mysql.createConnection({
        host: 'fc-docker-c2-mysql',
        user: 'root',
        password: 'root',
        database: 'fullcycle',
        charset: 'utf8'
    });

    return {
        connection
    };
})();