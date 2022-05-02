
const aboutMe = document.getElementById("about-me");

const portrait = document.getElementById("portrait");

aboutMe.addEventListener("click", () => {
    if (portrait.style.display === "block") {
        portrait.style.display = "none";
    } else {
        portrait.style.display = "block";
    }
});

