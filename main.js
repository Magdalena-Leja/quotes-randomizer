const API =
  "https://private-anon-605b4a9238-goquotes.apiary-proxy.com/api/v1/random?count=1";

async function generateQuote() {
  const response = await fetch(API);
  const data = await response.json();
  const quote = data.quotes[0];
  document.querySelector(".quote").textContent = quote.text;
  document.querySelector(".author").textContent = "- " + quote.author;
}
