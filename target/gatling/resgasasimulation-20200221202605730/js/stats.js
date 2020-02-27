var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "420",
        "ok": "368",
        "ko": "52"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "129"
    },
    "maxResponseTime": {
        "total": "60000",
        "ok": "56031",
        "ko": "60000"
    },
    "meanResponseTime": {
        "total": "20251",
        "ok": "19681",
        "ko": "24287"
    },
    "standardDeviation": {
        "total": "11980",
        "ok": "11396",
        "ko": "14885"
    },
    "percentiles1": {
        "total": "18111",
        "ok": "17494",
        "ko": "21334"
    },
    "percentiles2": {
        "total": "27431",
        "ok": "26693",
        "ko": "32136"
    },
    "percentiles3": {
        "total": "40846",
        "ok": "40085",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "55810",
        "ok": "47655",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 35,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 331,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 52,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.864",
        "ok": "0.757",
        "ko": "0.107"
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
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "154",
        "ok": "154",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "407",
        "ok": "407",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "percentiles1": {
        "total": "385",
        "ok": "385",
        "ko": "-"
    },
    "percentiles2": {
        "total": "401",
        "ok": "401",
        "ko": "-"
    },
    "percentiles3": {
        "total": "404",
        "ok": "404",
        "ko": "-"
    },
    "percentiles4": {
        "total": "406",
        "ok": "406",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
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
        "total": "0.041",
        "ok": "0.041",
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
        "total": "400",
        "ok": "348",
        "ko": "52"
    },
    "minResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "129"
    },
    "maxResponseTime": {
        "total": "60000",
        "ok": "56031",
        "ko": "60000"
    },
    "meanResponseTime": {
        "total": "21249",
        "ok": "20795",
        "ko": "24287"
    },
    "standardDeviation": {
        "total": "11394",
        "ok": "10701",
        "ko": "14885"
    },
    "percentiles1": {
        "total": "19080",
        "ok": "18454",
        "ko": "21334"
    },
    "percentiles2": {
        "total": "27924",
        "ok": "27488",
        "ko": "32136"
    },
    "percentiles3": {
        "total": "40994",
        "ok": "40552",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "56071",
        "ok": "48153",
        "ko": "60000"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 15,
    "percentage": 4
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 2,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 331,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 52,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.823",
        "ok": "0.716",
        "ko": "0.107"
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
