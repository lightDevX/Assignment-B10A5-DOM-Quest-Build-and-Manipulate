document.addEventListener("DOMContentLoaded", function () {

    var donateCard = document.getElementById("btn-donate-log");
    var donateHistory = document.getElementById("btn-donate-history");


    showSection("donate-container", donateCard, donateHistory);


    donateHistory.addEventListener("click", function () {
        showSection("history-container", donateHistory, donateCard);
    });

    donateCard.addEventListener("click", function () {
        showSection("donate-container", donateCard, donateHistory);
    });


    document.getElementById("close-modal").addEventListener("click", function () {
        document.getElementById("success-modal").classList.add("hidden");
    });


    setupDonationHandler("btn-donate", "donate-amount", "donate-balance", "donate-title");
    setupDonationHandler("btn-donate-1", "donate-amount-1", "donate-balance-1", "donate-title-1");
    setupDonationHandler("btn-donate-2", "donate-amount-2", "donate-balance-2", "donate-title-2");
});