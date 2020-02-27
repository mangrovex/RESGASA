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
        "total": "50",
        "ok": "50",
        "ko": "104"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59780",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "21609",
        "ok": "20682",
        "ko": "28171"
    },
    "standardDeviation": {
        "total": "12500",
        "ok": "11779",
        "ko": "15196"
    },
    "percentiles1": {
        "total": "20323",
        "ok": "19907",
        "ko": "26103"
    },
    "percentiles2": {
        "total": "28245",
        "ok": "27240",
        "ko": "36332"
    },
    "percentiles3": {
        "total": "44073",
        "ok": "41130",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "59958",
        "ok": "52852",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 38,
    "percentage": 9
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 330,
    "percentage": 79
},
    "group4": {
    "name": "failed",
    "count": 52,
    "percentage": 12
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.811",
        "ok": "0.71",
        "ko": "0.1"
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
        "total": "57",
        "ok": "57",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles1": {
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "percentiles2": {
        "total": "226",
        "ok": "226",
        "ko": "-"
    },
    "percentiles3": {
        "total": "242",
        "ok": "242",
        "ko": "-"
    },
    "percentiles4": {
        "total": "246",
        "ok": "246",
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
        "total": "0.039",
        "ok": "0.039",
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
        "total": "50",
        "ok": "50",
        "ko": "104"
    },
    "maxResponseTime": {
        "total": "60001",
        "ok": "59780",
        "ko": "60001"
    },
    "meanResponseTime": {
        "total": "22681",
        "ok": "21861",
        "ko": "28171"
    },
    "standardDeviation": {
        "total": "11829",
        "ok": "11007",
        "ko": "15196"
    },
    "percentiles1": {
        "total": "20856",
        "ok": "20338",
        "ko": "26103"
    },
    "percentiles2": {
        "total": "28692",
        "ok": "27629",
        "ko": "36332"
    },
    "percentiles3": {
        "total": "45134",
        "ok": "41713",
        "ko": "60000"
    },
    "percentiles4": {
        "total": "60000",
        "ok": "53337",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 18,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 330,
    "percentage": 83
},
    "group4": {
    "name": "failed",
    "count": 52,
    "percentage": 13
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.772",
        "ok": "0.672",
        "ko": "0.1"
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
