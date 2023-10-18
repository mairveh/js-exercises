import {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} from '../challenges/exercise6-optional'

describe('sumDigits', () => {
    test('returns the sum of all the number\'s digits', () => {
		expect(sumDigits(375)).toEqual(15);
		expect(sumDigits(100)).toEqual(1);
	});
});

describe('createRange', () => {
    test('creates a range of numbers as an array from start to end incremented by steps', () => {
		expect(createRange(3,11,2)).toEqual([3, 5, 7, 9, 11]);
	});
});

describe('getScreentimeAlertList', () => {
    test('return an array of usernames of users who have used more than 100 minutes of screentime for a given date', () => {
		expect(getScreentimeAlertList([
            {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
            ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                ]
            }
        ], '2019-05-04')).toEqual(["beth_1234"]);
	});
});

describe('hexToRGB', () => {
    test('transform the hex code into an RGB code in the format: rgb(255,17,51)', () => {
		expect(hexToRGB('#FF1133')).toEqual('rgb(255,17,51)');
	});
});

describe('findWinner', () => {
    test('return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner', () => {
		expect(findWinner([
                ["X", "0", null],
                ["X", null, "0"],
                ["X", null, "0"]
            ])).toEqual('X');
	});
});