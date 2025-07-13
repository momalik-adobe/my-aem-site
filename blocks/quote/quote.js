export default function decorate(block) {
  const quoteBlock = document.createElement('blockquote');
  quoteBlock.className = 'quote-block';
  const quoteText = block.querySelector('.quote-text') || document.createElement('p');
  quoteText.className = 'quote-text';
  quoteText.textContent = block.dataset.quote || 'Quote text goes here.';
  const author = block.querySelector('.quote-author') || document.createElement('cite');
  author.className = 'quote-author';
  author.textContent = block.dataset.author || 'Author Name';

  // Append the text and author to the quote block
  quoteBlock.append(quoteText, author);
  block.append(quoteBlock);
}
