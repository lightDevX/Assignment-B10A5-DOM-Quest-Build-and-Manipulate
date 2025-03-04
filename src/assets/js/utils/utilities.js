function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const donateAmount = parseFloat(inputValue);
    if (inputValue === "" || isNaN(donateAmount)) {
        alert("Please enter a valid amount");
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

function addToDonationHistory(amount) {
    // Implement this function to add the donation amount to the history
    console.log(`Added ${amount} to donation history`);
}