var errors = require("../modules/errors");

function getInsightDetails(req, res) {
    try {
        res.send("getInsightDetails");
    }
    catch (err) {
        res.status(err.errorCode || 500).send(err);
    }
}
function initPersonetics(req, res) {
    try {
        res.send("initPersonetics");
    }
    catch (err) {
        res.status(err.errorCode || 500).send(err);
    }
}
function getInsights(req, res) {
    try {
        var user=req.body;
        var insights=[];
        var sum=0;
        user.activity.forEach(function(activity){
            if(activity.date=="01/01/2017")
                sum+=activity.ammount;
        })
        insights.push( {
            "id":"16052c32-574b-4a15-882e-0286e4d64fe0",
            "generatedDate":"04/20/2017 12:52 AM",
            "useCaseId":"NotifyGovernmentDeposit_UC1",
            "insightId":"NotifyGovernmentDeposit",
            "presentedDate":"04/20/2017 12:52 AM",
            "teaserBlocks":[
                {
                    "blockId":"date",
                    "type":"date-box",
                    "date":"2017-04-20"
                },
                {
                    "blockId":"title",
                    "type":"txt",
                    "text":"הפקדה מהרשויות"
                },
                {
                    "blockId":"teaser-text",
                    "type":"txt",
                    "text":"הופקדו בחשבונך <span class='perso-amount' role='text' aria-label='₪2,014.00'><span class='perso-minus-sign'></span><span class='perso-currency'>₪</span><span class='perso-int-num'>2,014</span><span class='perso-decimals-dot'>.</span><span class='perso-decimals'>00</span></span> מהרשויות"
                },
                {
                    "series":[
                        [
                            {
                                "label":"<tspan class='perso-amount' role='text' aria-label='₪17,656.72'><tspan class='perso-minus-sign'></tspan><tspan class='perso-currency'>₪</tspan><tspan class='perso-int-num'>17,656</tspan><tspan class='perso-decimals-dot'>.</tspan><tspan class='perso-decimals'>72</tspan></tspan>",
                                "value":17656.72
                            },
                            {
                                "label":"<tspan class='perso-amount' role='text' aria-label='₪2,014.00'><tspan class='perso-minus-sign'></tspan><tspan class='perso-currency'>₪</tspan><tspan class='perso-int-num'>2,014</tspan><tspan class='perso-decimals-dot'>.</tspan><tspan class='perso-decimals'>00</tspan></tspan>",
                                "value":2014
                            },
                            {
                                "label":"<tspan class='perso-amount' role='text' aria-label='₪15,680.71'><tspan class='perso-minus-sign'></tspan><tspan class='perso-currency'>₪</tspan><tspan class='perso-int-num'>15,680</tspan><tspan class='perso-decimals-dot'>.</tspan><tspan class='perso-decimals'>71</tspan></tspan>",
                                "value":15680.71
                            },
                            {
                                "label":"<tspan class='perso-amount' role='text' aria-label='₪2,014.00'><tspan class='perso-minus-sign'></tspan><tspan class='perso-currency'>₪</tspan><tspan class='perso-int-num'>2,014</tspan><tspan class='perso-decimals-dot'>.</tspan><tspan class='perso-decimals'>00</tspan></tspan>",
                                "value":2014
                            }
                        ]
                    ],
                    "blockId":"chart",
                    "seriesLabels":[
                        ""
                    ],
                    "categories":[
                        "27 פבר",
                        "27 מרץ",
                        "30 מרץ",
                        "20 אפר"
                    ],
                    "class":"teaser-body",
                    "type":"pin-chart",
                    "direction":"vertical"
                }
            ],
            "category2":"",
            "insightType":"STORY",
            "type":"inform",
            "category3":"",
            "text":"{{Amount confirmedTransaction.amount.positiveAmountAsObject format='###,###,###.00'}} הופקדו בחשבונתך מהרשויות",
            "displayDate":"Today",
            "selectedDate":"",
            "highlighted":false,
            "teaserTemplate":"pinChart",
            "score":13,
            "status":"unread",
            "category1":""
        });
        res.send(insights);
    }
    catch (err) {
        res.status(err.errorCode || 500).send(err);
    }
}


module.exports = {
    getInsightDetails: getInsightDetails,
    initPersonetics:initPersonetics,
    getInsights:getInsights
}




