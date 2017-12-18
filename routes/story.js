var story= require("../controllers/story");
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var router = express.Router();

router.post('/getInsightDetails',story.getInsightDetails);
router.post('/initPersonetics', story.initPersonetics);
router.post('/getInsights', story.getInsights);

module.exports=router;


