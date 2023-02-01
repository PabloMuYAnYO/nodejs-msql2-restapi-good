const mysql2 = require('mysql2')
const { HOST, USER, PASSWORD, DATABASE} = require('./config')

module.exports = () => {
    return mysql2.createConnection({
        host: HOST,
        user: USER,
        password: PASSWORD,
        database: DATABASE
    })
}
