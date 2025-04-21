// Accardion

function accordeonHandler() {
  const filterCatalogItem = document.querySelectorAll('.filter-catalog__item');
  const filterCatalogItemTitle = document.querySelectorAll('.filter-catalog__item-title');

  filterCatalogItemTitle.forEach(title => {
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

/* // Open/close submenu list

const catalogMenuLinks = document.querySelectorAll('.catalog-menu__link');
const subMenuCatalog = document.querySelectorAll('.sub-menu-catalog');

    for (let index = 0; index < catalogMenuLinks.length; index++) {
      const submenuParent = catalogMenuLinks[index];
      submenuParent.addEventListener('click', function (e) {
        submenuParent.parentElement.classList.toggle('active-menu');
        //e.preventDefault();
      });
    }     */