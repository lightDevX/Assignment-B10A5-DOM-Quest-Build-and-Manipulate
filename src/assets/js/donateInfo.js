document.addEventListener("DOMContentLoaded", function () {
    // Hide the success modal initially
    document.getElementById("success-modal").classList.add("hidden");

    const donateButton = document.getElementById("btn-donate");
    donateButton.addEventListener("click", function () {
        const donateAmount = getInputValue("donate-amount");

        if (donateAmount === null) return; // Exit if amount is invalid

        const mainBalance = parseFloat(document.getElementById("main-balance").textContent);

        // Check if the donation amount exceeds the main balance
        if (donateAmount > mainBalance) {
            alert("Insufficient balance! You cannot donate more than your main balance.");
            return; // Exit if the donation amount is more than the main balance
        }

        // Update the main balance
        const updatedMainBalance = updateMainBalance(mainBalance, donateAmount);
        if (updatedMainBalance === null) return; // Exit if insufficient balance

        // Update the DOM with the new main balance
        const mainBalanceElement = document.getElementById("main-balance");
        mainBalanceElement.textContent = updatedMainBalance.toFixed(2);

        // Get the current donate balance
        const donateBalance = parseFloat(document.getElementById("donate-balance").textContent);

        // Validate again before updating the donate balance
        if (donateAmount > mainBalance) {
            alert("Invalid operation! Donation amount exceeds main balance.");
            return; // Exit if the donation amount is more than the main balance
        }

        // Update the donate balance only if the main balance is sufficient
        const newDonateBalance = updateDonateBalance(donateBalance, donateAmount);

        // Update the DOM with the new donate balance
        const newDonateBalanceElement = document.getElementById("donate-balance");
        newDonateBalanceElement.textContent = newDonateBalance.toFixed(2);

        // Add to donation history
        addToDonationHistory(donateAmount);

        // Reset the input field
        document.getElementById("donate-amount").value = "";

        // Show success modal
        document.getElementById("success-modal").classList.remove("hidden");
    });
});