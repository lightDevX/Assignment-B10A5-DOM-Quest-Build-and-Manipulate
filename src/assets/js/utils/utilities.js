function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const donateAmount = parseFloat(inputValue);
    if (inputValue === "" || isNaN(donateAmount)) {
        alert("Provide a valid donate amount");
        return null; // Return null if the input is invalid
    }
    return donateAmount;
}

function updateMainBalance(mainBalance, donateAmount) {
    if (donateAmount > mainBalance) {
        alert("Insufficient balance!");
        return null; // Return null if insufficient balance
    }
    mainBalance -= donateAmount;
    return mainBalance;
}

function updateDonateBalance(currentDonateBalance, donateAmount) {
    return currentDonateBalance + donateAmount; // Return the updated donate balance
}


