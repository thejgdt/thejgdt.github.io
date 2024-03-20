const viewMoreButton = document.querySelector(".button-layout");

viewMoreButton.addEventListener("click", function () {
  alert("Coming soon! Stay tuned!");
});

function handleInstagramClick() {
  window.open("https://www.instagram.com/fyajgdt", "_blank");
}

function handleGitHubClick() {
  window.open("https://github.com/thejgdt", "_blank");
}

function handleTelegramClick() {
  window.open("https://t.me/Km30JR", "_blank");
}

function changeCursorToPointer(event) {
  event.target.style.cursor = "pointer";
}

const igLogo = document.getElementById("ig-logo");
const ghLogo = document.getElementById("gh-logo");
const tgLogo = document.getElementById("tg-logo");

const igText = document.getElementById("ig-text");
const ghText = document.getElementById("gh-text");
const tgText = document.getElementById("tg-text");

igLogo.addEventListener("click", handleInstagramClick);
ghLogo.addEventListener("click", handleGitHubClick);
tgLogo.addEventListener("click", handleTelegramClick);

igText.addEventListener("click", handleInstagramClick);
ghText.addEventListener("click", handleGitHubClick);
tgText.addEventListener("click", handleTelegramClick);