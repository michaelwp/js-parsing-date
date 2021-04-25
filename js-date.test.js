const jsDate = require("./js-date");

const jsDateObj = new jsDate(
    "2021/04/05", "2021/04/15"
)

test("to milliseconds", () => {
    expect(jsDateObj.difference().toMilliSeconds()).toBe(864000000);
});

test("to seconds", () => {
    expect(jsDateObj.difference().toSeconds()).toBe(864000);
});

test("to minutes", () => {
    expect(jsDateObj.difference().toMinutes()).toBe(14400);
});

test("to hours", () => {
    expect(jsDateObj.difference().toHours()).toBe(240);
});

test("to days", () => {
    expect(jsDateObj.difference().toDays()).toBe(10);
});

test("parsing date", () => {
    expect(jsDateObj.parsingDate()).toEqual(
        ["2021/04/05", "2021/04/06", "2021/04/07", "2021/04/08",
            "2021/04/09", "2021/04/10", "2021/04/11", "2021/04/12",
            "2021/04/13", "2021/04/14", "2021/04/15"])
});
