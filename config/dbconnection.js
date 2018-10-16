var mysql = require('mysql');
var connMysql = () => {
    return mysql.createConnection({
        host : 'localhost',
        port: 3306,
        user: 'root',
        password : '',
        database: 'portal_noticias'
    });
};
module.exports = () => {    
    return connMysql;
}