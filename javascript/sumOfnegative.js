function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];

    const negativenumbers = input.filter(num => num < 0);
    const positivenumbers = input.filter(num => num > 0);

    return [positivenumbers.length, negativenumbers.reduce((acc, curr) => acc + curr, 0)];
}