document.addEventListener("DOMContentLoaded", function () {
    const logButton = document.getElementById("btn-donate-log");
    const historyButton = document.getElementById("btn-donate-history");

    // Retrieve active tab from localStorage
    const activeTab = localStorage.getItem("activeTab");

    if (activeTab === "history") {
        historyButton.classList.add("bg-primary", "text-black");
        logButton.classList.remove("bg-primary", "text-black");
    } else {
        logButton.classList.add("bg-primary", "text-black");
        historyButton.classList.remove("bg-primary", "text-black");
    }

    logButton.addEventListener("click", function () {
        console.log("btn-donate-log clicked");
        localStorage.setItem("activeTab", "log"); // Save active tab
        window.location.href = "./index.html";
    });

    historyButton.addEventListener("click", function () {
        console.log("btn-donate-history clicked");
        localStorage.setItem("activeTab", "history"); // Save active tab
        window.location.href = "./history.html";
    });
});
