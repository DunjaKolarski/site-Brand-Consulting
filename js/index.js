const toggle = document.getElementById("a11y-toggle");
const panel = document.getElementById("a11y-panel");
const overlay = document.getElementById("a11y-overlay");
const options = document.querySelectorAll(".a11y-option");

toggle.addEventListener("click", openMenu);
overlay.addEventListener("click", closeMenu);
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeMenu();
    }
});

function openMenu() {
    panel.classList.toggle("open");
    overlay.classList.toggle("show");
    const isOpen = panel.classList.contains("open"); 
    if (isOpen) { 
    panel.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    } else {
        panel.setAttribute("aria-hidden", "true");
        toggle.setAttribute("aria-expanded", "false");
    }
}

function closeMenu() {
    panel.classList.remove("open");
    overlay.classList.remove("show");
    panel.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
}

for (let i = 0; i < options.length; i++) {
    let option = options[i];

    option.addEventListener("click", function() { 
        toggleOption(option);
    });

    option.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            toggleOption(option);
        }
    });
}


function toggleOption(element) {
    var isActive = element.classList.contains("active");

    if (isActive) {
        element.classList.remove("active");
        element.setAttribute("aria-pressed", "false");
        isActive = false;
    } else {
        element.classList.add("active");
        element.setAttribute("aria-pressed", "true");
        isActive = true;
    }

    var option = element.getAttribute("data-option");

    console.log(option + "toggled: " + isActive);
}