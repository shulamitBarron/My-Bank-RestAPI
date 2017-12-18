var teaser= require("../controllers/teaser");
var express = require('express');
var app = express();
var router = express.Router();

router.post('/getInsightDetails',teaser.getInsightDetails);
router.post('/initPersonetics', teaser.initPersonetics);
router.post('/getInsights', teaser.getInsights);

module.exports=router;


