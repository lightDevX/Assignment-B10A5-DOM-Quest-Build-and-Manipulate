function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    const donateAmount = parseFloat(inputValue);

    if (inputValue === "" || isNaN(donateAmount)) {
        alert("Provide a valid donate amount");
        return null;
    }
    return donateAmount;
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

function addDonationToHistory(amount, cardTitle) {
    const historySection = document.getElementById("donate-history");
    const historyItem = document.createElement("div");
    historyItem.className = "history-item p-8 outline outline-[#111111]/10 rounded-[8px] mt-8";
    historyItem.innerHTML =
        '<p class="text-black text-xl font-normal font-lexend mb-4">' +
        amount.toFixed(2) + ' BDT ' + cardTitle + '</p>' +
        '<p class="text-[#111111]/70 font-normal font-lexend"> Date: ' +
        new Date().toLocaleString() + ' GMT +0600 (Bangladesh Standard Time)</p>';
    historySection.appendChild(historyItem);
}

function setupDonationHandler(buttonId, amountId, balanceId, titleId) {
    document.getElementById(buttonId).addEventListener("click", function () {
        const mainBalanceElement = document.getElementById("main-balance");
        const cardTitle = document.getElementById(titleId).textContent;
        const donateAmount = getInputValue(amountId);

        if (donateAmount === null) return;

        const mainBalance = parseFloat(mainBalanceElement.textContent);
        if (donateAmount > mainBalance) {
            alert("Insufficient balance!");
            return;
        }


        mainBalanceElement.textContent = (mainBalance - donateAmount).toFixed(2);
        const donateBalanceElement = document.getElementById(balanceId);
        const currentDonateBalance = parseFloat(donateBalanceElement.textContent);
        donateBalanceElement.textContent = (currentDonateBalance + donateAmount).toFixed(2);


        document.getElementById(amountId).value = "";
        document.getElementById("success-modal").classList.remove("hidden");
        addDonationToHistory(donateAmount, cardTitle);
    });
}