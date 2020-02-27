var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "110",
        "ok": "107",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "71",
        "ok": "71",
        "ko": "11201"
    },
    "maxResponseTime": {
        "total": "51605",
        "ok": "51605",
        "ko": "14782"
    },
    "meanResponseTime": {
        "total": "10344",
        "ok": "10264",
        "ko": "13205"
    },
    "standardDeviation": {
        "total": "9098",
        "ok": "9209",
        "ko": "1493"
    },
    "percentiles1": {
        "total": "10775",
        "ok": "10609",
        "ko": "13631"
    },
    "percentiles2": {
        "total": "14771",
        "ok": "14798",
        "ko": "14207"
    },
    "percentiles3": {
        "total": "26956",
        "ok": "26968",
        "ko": "14667"
    },
    "percentiles4": {
        "total": "33829",
        "ok": "33955",
        "ko": "14759"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 33,
    "percentage": 30
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 74,
    "percentage": 67
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.803",
        "ok": "0.781",
        "ko": "0.022"
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
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "430",
        "ok": "430",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles1": {
        "total": "218",
        "ok": "218",
        "ko": "-"
    },
    "percentiles2": {
        "total": "264",
        "ok": "264",
        "ko": "-"
    },
    "percentiles3": {
        "total": "428",
        "ok": "428",
        "ko": "-"
    },
    "percentiles4": {
        "total": "430",
        "ok": "430",
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
        "total": "0.073",
        "ok": "0.073",
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
        "ok": "97",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "71",
        "ok": "71",
        "ko": "11201"
    },
    "maxResponseTime": {
        "total": "51605",
        "ok": "51605",
        "ko": "14782"
    },
    "meanResponseTime": {
        "total": "11353",
        "ok": "11296",
        "ko": "13205"
    },
    "standardDeviation": {
        "total": "8937",
        "ok": "9064",
        "ko": "1493"
    },
    "percentiles1": {
        "total": "11212",
        "ok": "11024",
        "ko": "13631"
    },
    "percentiles2": {
        "total": "14887",
        "ok": "14906",
        "ko": "14207"
    },
    "percentiles3": {
        "total": "27121",
        "ok": "27505",
        "ko": "14667"
    },
    "percentiles4": {
        "total": "34380",
        "ok": "34902",
        "ko": "14759"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 23,
    "percentage": 23
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 74,
    "percentage": 74
},
    "group4": {
    "name": "failed",
    "count": 3,
    "percentage": 3
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.73",
        "ok": "0.708",
        "ko": "0.022"
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
