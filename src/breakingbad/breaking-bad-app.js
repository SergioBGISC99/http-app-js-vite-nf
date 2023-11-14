/**
 * @returns {Promise<Object>} quote information
 */
const fetchQuote = async () => {
  const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
  const data = await response.json();
  return data[0];
};

/**
 *
 * @param {HTMLDivElement} element
 */

export const BreakingBadApp = async (element) => {
  document.querySelector("#app-title").innerHTML = "Test App";
  element.innerHTML = "Loading...";
  //await fetchQuote();
  const quoteLabel = document.createElement("blockquote");
  const authorLabel = document.createElement("h3");
  const nextQuoteBtn = document.createElement("button");
  nextQuoteBtn.innerText = "Next Quote";

  const renderQuoute = (data) => {
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    element.replaceChildren(quoteLabel, authorLabel, nextQuoteBtn);
  };

  nextQuoteBtn.addEventListener("click", () => {
    element.innerHTML = "Loading...";
    fetchQuote().then(renderQuoute);
  });

  fetchQuote().then(renderQuoute);
};
