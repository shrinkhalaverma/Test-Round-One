var express = require('express')
var conn = require("../server/db_connection")
var connection = conn.getConnection()
connection.connect()
var router = express.Router()
router.get("/",(req,res)=>{
    query1 = `SELECT candidate_id, avg(first_round) AS avg_first, avg(second_round) AS avg_second, avg(third_round) AS avg_third FROM test_scores GROUP BY candidate_id  ORDER BY avg_first DESC`
    connection.query(query1,(err,recordsArray,fields)=>{
        if(err)
            res.json({'message':'error'})
        else{
            res.json(recordsArray)
        }
        
    })
})
module.exports = router ;