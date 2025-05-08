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

// Upward

const scroll = document.querySelector('.upward');

window.addEventListener('scroll', (e) => {
  scroll.classList.toggle('up', window.scrollY > 1400);
});

scroll.addEventListener('click', (e) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// Form Validate

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.form');

  forms.forEach(item => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      let error = formValidate(item);
    });
  })

  function formValidate(forms) {
    let error = 0;
    let formRequired = document.querySelectorAll('.req'); 
    
    for (let i = 0; i < formRequired.length; i++) {
      const input = formRequired[i];
      formRemoveError(input)
      if (input.classList.contains('email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  };

  function formAddError(input) {
    input.parentElement.classList.add('error');
    input.classList.add('error');
  };

  function formRemoveError(input) {
    input.parentElement.classList.remove('error');
    input.classList.remove('error');
  };

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});

// Click show password

const formInputPass = document.querySelectorAll('.form__input--pass');
const formIconBtns = document.querySelectorAll('.form__icon-btn');

for (let i = 0; i < formIconBtns.length; i++) {
  formIconBtns[i].addEventListener('click', () => {
    if (formInputPass[i].type === 'password') {
      formInputPass[i].type = 'text';
      formIconBtns[i].classList.add('active');
    } else {
      formInputPass[i].type = 'password';
      formIconBtns[i].classList.remove('active');
    }
  });
}

