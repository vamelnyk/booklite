function showBookDetail(bookIndex) {
  const bookDetailDialog = document.getElementById('bookDetailDialog');
  const detailBookImage = document.getElementById('detailBookImage');
  const detailBookTitle = document.getElementById('detailBookTitle');
  const detailBookDescription = document.getElementById('detailBookDescription');

  const bookItem = document.querySelectorAll('.book-item')[bookIndex - 1];
  const bookImage = bookItem.querySelector('img');
  const bookTitle = bookItem.querySelector('.book-info .book-item-title').textContent;
  const bookDescription = bookItem.querySelector('.book-info .book-item-author').textContent;

  detailBookImage.src = bookImage.src;
  detailBookTitle.textContent = bookTitle;
  detailBookDescription.textContent = bookDescription;

  document.body.classList.add('scroll-disabled');

  // Show the overlay
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'block';

  bookDetailDialog.classList.add('show');
}

function closeBookDetail() {
  document.body.classList.remove('scroll-disabled');

  const bookDetailDialog = document.getElementById('bookDetailDialog');

  // Hide the overlay
  const overlay = document.getElementById('overlay');
  overlay.style.display = 'none';

  bookDetailDialog.classList.remove('show');
}

document.addEventListener('DOMContentLoaded', function () {
  const bookItems = document.querySelectorAll('.book-item');

  bookItems.forEach((bookItem) => {
    bookItem.addEventListener('click', () => {
      showBookDetail(Array.from(bookItems).indexOf(bookItem) + 1);
    });
  });

  const bookDetailDialog = document.getElementById('bookDetailDialog');
  bookDetailDialog.addEventListener('click', (event) => {
    if (event.target === bookDetailDialog) {
      closeBookDetail();
    }
  });

  // Close the dialog when clicking the overlay
  const overlay = document.getElementById('overlay');
  overlay.addEventListener('click', closeBookDetail);
});
