const showProfileMenuButton = document.getElementById("user-menu-button");
const profileMenu = document.getElementById("profile-menu");

const notyficationsButton = document.getElementById("notyfiactionsBtn");
const showNotyfications = document.getElementById("notyfications");

showProfileMenuButton.addEventListener("click", function() {
    if (profileMenu.style.display == "none" || profileMenu.style.display === "") {
        profileMenu.style.display = "block";
    } else {
        profileMenu.style.display = "none";
    }
});



notyficationsButton.addEventListener("click", function() {
    if (showNotyfications.style.display == "none" || showNotyfications.style.display === "") {
        showNotyfications.style.display = "block";
    } else {
        showNotyfications.style.display = "none";
    }
});


document.addEventListener("click", function(event) {
    if (!profileMenu.contains(event.target) && !showProfileMenuButton.contains(event.target)) {
        profileMenu.style.display = "none";
    }
    if (!showNotyfications.contains(event.target) && !notyficationsButton.contains(event.target)) {
        showNotyfications.style.display = "none";
    }
});