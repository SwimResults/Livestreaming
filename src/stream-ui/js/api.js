class Api {
    static meeting_service_url = "https://api.swimresults.de/meeting/v1/";
    static start_service_url = "https://api.swimresults.de/start/v1/";

    static setApiUrls(env) {
        if (env === "dev") {
            this.meeting_service_url = "https://api-dev.swimresults.de/meeting/v1/";
            this.start_service_url = "https://api-dev.swimresults.de/start/v1/";
        } else {
            this.meeting_service_url = "https://api.swimresults.de/meeting/v1/";
            this.start_service_url = "https://api.swimresults.de/start/v1/";
        }
    }

    static getEventByMeetingAndNumber(meeting, number, callback) {
        $.get(this.meeting_service_url + "event/meet/" + meeting + "/event/" + number, callback)
    }

    static getCurrentStarts(meeting, callback) {
        $.get(this.start_service_url + "start/meet/" + meeting + "/current", callback)
    }

    static getCurrentHeat(meeting, callback) {
        $.get(this.start_service_url + "heat/meet/" + meeting + "/current", callback)
    }

    static getHeatInfo(meeting, event, callback) {
        $.get(this.start_service_url + "heat/meet/" + meeting + "/event/" + event + "/info", callback)
    }
}
