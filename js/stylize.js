<script>
  document.addEventListener("DOMContentLoaded", () => {
    // List of words to stylize
    const targetWords = ["experience", "explore", "expression", "expert", "exterior"];
    
    // Create a regular expression matching any of the target words (case-insensitive)
    const regex = new RegExp(`\\b(${targetWords.join("|")})\\b`, "gi");

    // Function to transform matching text
    function replaceText(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        if (regex.test(node.nodeValue)) {
          const span = document.createElement("span");
          span.innerHTML = node.nodeValue.replace(regex, (match) => {
            // Capitalize X and R: e.g., "expert" -> "eXPert"
            const stylized = match.charAt(0).toLowerCase() + "XP" + match.slice(3).toLowerCase();
            return `<span class="styled-xp">${stylized}</span>`;
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
</script>
