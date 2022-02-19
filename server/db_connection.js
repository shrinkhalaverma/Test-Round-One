var mysql = require("mysql")

var prop = require("../config/db_properties")
module.exports = {
    getConnection : function(){
        return mysql.createConnection(prop)
    }
}