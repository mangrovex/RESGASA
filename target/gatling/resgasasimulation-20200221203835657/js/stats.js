var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1640",
        "ok": "587",
        "ko": "1053"
    },
    "minResponseTime": {
        "total": "67",
        "ok": "67",
        "ko": "118"
    },
    "maxResponseTime": {
        "total": "60060",
        "ok": "59834",
        "ko": "60060"
    },
    "meanResponseTime": {
        "total": "42515",
        "ok": "23512",
        "ko": "53109"
    },
    "standardDeviation": {
        "total": "21940",
        "ok": "19295",
        "ko": "15120"
    },
    "percentiles1": {
        "total": "58371",
        "ok": "25067",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "39537",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55368",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "58677",
        "ko": "60028"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 180,
    "percentage": 11
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 400,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "count": 1053,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.832",
        "ok": "0.298",
        "ko": "0.534"
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
        "total": "40",
        "ok": "40",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "180",
        "ok": "180",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "433",
        "ok": "433",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "363",
        "ok": "363",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles1": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles2": {
        "total": "413",
        "ok": "413",
        "ko": "-"
    },
    "percentiles3": {
        "total": "425",
        "ok": "425",
        "ko": "-"
    },
    "percentiles4": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 40,
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
        "total": "0.02",
        "ok": "0.02",
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
        "total": "1600",
        "ok": "547",
        "ko": "1053"
    },
    "minResponseTime": {
        "total": "67",
        "ok": "67",
        "ko": "118"
    },
    "maxResponseTime": {
        "total": "60060",
        "ok": "59834",
        "ko": "60060"
    },
    "meanResponseTime": {
        "total": "43569",
        "ok": "25205",
        "ko": "53109"
    },
    "standardDeviation": {
        "total": "21163",
        "ok": "18907",
        "ko": "15120"
    },
    "percentiles1": {
        "total": "59992",
        "ok": "26941",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "40488",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "55578",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60003",
        "ok": "58737",
        "ko": "60028"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 140,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 7,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 400,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "count": 1053,
    "percentage": 66
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.812",
        "ok": "0.278",
        "ko": "0.534"
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
