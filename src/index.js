module.exports = function toReadable(number) {
    console.log(number);
    let units = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine"
        ],
        tens10to19 = [
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen"
        ],
        tens = [
            "null",
            "null",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety"
        ];

    let numberArr = number.toString().split("");

    if (numberArr.length === 1) {
        return units[Number(numberArr[0])];
    }

    if (numberArr.length === 2) {
        if (Number(numberArr[0]) === 1) {
            return tens10to19[Number(numberArr[1])];
        } else if (Number(numberArr[1]) === 0) {
            return tens[Number(numberArr[0])];
        } else {
            return (
                tens[Number(numberArr[0])] + " " + units[Number(numberArr[1])]
            );
        }
    }

    if (numberArr.length === 3) {
        if (Number(numberArr[1]) == 1) {
            return (
                units[Number(numberArr[0])] +
                " hundred " +
                tens10to19[Number(numberArr[2])]
            );
        } else if (Number(numberArr[1]) !== 0 && Number(numberArr[2]) !== 0) {
            return (
                units[Number(numberArr[0])] +
                " hundred " +
                tens[Number(numberArr[1])] +
                " " +
                units[Number(numberArr[2])]
            );
        } else if (Number(numberArr[1]) == 0 && Number(numberArr[2]) == 0) {
            return units[Number(numberArr[0])] + " hundred";
        } else if (Number(numberArr[1]) == 0) {
            return (
                units[Number(numberArr[0])] +
                " hundred " +
                units[Number(numberArr[2])]
            );
        } else {
            return (
                units[Number(numberArr[0])] +
                " hundred " +
                tens[Number(numberArr[1])]
            );
        }
    }
};
