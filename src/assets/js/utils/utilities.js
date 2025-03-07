function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const donateAmount = parseFloat(inputValue);
    if (inputValue === "" || isNaN(donateAmount)) {
        alert("Provide a valid donate amount");
        return null;
    }
    return donateAmount;
}

function updateMainBalance(mainBalance, donateAmount) {
    if (donateAmount > mainBalance) {
        alert("Insufficient balance!");
        return null;
    }
    mainBalance -= donateAmount;
    return mainBalance;
}

function updateDonateBalance(currentDonateBalance, donateAmount) {
    return currentDonateBalance + donateAmount;
}


function showSection(id, activeButton, inactiveButton) {
    document.getElementById("donate-container").classList.add('hidden');
    document.getElementById("history-container").classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

    activeButton.classList.add("bg-primary");
    activeButton.classList.remove("outline", "outline-[#111111]/30");
    inactiveButton.classList.remove("bg-primary");
    inactiveButton.classList.add("outline", "outline-[#111111]/30");
}

// Add donation to history
function addDonationToHistory(cause, amount) {
    const historySection = document.getElementById("donate-history");
    const historyItem = document.createElement("div");
    historyItem.classList.add("history-item");
    historyItem.innerHTML = `
        <p><strong>Cause:</strong> ${cause}</p>
        <p><strong>Amount:</strong> ${amount.toFixed(2)} BDT</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <hr class="my-2">
    `;
    historySection.appendChild(historyItem);
}