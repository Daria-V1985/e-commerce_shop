const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(dropDownWrapper => {
  const dropdownBtn = dropDownWrapper.querySelector('.dropdown__button');
  const dropdownList = dropDownWrapper.querySelector('.dropdown__list');
  const dropdownListItem = dropdownList.querySelectorAll('.dropdown__list-item');
  const dropdownInputHidden = dropDownWrapper.querySelector('.dropdown__input-hidden');

  // Sorting by popular/rating/price

  dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list--visible');
    this.classList.add('dropdown__list--active');
  });

  dropdownListItem.forEach(item => {
    item.addEventListener('click', openListItem);
  });

  // Hide dropdown

  document.addEventListener('click', (e) => {
    if (e.target !== dropdownBtn) {
      dropdownBtn.classList.remove('dropdown__list--active');
      dropdownList.classList.remove('dropdown__list--visible');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropdownBtn.classList.remove('dropdown__list--active');
      dropdownList.classList.remove('dropdown__list--visible');
    }
  })

  function openListItem(e) {
    e.stopPropagation;
    dropdownBtn.innerHTML = this.innerText + '<span class="_icon-down-chevron"></span>';
    dropdownBtn.focus();
    dropdownInputHidden.value = this.dataset.value;
    dropdownList.classList.remove('dropdown__list--visible');
  }
});

// Sorting count products on the page

const viewCountInput = document.querySelector('.input-short');
const viewCountArrowUp = document.querySelector('.view-count__arrow-up');
const viewCountArrowDown = document.querySelector('.view-count__arrow-down');

viewCountArrowUp.addEventListener('click', () => {
    const currentValue = parseInt(viewCountInput.value);
    const maxValue = parseInt(viewCountInput.max);
    if (currentValue < maxValue) {
      viewCountInput.value = currentValue + 3;
    }
  });

  viewCountArrowDown.addEventListener('click', () => {
    const currentValue = parseInt(viewCountInput.value);
    const minValue = parseInt(viewCountInput.min);
    if (currentValue > minValue) {
      viewCountInput.value = currentValue - 3;
    }
  });

// Range slider

const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [20450, 63000],
		connect: true,
		step: 1,
    range: {
			'min': [500],
			'max': [120000]
    }
	});

  const minNum = document.getElementById('min_num');
	const maxNum = document.getElementById('max_num');
	const inputs = [minNum, maxNum];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		console.log(arr);

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			console.log(index);
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}