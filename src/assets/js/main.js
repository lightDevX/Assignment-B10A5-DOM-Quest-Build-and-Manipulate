document.addEventListener("DOMContentLoaded", function () {
    const logButton = document.getElementById("btn-donate-log");
    const historyButton = document.getElementById("btn-donate-history");


    if (window.location.pathname.includes("history")) {
        historyButton.classList.add("bg-primary");
        logButton.classList.add("outline");
        logButton.classList.add("outline-[#111111]/30");
        logButton.classList.remove("bg-primary");
    } else {
        logButton.classList.add("bg-primary");
        historyButton.classList.remove("bg-primary");
    }

    logButton.addEventListener("click", function () {
        window.location.href = "./index.html";
    });

    historyButton.addEventListener("click", function () {
        window.location.href = "./history.html";

    });


    const closeModalButton = document.getElementById("close-modal");
    if (closeModalButton) {
        closeModalButton.addEventListener("click", function () {
            document.getElementById("success-modal").classList.add("hidden");
        });
    }
});