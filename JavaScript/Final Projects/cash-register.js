// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

function checkCashRegister(price, cash, cid) {
    // Calculate the total amount of cash in the drawer
    let totalCashInDrawer = cid.reduce((acc, curr) => acc + curr[1], 0);

    // Calculate the change due and round it to two decimal places
    let changeDue = cash - price;
    changeDue = Math.round(changeDue * 100) / 100;

    // Define an object that maps currency units to their values
    const currencyValues = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    // Define an array to hold the change to return to the customer
    let changeToReturn = [];

    // If the total cash in drawer is less than the change due, return "INSUFFICIENT_FUNDS"
    if (totalCashInDrawer < changeDue) {
        return {status: "INSUFFICIENT_FUNDS", change: changeToReturn};
    }

    // If the total cash in drawer is equal to the change due, return "CLOSED"
    if (totalCashInDrawer === changeDue) {
        return {status: "CLOSED", change: cid};
    }

    // Otherwise, calculate the change to return
    for (let i = cid.length - 1; i >= 0; i--) {
        let currencyUnit = cid[i][0];
        let currencyValue = currencyValues[currencyUnit];
        let currencyAmount = cid[i][1];
        let currencyCount = Math.floor(changeDue / currencyValue);

        if (currencyCount > 0) {
            let currencyTotal = currencyCount * currencyValue;
            if (currencyValue > currencyAmount) {
                changeDue -= currencyAmount;
                changeToReturn.push([currencyUnit, currencyAmount]);
            } else {
                changeDue -= currencyTotal;
                changeToReturn.push([currencyUnit, currencyTotal]);
            }
            changeDue = Math.round(changeDue * 100) / 100;
        }
    }
    // If there is still change due, return "INSUFFICIENT_FUNDS"
    if (changeDue > 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }

    // Otherwise, return the change to return
    return {status: "OPEN", change: changeToReturn};
}