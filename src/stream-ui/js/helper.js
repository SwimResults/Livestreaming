class Helper {
    static durationToSwimTimeString(duration) {
        if (!duration) return "-";
        let d = new Date(Math.floor((duration / 1000) / 1000))
        let minutes = "0" + d.getMinutes()
        let seconds = "0" + d.getSeconds()
        let millis = "0" + Math.floor(d.getMilliseconds() / 10)
        return minutes.substr(-2) + ":" + seconds.substr(-2) + "," + millis.substr(-2)
    }

    static getSettings() {
        const urlParams = new URLSearchParams(window.location.search);
        let refreshTime = Number(urlParams.get('refresh_time'));
        let meeting = urlParams.get('meeting');
        const skipConfig = urlParams.get('skip_config');
        const background = urlParams.get('background');
        const clockOffset = Number(urlParams.get('clock_offset'));
        let firstLane = Number(urlParams.get('first_lane'));
        let numOfLanes = Number(urlParams.get('lanes'));
        let env = urlParams.get('env');
        let place = urlParams.get('place')
        let year = urlParams.get('year');

        if (!refreshTime) refreshTime = 1000;
        if (!meeting) meeting = "IESC22";
        if (typeof firstLane != "number") firstLane = 1;
        if (!numOfLanes) numOfLanes = 4;
        if (!env) env = "prod";

        Api.setApiUrls(env);

        return {
            refreshTime: refreshTime,
            meeting: meeting,
            skipConfig: skipConfig,
            firstLane: firstLane,
            numOfLanes: numOfLanes,
            background: background,
            clockOffset: Number(clockOffset),
            env: env,
            place: place,
            year: year
        };
    }
}
