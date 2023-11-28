class Helper {
    static durationToSwimTimeString(duration) {
        if (!duration) return "-";
        let d = new Date((duration / 1000) / 1000)
        let minutes = "0" + d.getMinutes()
        let seconds = "0" + d.getSeconds()
        let millis = "0" + (d.getMilliseconds() / 10)
        return minutes.substr(-2) + ":" + seconds.substr(-2) + "," + millis.substr(-2)
    }

    static getSettings() {
        const urlParams = new URLSearchParams(window.location.search);
        let refreshTime = urlParams.get('refresh_time');
        let meeting = urlParams.get('meeting');
        const skipConfig = urlParams.get('skip_config');
        let firstLane = urlParams.get('first_lane');
        let numOfLanes = urlParams.get('lanes');

        if (!refreshTime) refreshTime = 1000;
        if (!meeting) meeting = "IESC22";
        if (!firstLane) firstLane = 1;
        if (!numOfLanes) numOfLanes = 4;

        return {
            refreshTime: refreshTime,
            meeting: meeting,
            skipConfig: skipConfig,
            firstLane: firstLane,
            numOfLanes: numOfLanes
        };
    }
}