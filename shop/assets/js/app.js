// Open/close filters list

const catalogFiltersBtn = document.querySelector('.catalog-control__btn');

catalogFiltersBtn.addEventListener('click', catalogBtnOpen);

function catalogBtnOpen() {
  const catalogControlBtnText = document.querySelector('.catalog-control__btn-text');
  const catalogBody = document.querySelector('.catalog__body');
  const filterCatalogItems = document.querySelector('.filter-catalog__items');
  const productsCard = document.querySelector('.products__card');
  
  if (filterCatalogItems.classList.toggle('open-filter')) {
    catalogBody.classList.add('open-filter');
    productsCard.classList.add('open-filter');
    catalogControlBtnText.textContent = 'Спрятать фильтры';
  } else {
    catalogBody.classList.remove('open-filter');
    productsCard.classList.remove('open-filter');
    catalogControlBtnText.textContent = 'Показать фильтры';
  }
};

// Accardion




/* catalogFilters.forEach(item => {
  item.addEventListener('click', itemHandler);
});

function itemHandler(e) {
  //e.preventDefault();
  let catalogFilters = e.target.closest('.filter-catalog__item');
  let contentItem = e.target.nextElementSibling;
  e.currentTarget.classList.toggle('open');
  if (catalogFilters.classList.contains('open')) {
    contentItem.style.maxHeight = contentItem.scrollHeight + 'px';
  } else {
    contentItem.style.maxHeight = 0;
  }
}  */

