const { query } = require('express')
var express = require('express')
var conn = require("../server/db_connection")
var connection = conn.getConnection()
connection.connect()
var router = express.Router()
router.get("/",(req,res)=>{
    query1 = `select candidate_id, ifnull(first_round, 0) + ifnull(second_round, 0) + ifnull(third_round, 0) as score from test_scores ORDER BY score desc limit 1`
    connection.query(query1,(err,recordsArray,fields)=>{
        if(err)
            res.json({'message':'error'})
        else

            res.json(recordsArray)
    })
})
module.exports = router ;