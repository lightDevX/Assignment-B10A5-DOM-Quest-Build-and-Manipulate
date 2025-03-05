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
    const mainDiv = document.getElementById('donate-history');
    const div = document.createElement("div");
    div.classList.add("p-8", "outline", "outline-[#111111]/10", "rounded-[8px]", "mt-8");
    div.innerHTML = `
        <h1 class="text-black text-xl font-normal font-lexend mb-4">
          ${amount} BDT donated for famine-2024 at Feni, Bangladesh
        </h1>
        <p class="text-[#111111]/70 font-normal font-lexend">
          Date: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })}
        </p>
    `;
    mainDiv.prepend(div); // Adds the latest donation at the top
}