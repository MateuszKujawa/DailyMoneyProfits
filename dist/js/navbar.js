const openMobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");
        const closeMenuButton = document.getElementById("closeMenuButton");

        // Funkcja obsługująca kliknięcie przycisku otwierającego mobile-menu
openMobileMenuButton.addEventListener("click", function() {
    mobileMenu.style.display = "block";
        setTimeout(function() {
                mobileMenu.style.bottom = "0";
        }, 10); // Małe opóźnienie przed animacją, aby uniknąć błędów animacji
});

        // Funkcja obsługująca kliknięcie przycisku zamykającego mobile-menu
    closeMenuButton.addEventListener("click", function() {
        mobileMenu.style.bottom = "-100%";
            setTimeout(function() {
                mobileMenu.style.display = "none";
        }, 10); // Czas animacji (0.3s)
});


