class Start {
    _id;
    event;
    lane;
    athlete_name;
    athlete_year;
    athlete_team_name;

    results;
    heat;

    updated_at;

    sort_field = 0;


    constructor(data) {
        this._id = data._id;
        this.event = data.event;
        this.lane = data.lane;
        this.athlete_name = data.athlete_name;
        this.athlete_year = data.athlete_year;
        this.athlete_team_name = data.athlete_team_name;

        this.heat = new Heat(data.heat);

        this.results = [];
        for (const result of data.results) {
            this.results.push(new Result(result));
        }

        this.updated_at = new Date(data.updated_at);
    }

    getMostRecentResult() {
        if (this.results.length < 1) return;
        const results = this.results.sort((a,b) => {return b.added_at.getTime() - a.added_at.getTime()});
        return results[0];
    }

    getFinalResult() {
        let results = this.results
            .filter(r => {return r.result_type === "livetiming_result"})
            .sort((a,b) => {return b.added_at.getTime() - a.added_at.getTime()});
        return results[0];
    }
}

class Heat {
    _id;
    meeting;
    event;
    number;
    max = 0;
    start_at;
    finished_at;

    constructor(data) {
        this._id = data._id;
        this.meeting = data.meeting;
        this.event = data.event;
        this.number = data.number;
        this.start_at = new Date(data.start_at);
        this.finished_at = new Date(data.finished_at);
    }
}

class Result {
    time;
    result_type;
    lap_meters;
    added_at;

    constructor(data) {
        this.time = data.time;
        this.result_type = data.result_type;
        this.lap_meters = data.lap_meters;

        this.added_at = new Date(data.added_at);
    }
}

class Event {
    _id;
    number;
    distance;
    relay_distance;
    meeting;
    gender;
    style;
    final;

    constructor(data) {
        this._id = data._id;
        this.number = data.number;
        this.distance = data.distance;
        this.relay_distance = data.relay_distance;
        this.meeting = data.meeting;
        this.gender = data.gender;
        this.style = new Style(data.style);
        this.final = new EventFinal(data.final);
    }

    getGender() {
        switch (this.gender) {
            case "MALE": return "männlich";
            case "FEMALE": return "weiblich";
            case "MIXED": return "mixed";
            case "DIVERS": return "divers";
            default: return "";
        }
    }
}

class Style {
    _id;
    name;

    constructor(data) {
        this._id = data._id;
        this.name = data.name;
    }

    getName() {
        switch (this.name) {
            case "BACKSTROKE": return "Rücken";
            case "BREASTSTROKE": return "Brust";
            case "BUTTERFLY": return "Schmetterling";
            case "FREESTYLE": return "Freistil";
            case "MEDLEY": return "Lagen";
            case "FINSWIMMING": return "Flossenschwimmen";
            case "DISTANCE_DIVING": return "Streckentauchen";
            case "BIFIN": return "BiFin";
            case "APNOE": return "Apnoe";
            case "SB": return "SB";
            default: return "Schwimmen";
        }
    }
}

class EventFinal {
    is_final;

    constructor(data) {
        this.is_final = data.is_final;
    }
}
