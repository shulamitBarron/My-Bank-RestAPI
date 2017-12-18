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
        res.send("getInsights");
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




