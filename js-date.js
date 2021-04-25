class JsDate {
    constructor(
        startDate,
        endDate
    ) {
        this.startDate = new Date(startDate);
        this.endDate = new Date(endDate);
        this.diffToMillisecond = 0;
    }

    difference() {
        this.diffToMillisecond = this.endDate.getTime() - this.startDate.getTime()
        return this;
    }

    toMilliSeconds() {
        return this.diffToMillisecond;
    }

    toSeconds() {
        return this.diffToMillisecond / 1000;
    }

    toMinutes() {
        return this.toSeconds() / 60;
    }

    toHours() {
        return this.toMinutes() / 60;
    }

    toDays() {
        return this.toHours() / 24;
    }

    parsingDate() {
        let diffDays = this.difference().toDays();
        const diffDate = this.startDate;
        const res = [];

        // for (let i = 0; i <= diffDays; i++) {
        //     let dateRes = [
        //         diffDate.getFullYear(),
        //         diffDate.getMonth() + 1,
        //         diffDate.getDate()
        //     ].join("/");
        //     res.push(dateRes);
        //     diffDate.setDate(diffDate.getDate() + 1);
        // }

        do {
            const year = diffDate.getFullYear();
            const month = "0" + (diffDate.getMonth() + 1);
            const day = "0" + diffDate.getDate()

            let dateRes = [year,
                month.substring(month.length - 2),
                day.substring(day.length - 2)].join("/");
            res.push(dateRes);
            diffDays -= 1;
            diffDate.setDate(diffDate.getDate() + 1);
        } while (diffDays >= 0);

        return res;
    }
}

module.exports = JsDate;
