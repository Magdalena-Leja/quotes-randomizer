const API =
  "https://private-anon-605b4a9238-goquotes.apiary-proxy.com/api/v1/random?count=1";

async function generateQuote() {
  const response = await fetch(API);
  const data = await response.json();
  const quote = data.quotes[0];
  document.querySelector(".quote").textContent = quote.text;
  document.querySelector(".author").textContent = "- " + quote.author;
}

function share() {
  const quote = document.querySelector(".quote").textContent;
  const author = document.querySelector(".author").textContent;
  const apiUrl = "https://www.facebook.com/dialog/feed?display=popup";
  const appId = "app_id=396411671918152";
  const siteUrl = "link=https://quotes-randomizer.herokuapp.com/";
  const text = `quote="${quote}" ${author}`;
  const url = `${apiUrl}&${appId}&${siteUrl}&${text}`;
  window.open(url, "share", "width=800,height=600");
}
