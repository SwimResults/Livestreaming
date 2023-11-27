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
        this.results.sort((a,b) => {return a.added_at.getTime() - b.added_at.getTime()});
        return this.results[0];
    }
}

class Heat {
    _id;
    meeting;
    event;
    number;

    constructor(data) {
        this._id = data._id;
        this.meeting = data.meeting;
        this.event = data.event;
        this.number = data.number;
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