// Accardion

const items = Array.from(document.querySelectorAll('.filter-catalog__item'));

items.forEach(item => {
  item.addEventListener('click', itemHandler);
});

function itemHandler(e) {
  e.preventDefault();
  let currentItem = e.target.closest('.filter-catalog__item');
  let currentContent = e.target.nextElementSibling;
  currentItem.classList.toggle('open');
  if (currentItem.classList.contains('open')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
  } else {
    currentContent.style.maxHeight = 0;
  }
}