export default function decorate(block) {
  const [quoteText, author] = block.querySelectorAll('p');
  block.innerHTML = (`<p class="quote-text">${quoteText.textContent}</p>
    <p class="quote-author">${author.textContent}</p>`);
}
