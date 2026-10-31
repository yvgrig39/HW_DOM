const blocks = document.querySelectorAll('.reveal');

function showBlocks() {
  for (const block of blocks) {
    const position = block.getBoundingClientRect();

    if (position.top < window.innerHeight && position.bottom > 0) {
      block.classList.add('reveal_active');
    }
  }
}

window.addEventListener('scroll', showBlocks);
showBlocks();
