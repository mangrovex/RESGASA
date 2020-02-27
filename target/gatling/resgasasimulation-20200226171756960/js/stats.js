var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "420",
        "ok": "285",
        "ko": "135"
    },
    "minResponseTime": {
        "total": "53",
        "ok": "53",
        "ko": "18430"
    },
    "maxResponseTime": {
        "total": "60043",
        "ok": "58955",
        "ko": "60043"
    },
    "meanResponseTime": {
        "total": "28373",
        "ok": "25956",
        "ko": "33475"
    },
    "standardDeviation": {
        "total": "12224",
        "ok": "11520",
        "ko": "12096"
    },
    "percentiles1": {
        "total": "26812",
        "ok": "25936",
        "ko": "29524"
    },
    "percentiles2": {
        "total": "32138",
        "ok": "29582",
        "ko": "33930"
    },
    "percentiles3": {
        "total": "58595",
        "ok": "47143",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "57008",
        "ko": "60003"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 20,
    "percentage": 5
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 265,
    "percentage": 63
},
    "group4": {
    "name": "failed",
    "count": 135,
    "percentage": 32
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.655",
        "ok": "0.445",
        "ko": "0.211"
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
        "total": "53",
        "ok": "53",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "251",
        "ok": "251",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles1": {
        "total": "196",
        "ok": "196",
        "ko": "-"
    },
    "percentiles2": {
        "total": "210",
        "ok": "210",
        "ko": "-"
    },
    "percentiles3": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "percentiles4": {
        "total": "250",
        "ok": "250",
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
        "total": "0.031",
        "ok": "0.031",
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
        "total": "400",
        "ok": "265",
        "ko": "135"
    },
    "minResponseTime": {
        "total": "1882",
        "ok": "1882",
        "ko": "18430"
    },
    "maxResponseTime": {
        "total": "60043",
        "ok": "58955",
        "ko": "60043"
    },
    "meanResponseTime": {
        "total": "29784",
        "ok": "27903",
        "ko": "33475"
    },
    "standardDeviation": {
        "total": "10727",
        "ok": "9417",
        "ko": "12096"
    },
    "percentiles1": {
        "total": "27054",
        "ok": "26271",
        "ko": "29524"
    },
    "percentiles2": {
        "total": "32579",
        "ok": "30215",
        "ko": "33930"
    },
    "percentiles3": {
        "total": "58598",
        "ok": "48458",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "57386",
        "ko": "60003"
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
    "count": 265,
    "percentage": 66
},
    "group4": {
    "name": "failed",
    "count": 135,
    "percentage": 34
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.624",
        "ok": "0.413",
        "ko": "0.211"
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
