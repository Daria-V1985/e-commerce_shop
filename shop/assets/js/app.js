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

function accordeonHandler() {
  const filterCatalogItem = document.querySelectorAll('.filter-catalog__item');
  const filterCatalogItemTitle = document.querySelectorAll('.filter-catalog__item-title');

  filterCatalogItemTitle.forEach((title) => {
    title.addEventListener('click', () => {
      const parent = title.parentElement;

      if(!parent.classList.contains('active')) {
        parent.classList.add('active');
      } else {
        parent.classList.remove('active');
      }
    });
  });
}

accordeonHandler();



