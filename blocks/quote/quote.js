export default function decorate(block) {
  const [quoteText, auhtor] = block.querySelectorAll('p');
  block.innerHTML = (`<span class="quote-text">${quoteText.textContent}</span>
    <span class="quote-author">${auhtor.textContent}</span>`);
}
