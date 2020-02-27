var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "5",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "4380",
        "ok": "4380",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "23708",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "20524",
        "ok": "12628",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "18566",
        "ok": "6294",
        "ko": "0"
    },
    "percentiles1": {
        "total": "12241",
        "ok": "11071",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "21134",
        "ok": "13410",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "50928",
        "ok": "21648",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "58186",
        "ok": "23296",
        "ko": "60001"
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
    "count": 5,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 17
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.047",
        "ok": "0.039",
        "ko": "0.008"
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
        "total": "4380",
        "ok": "4380",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4380",
        "ok": "4380",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4380",
        "ok": "4380",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "4380",
        "ok": "4380",
        "ko": "-"
    },
    "percentiles2": {
        "total": "4380",
        "ok": "4380",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4380",
        "ok": "4380",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4380",
        "ok": "4380",
        "ko": "-"
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
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.008",
        "ok": "0.008",
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
        "ok": "4",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "10572",
        "ok": "10572",
        "ko": "60001"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "23708",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "23752",
        "ok": "14690",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "18737",
        "ok": "5315",
        "ko": "0"
    },
    "percentiles1": {
        "total": "13410",
        "ok": "12241",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "23708",
        "ok": "15985",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "52742",
        "ok": "22163",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "58549",
        "ok": "23399",
        "ko": "60001"
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
    "count": 4,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 20
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.039",
        "ok": "0.031",
        "ko": "0.008"
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
