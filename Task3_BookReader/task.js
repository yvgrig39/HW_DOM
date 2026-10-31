const book = document.getElementById('book');
const buttons = document.querySelectorAll('.font-size');

for (const button of buttons) {
  button.addEventListener('click', function (event) {
    event.preventDefault();

    for (const sizeButton of buttons) {
      sizeButton.classList.remove('font-size_active');
    }

    button.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = button.dataset.size;

    if (size === 'small') {
      book.classList.add('book_fs-small');
    } else if (size === 'big') {
      book.classList.add('book_fs-big');
    }
  });
}
