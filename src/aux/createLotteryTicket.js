/*
    it remains to make some adjustments to allow tickets to be generated with any configuration
*/

const settings = {
    rows: 3,
    cols: 9,
    //  numbers: 15,
    numInRow: 5,
    minNumInCol: 1,
    maxNumInCol: 2,
};

const createTicket = () => {
    const ticket = [];
    const countNumInCols = Array(settings.cols).fill(0);

    for (let row = 0; row < settings.rows; row++) {
        // Set row parameters
        let pendNum = settings.numInRow;
        let pendLockers =
            settings.cols -
            countNumInCols.filter(
                (numInCol) => numInCol === settings.maxNumInCol
            ).length;

        const rowNum = [];

        for (let col = 0; col < settings.cols; col++) {

            // Check if the column has reached the maximum number of numbers
            if (countNumInCols[col] === settings.maxNumInCol) rowNum.push("");

            // Check if the column has to insert a number to reach the minimum number of numbers
            else if (
                settings.minNumInCol - countNumInCols[col] ===
                settings.rows - row
            ) {
                rowNum.push(randomNumberForCol(col, ticket));
                countNumInCols[col]++;
                pendNum--;
                pendLockers--;
            }
            
            else {
                const decision = takeDecision(pendNum / pendLockers);

                if (decision) {
                    rowNum.push(randomNumberForCol(col, ticket));
                    countNumInCols[col]++;
                    pendNum--;
                } else {
                    rowNum.push("");
                }
                pendLockers--;
            }
        }
        ticket.push(rowNum);
    }
    return ticket;
};

const takeDecision = (prob) => {
    const randomNumber = Math.random();
    return randomNumber < prob ? true : false;
};

const randomNumberForCol = (col, addedNums) => {
    if (col === 0) return randomNumber(1, 9, addedNums);
    else if (col === 8) return randomNumber(80, 90, addedNums);
    else return randomNumber(col * 10, col * 10 + 9, addedNums);
};

const randomNumber = (min, max, addedNums) => {
    addedNums = addedNums.flat(2);
    let rand;

    do {
        rand = Math.floor(Math.random() * (max - min + 1) + min);
    } while (addedNums.includes(rand));

    return rand;
};

export default createTicket;
