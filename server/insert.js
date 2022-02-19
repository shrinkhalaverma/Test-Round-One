var express = require('express')
var conn = require("../server/db_connection")
var connection = conn.getConnection()
connection.connect()
var router = express.Router()
router.post("/",(req,res)=>{
    console.log('Aaaa')
    var name = req.body.name
    var email = req.body.email
    console.log(name,email)
    var query = `insert into candidates (name, email) values ('${name}', '${email}')`
    connection.query(query,(err,result)=>{
        if(err)
            res.json({'insert':'error'})
        else
            res.json({'insert':'success'})
    })
})
//export router
module.exports = router