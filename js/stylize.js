document.addEventListener("DOMContentLoaded", () => {
  // Map words to capitalize ONLY the first X and first R
  const wordMap = {
    "experience": "eXpeRience",
    "explore": "eXploRe",
    "expression": "eXpRession",
    "expert": "eXpeRt",
    "exterior": "eXpeRior"
  };

  // Build a regex pattern for all target words
  const regex = new RegExp(`\\b(${Object.keys(wordMap).join("|")})\\b`, "gi");

  function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (regex.test(node.nodeValue)) {
        const span = document.createElement("span");
        span.innerHTML = node.nodeValue.replace(regex, (match) => {
          const replacement = wordMap[match.toLowerCase()];
          return `<span class="styled-xp">${replacement}</span>`;
        });
        node.parentNode.replaceChild(span, node);
      }
    } else if (node.nodeType === Node.ELEMENT_NODE && node.nodeName !== "SCRIPT" && node.nodeName !== "STYLE") {
      for (let i = 0; i < node.childNodes.length; i++) {
        replaceText(node.childNodes[i]);
      }
    }
  }

  replaceText(document.body);
});
