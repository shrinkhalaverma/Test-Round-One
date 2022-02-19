var express = require('express')
var conn = require("../server/db_connection")
var connection = conn.getConnection()
connection.connect()
var router = express.Router()
router.post("/",(req,res)=>{
    var id = req.body.id
    var first_round = req.body.first
    var second_round = req.body.second
    var third_round = req.body.third
    console.log(first_round, second_round, third_round)
    var query = `INSERT INTO test_scores (candidate_id, first_round, second_round, third_round) VALUES (${id},${first_round},${second_round},${third_round})`
    console.log(query)
    connection.query(query,(err,result)=>{
        if(err)
            res.json({'insert':'error'})
        else
            res.json({'insert':'success'})
    })
})
//export router
module.exports = router