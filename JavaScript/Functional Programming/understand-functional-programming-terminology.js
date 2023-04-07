// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a fucntion (representing the tea type) an number of cups needed, the following function returns an array of strings (each representing a cup of a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1)
    {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Prepare 27 cups of green tea and 13 cups of black tea and store them in teaGreenTeamFCC and teaBlackTeamFCC variables, repectively.
const teaGreenTeamFCC = getTea(prepareGreenTea, 27);
const teaBlackTeamFCC = getTea(prepareBlackTea, 13);


console.log(teaGreenTeamFCC, teaBlackTeamFCC);