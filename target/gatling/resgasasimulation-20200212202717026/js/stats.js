var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "19",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "31235",
        "ok": "31235",
        "ko": "85"
    },
    "meanResponseTime": {
        "total": "9881",
        "ok": "10397",
        "ko": "85"
    },
    "standardDeviation": {
        "total": "9406",
        "ok": "9371",
        "ko": "0"
    },
    "percentiles1": {
        "total": "12199",
        "ok": "12426",
        "ko": "85"
    },
    "percentiles2": {
        "total": "14665",
        "ok": "14697",
        "ko": "85"
    },
    "percentiles3": {
        "total": "28759",
        "ok": "28890",
        "ko": "85"
    },
    "percentiles4": {
        "total": "30740",
        "ok": "30766",
        "ko": "85"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 7,
    "percentage": 35
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 5
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.253",
        "ok": "0.241",
        "ko": "0.013"
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
        "total": "4",
        "ok": "4",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "percentiles2": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "percentiles3": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "percentiles4": {
        "total": "128",
        "ok": "128",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
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
        "total": "0.051",
        "ok": "0.051",
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
        "total": "16",
        "ok": "15",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "65",
        "ok": "65",
        "ko": "85"
    },
    "maxResponseTime": {
        "total": "31235",
        "ok": "31235",
        "ko": "85"
    },
    "meanResponseTime": {
        "total": "12320",
        "ok": "13135",
        "ko": "85"
    },
    "standardDeviation": {
        "total": "8992",
        "ok": "8695",
        "ko": "0"
    },
    "percentiles1": {
        "total": "12947",
        "ok": "13088",
        "ko": "85"
    },
    "percentiles2": {
        "total": "14929",
        "ok": "15096",
        "ko": "85"
    },
    "percentiles3": {
        "total": "29281",
        "ok": "29411",
        "ko": "85"
    },
    "percentiles4": {
        "total": "30844",
        "ok": "30870",
        "ko": "85"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 3,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 12,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 6
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.203",
        "ok": "0.19",
        "ko": "0.013"
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
