const storedUserInfo = localStorage.getItem("userInformation");

if (storedUserInfo) {
    const userInfo = JSON.parse(storedUserInfo);
    document.getElementById("first-name-input").value = userInfo.firstName || "";
    document.getElementById("last-name-input").value = userInfo.lastName || "";
    document.getElementById("country-input").value = userInfo.country || "";
    document.getElementById("phone-number-input").value = userInfo.phoneNumber || "";
    document.getElementById("state-input").value = userInfo.state || "";
    document.getElementById("city-input").value = userInfo.city || "";
    document.getElementById("village-input").value = userInfo.village || "";
    document.getElementById("notes-input").value = userInfo.notes || "";
}

document.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", storeUserInfo);
});

function storeUserInfo() {
    const firstName = document.getElementById("first-name-input").value;
    const lastName = document.getElementById("last-name-input").value;
    const country = document.getElementById("country-input").value;
    const phoneNumber = document.getElementById("phone-number-input").value;
    const state = document.getElementById("state-input").value;
    const city = document.getElementById("city-input").value;
    const village = document.getElementById("village-input").value;
    const notes = document.getElementById("notes-input").value;

    const userInfo = {
        firstName,
        lastName,
        country,
        phoneNumber,
        state,
        city,
        village,
        notes,
    };

    localStorage.setItem("userInformation", JSON.stringify(userInfo));
}
