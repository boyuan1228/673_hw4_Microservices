function getJSONPQuote() {
  const callbackName = "forismaticCallback_" + new Date().getTime();

  window[callbackName] = function (data) {
    const quoteText = data.quoteText;
    const quoteAuthor = data.quoteAuthor || "Unknown";
    document.getElementById(
      "quoteDisplay"
    ).innerHTML = `<p>"${quoteText}"</p><p>- ${quoteAuthor}</p>`;

    document.body.removeChild(document.getElementById(callbackName));
    delete window[callbackName];
  };

  const script = document.createElement("script");
  script.id = callbackName;
  script.src = `https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=${callbackName}`;
  document.body.appendChild(script);
}

document
  .getElementById("newQuoteButton")
  .addEventListener("click", getJSONPQuote);

function searchQuote() {
  const author = document.getElementById("author").value;
  const keyword = document.getElementById("keyword").value;
  const callbackName = "forismaticSearchCallback_" + new Date().getTime();

  window[callbackName] = function (data) {
    const quoteText = data.quoteText;
    const quoteAuthor = data.quoteAuthor || "Unknown";
    document.getElementById(
      "quoteDisplay"
    ).innerHTML = `<p>"${quoteText}"</p><p>- ${quoteAuthor}</p>`;

    document.body.removeChild(document.getElementById(callbackName));
    delete window[callbackName];
  };

  const script = document.createElement("script");
  script.id = callbackName;
  script.src = `https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=${callbackName}&key=${Math.floor(
    Math.random() * 999999
  )}&author=${encodeURIComponent(author)}&keyword=${encodeURIComponent(
    keyword
  )}`;
  document.body.appendChild(script);
}

document.getElementById("searchButton").addEventListener("click", searchQuote);
