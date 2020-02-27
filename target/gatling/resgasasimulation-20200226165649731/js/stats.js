var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "2282"
    },
    "maxResponseTime": {
        "total": "2282",
        "ok": "41",
        "ko": "2282"
    },
    "meanResponseTime": {
        "total": "1162",
        "ok": "41",
        "ko": "2282"
    },
    "standardDeviation": {
        "total": "1121",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1162",
        "ok": "41",
        "ko": "2282"
    },
    "percentiles2": {
        "total": "1722",
        "ok": "41",
        "ko": "2282"
    },
    "percentiles3": {
        "total": "2170",
        "ok": "41",
        "ko": "2282"
    },
    "percentiles4": {
        "total": "2260",
        "ok": "41",
        "ko": "2282"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 50
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
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.25",
        "ko": "0.25"
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
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles2": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles3": {
        "total": "41",
        "ok": "41",
        "ko": "-"
    },
    "percentiles4": {
        "total": "41",
        "ok": "41",
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
        "total": "0.25",
        "ok": "0.25",
        "ko": "-"
    }
}
    },"req_factura-fbaa6": {
        type: "REQUEST",
        name: "Factura",
path: "Factura",
pathFormatted: "req_factura-fbaa6",
stats: {
    "name": "Factura",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "2282",
        "ok": "-",
        "ko": "2282"
    },
    "maxResponseTime": {
        "total": "2282",
        "ok": "-",
        "ko": "2282"
    },
    "meanResponseTime": {
        "total": "2282",
        "ok": "-",
        "ko": "2282"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "2282",
        "ok": "-",
        "ko": "2282"
    },
    "percentiles2": {
        "total": "2282",
        "ok": "-",
        "ko": "2282"
    },
    "percentiles3": {
        "total": "2282",
        "ok": "-",
        "ko": "2282"
    },
    "percentiles4": {
        "total": "2282",
        "ok": "-",
        "ko": "2282"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.25",
        "ok": "-",
        "ko": "0.25"
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
