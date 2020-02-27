var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "110",
        "ok": "94",
        "ko": "16"
    },
    "minResponseTime": {
        "total": "54",
        "ok": "54",
        "ko": "435"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "55143",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "25829",
        "ok": "21041",
        "ko": "53960"
    },
    "standardDeviation": {
        "total": "17755",
        "ok": "13049",
        "ko": "15522"
    },
    "percentiles1": {
        "total": "22424",
        "ok": "19287",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "34356",
        "ok": "29690",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "46048",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "50289",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 14
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 79,
    "percentage": 72
},
    "group4": {
    "name": "failed",
    "count": 16,
    "percentage": 15
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.345",
        "ok": "0.295",
        "ko": "0.05"
    }
},
contents: {
"req_resgasatoken-33757": {
        type: "REQUEST",
        name: "ResgasaToken",
path: "ResgasaToken",
pathFormatted: "req_resgasatoken-33757",
stats: {
    "name": "ResgasaToken",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "313",
        "ok": "313",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "483",
        "ok": "483",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "356",
        "ok": "356",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "62",
        "ok": "62",
        "ko": "-"
    },
    "percentiles1": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "percentiles2": {
        "total": "328",
        "ok": "328",
        "ko": "-"
    },
    "percentiles3": {
        "total": "480",
        "ok": "480",
        "ko": "-"
    },
    "percentiles4": {
        "total": "482",
        "ok": "482",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.031",
        "ok": "0.031",
        "ko": "-"
    }
}
    },"req_pedido-8c36d": {
        type: "REQUEST",
        name: "Pedido",
path: "Pedido",
pathFormatted: "req_pedido-8c36d",
stats: {
    "name": "Pedido",
    "numberOfRequests": {
        "total": "100",
        "ok": "84",
        "ko": "16"
    },
    "minResponseTime": {
        "total": "54",
        "ok": "54",
        "ko": "435"
    },
    "maxResponseTime": {
        "total": "60002",
        "ok": "55143",
        "ko": "60002"
    },
    "meanResponseTime": {
        "total": "28376",
        "ok": "23503",
        "ko": "53960"
    },
    "standardDeviation": {
        "total": "16595",
        "ok": "11557",
        "ko": "15522"
    },
    "percentiles1": {
        "total": "25228",
        "ok": "21822",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "35495",
        "ok": "29975",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "46080",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60002",
        "ok": "50811",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 79,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 16,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.313",
        "ok": "0.263",
        "ko": "0.05"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
