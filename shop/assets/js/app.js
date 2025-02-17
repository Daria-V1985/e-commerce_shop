// Display count-currency dropdown

// Open/close sub-menu
document.addEventListener('click', documentActions);

const documentActions = (e) => {
  const targetElement = e.target;
  if (targetElement.closest('[data-parent]')) {
    const subMenuId = targetElement.dataset.parent ? targetElement.dataset.parent : null;
    const subMenu = document.querySelector(`[data-submenu = '${subMenuId}']`);

    if (subMenu) {
      targetElement.classList.toggle('_sub-menu-active');
			subMenu.classList.toggle('_sub-menu-open');
    } else {
      console.log('Такого подменю нет!')
    }

    e.preventDefault();
  }
}