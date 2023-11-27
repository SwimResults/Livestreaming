class Helper {
    static durationToSwimTimeString(duration) {
        if (!duration) return "-";
        let d = new Date((duration / 1000) / 1000)
        let minutes = "0" + d.getMinutes()
        let seconds = "0" + d.getSeconds()
        let millis = "0" + (d.getMilliseconds() / 10)
        return minutes.substr(-2) + ":" + seconds.substr(-2) + "," + millis.substr(-2)
    }
}