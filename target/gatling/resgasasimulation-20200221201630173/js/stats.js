var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "6",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14494",
        "ok": "14494",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5991",
        "ok": "5991",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "6004",
        "ok": "6004",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4938",
        "ok": "4938",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10935",
        "ok": "10935",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13717",
        "ok": "13717",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14339",
        "ok": "14339",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 50
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.143",
        "ok": "0.143",
        "ko": "-"
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "percentiles2": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "percentiles3": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "percentiles4": {
        "total": "292",
        "ok": "292",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
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
        "total": "0.024",
        "ok": "0.024",
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
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "14494",
        "ok": "14494",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7131",
        "ok": "7131",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5955",
        "ok": "5955",
        "ko": "-"
    },
    "percentiles1": {
        "total": "9583",
        "ok": "9583",
        "ko": "-"
    },
    "percentiles2": {
        "total": "11385",
        "ok": "11385",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13872",
        "ok": "13872",
        "ko": "-"
    },
    "percentiles4": {
        "total": "14370",
        "ok": "14370",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 40
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 3,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.119",
        "ok": "0.119",
        "ko": "-"
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
