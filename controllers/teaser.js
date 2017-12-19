var errors = require("../modules/errors");

var monthNames = require("../modules/month").monthNames;

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
        var transactions=user.transactions;
        var sortByMonth = transformArr(transactions);
        var curDate=new Date();
        var lastMonthDate=monthNames[new Date(Math.max.apply(null, transactions.map(function(a){ return new Date(a.date);}))).getMonth()];
        var insight={
            "id":"44206da5-b2a2-45f9-9421-d2d611916d24",
            "generatedDate":curDate,
            "useCaseId":"EOMCashFlowAnalysis_UC4",
            "insightId":"EOMCashFlowAnalysis",
            "presentedDate":curDate,
            "teaserBlocks":[
                {
                    "index":0,
                    "blockId":"date",
                    "type":"date-box",
                    "date":curDate.getDate()+" "+monthNames[curDate.getMonth()]+" "+curDate.getFullYear()
                },
                {
                    "text":"סיכום פעילות חודשי בחשבונך",
                    "blockId":"title",
                    "type":"text",
                    "index":1
                },
                {
                    "text":"הנה כל הפרטים על הפעילות בחשבונך בחודש "+lastMonthDate,
                    "blockId":"teaser-text",
                    "type":"text",
                    "index":2
                },
                {
                    "series":sortByMonth.map(function(month){return [{value:month.activities.filter(function(activity){return activity.type==="income";}).map(function(activity){return +activity.amount;}).reduce(function(a, b){return a + b;}, 0)},{value:month.activities.filter(function(activity){return activity.type==="outcome";}).map(function(activity){return +activity.amount;}).reduce(function(a, b){return a + b;}, 0)}];}),
                    "blockId":"chart",
                    "seriesLabels":[
                        "In",
                        "Out"
                    ],
                    "categories":sortByMonth.map(function(month){return month.month;}),
                    "class":"teaser-body",
                    "type":"bar-chart",
                    "direction":"horizontal",
                    "index":3
                }
            ],
            "category2":"Spending",
            "insightType":"STORY",
            "type":"inform",
            "category3":"money_in",
            "text":"הנה כל הפרטים על הפעילות בחשבונך בחודש {{Date lastMonthDate format=\"MMMM\"}}",
            "displayDate":"Last Week",
            "selectedDate":curDate,
            "highlighted":true,
            "teaserTemplate":"horizontalBar",
            "score":7,
            "status":"read",
            "category1":"in_out"

        };



        insights.push( insight);
        res.send(insights);
    }
    catch (err) {
        res.status(err.errorCode || 500).send(err);
    }
}

function transformArr(orig) {
    var newArr = [],
        types = {},
        newItem, i, j, cur;
    for (i = 0, j = orig.length; i < j; i++) {
        cur = orig[i];
        var month=new Date(cur.date).getMonth();
        if (!(month in types)) {
            types[month] = {month: monthNames[month], activities: []};
            newArr.push(types[month]);
        }
        types[month].activities.push(cur);
    }
    return newArr;
}




module.exports = {
    getInsightDetails: getInsightDetails,
    initPersonetics:initPersonetics,
    getInsights:getInsights
}




