function loadRandomQuote() {
  var filePath = "assets/random-quotes.txt";

  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((data) => {
      var quotesArray = data.split("\n");
      var randomQuote =
        quotesArray[Math.floor(Math.random() * quotesArray.length)];
      alert(randomQuote);
    })
    .catch((error) => console.error("Error fetching random quotes:", error));
}

var addressBarElement = document.getElementById("addressBar");

addressBarElement.addEventListener("click", function () {
  loadRandomQuote();
});