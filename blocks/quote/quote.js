export default function decorate(block) {
  const [p] = block.children;
  p.array.forEach((element) => {
    element.classList.add('custom-class');
  });
}
