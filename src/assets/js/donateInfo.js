document.addEventListener("DOMContentLoaded", function () {
    const donateButton = document.getElementById("btn-donate");

    donateButton.addEventListener("click", function () {
        const donateAmount = getInputValue("donate-amount");
        if (donateAmount === null) return;

        const mainBalanceElement = document.getElementById("main-balance");
        const donateBalanceElement = document.getElementById("donate-balance");

        let mainBalance = parseFloat(mainBalanceElement.textContent);
        let donateBalance = parseFloat(donateBalanceElement.textContent);

        const updatedMainBalance = updateMainBalance(mainBalance, donateAmount);
        if (updatedMainBalance === null) return;

        mainBalanceElement.textContent = updatedMainBalance.toFixed(2);
        donateBalanceElement.textContent = updateDonateBalance(donateBalance, donateAmount).toFixed(2);

        addToDonationHistory(donateAmount);
        document.getElementById("donate-amount").value = "";

        // Show success modal
        document.getElementById("success-modal").classList.remove("hidden");
    });

    // Modal close functionality
    const closeModalButton = document.getElementById("close-modal");
    if (closeModalButton) {
        closeModalButton.addEventListener("click", function () {
            document.getElementById("success-modal").classList.add("hidden");
        });
    }
});