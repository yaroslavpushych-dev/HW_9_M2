function getExpression(n) {
    if (typeof n !== "number" || !Number.isFinite(n) || n < 1)
        return null;

    function helper(num) {
        if (num === 1) return "1"

        if (num % 3 === 0) {
            const res = helper(num / 3);
            if (res !== null)
                return `(${res} * 3)`
        }

        if (num >= 6) {
            const res = helper(num - 5);
            if (res !== null)
                return `(${res} + 5)`;
        }

        return null;
    }

    return helper(n)
}

console.log(getExpression(15))