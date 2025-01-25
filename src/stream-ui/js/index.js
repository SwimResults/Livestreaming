const resultsLink = "https://swimresults.github.io/Livestreaming/src/stream-ui/results.html";
const summaryLink = "https://swimresults.github.io/Livestreaming/src/stream-ui/summary.html";
const clockLink = "https://swimresults.github.io/Livestreaming/src/stream-ui/clock.html";
const displayLink = "https://swimresults.github.io/Livestreaming/src/stream-ui/display.html";

let count = 0;

$("document").ready(function() {

    $("#loading").hide();
    $("#results").hide();

    $("#submitButton").click(() => {

        $("#loading").show();
        $("#results").hide();

        count++;

        let meeting = $("#meetingInput").val();
        let firstLane = $("#firstLaneInput").val();
        let lanes = $("#lanesInput").val();
        let place = $("#placeInput").val();
        let year = $("#yearInput").val();
        let refreshTime = $("#refreshTimeInput").val();
        let clockOffset = $("#clockOffsetInput").val();
        let skip_config = $("#skipConfigInput").is(':checked') ? "1" : "";
        let background = $("#backgroundInput").is(':checked') ? "1" : "";
        let env = $("#envInput").is(':checked') ? "dev" : "";

        let query = "?";

        query += "meeting=";
        query += meeting;
        query += "&first_lane=";
        query += firstLane;
        query += "&lanes=";
        query += lanes;
        query += "&place=";
        query += place;
        query += "&year=";
        query += year;
        query += "&refresh_time=";
        query += refreshTime;
        query += "&clock_offset=";
        query += clockOffset;
        query += "&skip_config=";
        query += skip_config;
        query += "&background=";
        query += background;
        query += "&env=";
        query += env;

        console.log(query)

        $("#resultsLink").html(resultsLink + query);
        $("#summaryLink").html(summaryLink + query);
        $("#clockLink").html(clockLink + query);
        $("#displayLink").html(displayLink + query);

        $(".generation-number").html(count)


        $("#loading").hide();
        $("#results").show();
    });

})
