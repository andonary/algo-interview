function maximumDigit(digit: number) {
    return digit > 9;
}

function increaseDigit(digit: number): { digit: number, carried: number } {
    let digitPlusOne: number = digit + 1;
    let carried: number = 0;
    if (maximumDigit(digitPlusOne)) {
        digitPlusOne = 0;
        carried = 1;
    }
    return {
        digit: digitPlusOne,
        carried
    }
}

function getResult(unit: number): number[] {
    let {digit, carried} = increaseDigit(unit);
    if (carried) return [carried, digit];
    return [digit];
}

function hasCarried(result: number[]): boolean {
    return result.length === 2;
}

function higherDigit(result: number[], ten: number, hasBeenCarried: boolean) {
    if (hasBeenCarried) {
        result[0] += ten;
        if (maximumDigit(result[0])) {
            result[0] = 0;
            result.unshift(1);
        }
    } else {
        result.unshift(ten);
    }
}

export function increment(numbers: number[]): number[] {
    const unit: number = numbers[numbers.length - 1];
    const result = getResult(unit);
    let hasBeenCarried = hasCarried(result);
    for (let i = numbers.length - 2; i > -1; i--) {
        const ten = numbers[i];
        higherDigit(result, ten, hasBeenCarried);
        hasBeenCarried = false;
    }
    return result;
}
