import {increment} from "./custom-number-type-increment";

describe('Increment a custom number type', () => {
    const incrementMyDigits = (digits: number[]) => increment(digits);

    test('should increment array of digit [0] to [1]', () => {
        expect(incrementMyDigits([0])).toStrictEqual([1]);
    });

    test('should increment array of digit [1] to [2]', () => {
        expect(incrementMyDigits([1])).toStrictEqual([2]);
    });

    test('should increment array of digit [9] to [1,0]', () => {
        expect(incrementMyDigits([9])).toStrictEqual([1,0]);
    });

    test('should increment array of digit [1,0] to [1,1]', () => {
        expect(incrementMyDigits([1,0])).toStrictEqual([1,1]);
    });

    test('should increment array of digit [1,1] to [1,2]', () => {
        expect(incrementMyDigits([1,1])).toStrictEqual([1,2]);
    });

    test('should increment array of digit [1,9] to [2,0]', () => {
        expect(incrementMyDigits([1,9])).toStrictEqual([2,0]);
    });

    test('should increment array of digit [2,9] to [3,0]', () => {
        expect(incrementMyDigits([2,9])).toStrictEqual([3,0]);
    });

    test('should increment array of digit [9,9] to [1,0,0]', () => {
        expect(incrementMyDigits([9,9])).toStrictEqual([1,0,0]);
    });

    test('should increment array of digit [1,0,0] to [1,0,1]', () => {
        expect(incrementMyDigits([1,0,0])).toStrictEqual([1,0,1]);
    });

    test('should increment array of digit [1,0,1] to [1,0,2]', () => {
        expect(incrementMyDigits([1,0,1])).toStrictEqual([1,0,2]);
    });

    test('should increment array of digit [1,2,2] to [1,2,3]', () => {
        expect(incrementMyDigits([1,2,2])).toStrictEqual([1,2,3]);
    });

    test('should increment array of digit [1,7,9] to [1,8,0]', () => {
        expect(incrementMyDigits([1,7,9])).toStrictEqual([1,8,0]);
    });

    test('should increment array of digit [1,0,0,0] to [1,0,0,1]', () => {
        expect(incrementMyDigits([1,0,0,0])).toStrictEqual([1,0,0,1]);
    });

    test('should increment array of digit [1,0,1,0] to [1,0,1,1]', () => {
        expect(incrementMyDigits([1,0,1,0])).toStrictEqual([1,0,1,1]);
    });

    test('should increment array of digit [1,1,0,0] to [1,1,0,1]', () => {
        expect(incrementMyDigits([1,1,0,0])).toStrictEqual([1,1,0,1]);
    });

    test('should increment array of digit [2,4,7,9,0] to [2,4,7,9,1]', () => {
        expect(incrementMyDigits([2,4,7,9,0])).toStrictEqual([2,4,7,9,1]);
    });
})
