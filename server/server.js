
var express = require('express')
var bodyparser = require('body-parser')
var app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
var insert = require("../server/insert")
var insertScores = require("../server/insertscores")
var fetchTop = require("./fetchtop")
var fetchAvg = require("../server/fetchavg")

app.use("/insert/candidate",insert)
app.use("/insert/score", insertScores)
app.use('/fetch/scores', fetchAvg)
app.use('/fetch/top', fetchTop)
app.listen(8080)
console.log("server listening port no 8080")
