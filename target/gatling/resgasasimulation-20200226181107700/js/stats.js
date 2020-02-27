var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1010",
        "ok": "706",
        "ko": "304"
    },
    "minResponseTime": {
        "total": "37",
        "ok": "37",
        "ko": "4597"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "57212",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "19945",
        "ok": "15283",
        "ko": "30770"
    },
    "standardDeviation": {
        "total": "15617",
        "ok": "7964",
        "ko": "22255"
    },
    "percentiles1": {
        "total": "14451",
        "ok": "13695",
        "ko": "18670"
    },
    "percentiles2": {
        "total": "21702",
        "ok": "19044",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "30228",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "43608",
        "ko": "60002"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 696,
    "percentage": 69
},
    "group4": {
    "name": "failed",
    "count": 304,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.467",
        "ok": "0.326",
        "ko": "0.141"
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
        "total": "37",
        "ok": "37",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "235",
        "ok": "235",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles1": {
        "total": "51",
        "ok": "51",
        "ko": "-"
    },
    "percentiles2": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles3": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "percentiles4": {
        "total": "235",
        "ok": "235",
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
        "total": "0.005",
        "ok": "0.005",
        "ko": "-"
    }
}
    },"req_entrega-a6d42": {
        type: "REQUEST",
        name: "Entrega",
path: "Entrega",
pathFormatted: "req_entrega-a6d42",
stats: {
    "name": "Entrega",
    "numberOfRequests": {
        "total": "1000",
        "ok": "696",
        "ko": "304"
    },
    "minResponseTime": {
        "total": "2822",
        "ok": "2822",
        "ko": "4597"
    },
    "maxResponseTime": {
        "total": "60016",
        "ok": "57212",
        "ko": "60016"
    },
    "meanResponseTime": {
        "total": "20143",
        "ok": "15502",
        "ko": "30770"
    },
    "standardDeviation": {
        "total": "15567",
        "ok": "7809",
        "ko": "22255"
    },
    "percentiles1": {
        "total": "14529",
        "ok": "13813",
        "ko": "18670"
    },
    "percentiles2": {
        "total": "21759",
        "ok": "19071",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "30324",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "43627",
        "ko": "60002"
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
    "count": 696,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "count": 304,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.462",
        "ok": "0.322",
        "ko": "0.141"
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
