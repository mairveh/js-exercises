import {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} from '../challenges/exercise5';

describe('sumMultiples',() => {
    test('returns the sum of any numbers which are a multiple of 3 or 5 in the given array',() => {
        expect(sumMultiples([3,5,30,2])).toBe(38);
        expect(sumMultiples([2])).toBe(0);
        expect(sumMultiples([300,3])).toBe(303);
        expect(sumMultiples([])).toBe(0);
    })
});

describe('isValidDNA',() => {
    test('returns true/false depending on whether it is a valid DNA string in the given string of DNA characters which are C, G, T or A only',() => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTAB")).toBe(false);
        expect(isValidDNA("CGTAAG")).toBe(true);
        expect(isValidDNA("XYZC")).toBe(false);
        expect(isValidDNA("")).toBe(false);
    })
});

describe('getComplementaryDNA',() => {
    test('returns a string of the complementary base pairs in the given string of valid DNA characters. In DNA, T always pairs with A, and C always pairs with G.',() => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        expect(getComplementaryDNA("AAAA")).toBe("TTTT");
        expect(getComplementaryDNA("")).toBe("");
    })
});

describe('isItPrime',() => {
    test('return true/false depending on whether it is a prime number such as 2,3,5,7',() => {
        expect(isItPrime(1)).toBe(false);
        expect(isItPrime(0)).toBe(false);
        expect(isItPrime(79)).toBe(true);
        expect(isItPrime(29)).toBe(true);
        expect(isItPrime(20)).toBe(false);
    })
});

describe('createMatrix',() => {
    test('return an array of n arrays, each filled with the fillitems',() => {
        expect(createMatrix(3,"foo")).toStrictEqual([["foo","foo", "foo"],["foo","foo", "foo"],["foo","foo", "foo"]]);
        expect(createMatrix(2,"square")).toStrictEqual([["square", "square"],["square","square"]]);
        expect(createMatrix(0,"square")).toStrictEqual([]);
    })
});

describe('areWeCovered',() => {
    test('return true/false depending on whether there are at least 3 staff scheduled for the given day',() => {
        expect(areWeCovered([
            { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
            { name: "Ella", rota: ["Tuesday", "Wednesday"] }
            ], "Tuesday")).toBe(true);
    
        expect(areWeCovered([
            { name: "Jimmy", rota: ["Monday", "Tuesday", "Friday"] },
            { name: "Jane", rota: [] },
            { name: "Simon", rota: ["Tuesday", "Wednesday"] }
            ], "Monday")).toBe(false);
        })
});