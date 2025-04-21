const productsInner = document.querySelector('.products__card');

async function getProducts() {
  const response = await fetch('https://6674a6f38f4aef2c.mokky.dev/products');
  const productsData = await response.json();
  
  //console.log(productsData);

  renderProducts(productsData);
};

function renderProducts(productsData) {
  productsData.forEach(product => {
    const productId = product.id;
    const productUrl = product.url;
    const productImg = product.image;
    const productLabels = product.labels;
    const productRating = product.rating;
    const productFavorite = product.favorite;
    const productTitle = product.title;
    const productPrice = product.price;
    const productOldPrice = product.priceOld;
    const productSizes = product.sizes;
    const productColors = product.colors;

    let productHtmlStart = `<article data-id="${productId}" class="small-card__body">`; 
    let productHtmlEnd = `</article>`;

    let productHtmlImage = `
            <a href="${productUrl}" class="small-card__img">
              <img src="./assets/images/products/small/${productImg}" alt="${productTitle}">
            </a>`;

    let productHtmlLabels = '';
    if (productLabels) {
      let productHtmlLabelsStart = `<div class="small-card__labels">`;
      let productHtmlLabelsEnd = `</div>`;
      let productHtmlLabelsContent = '';

      productLabels.forEach(labelItem => {
        productHtmlLabelsContent += `<div class="small-card__label small-card__label_${labelItem.type}">${labelItem.value}</div>`;
      });

      productHtmlLabels += productHtmlLabelsStart;
      productHtmlLabels += productHtmlLabelsContent;
      productHtmlLabels += productHtmlLabelsEnd;
    };

    let productHtmlRating = '';
    if (productRating) {
      let productHtmlRatingStart = `<div class="small-card__rating rating">`;
      let productHtmlRatingEnd = `</div>`;
      let productHtmlRatingContent = '';

      productRating.forEach(ratingItem => {
        productHtmlRatingContent += `
              <div class="rating__items" data-total-value="${ratingItem.value}">
                <div class="rating__item" data-item-value="5"></div>
                <div class="rating__item" data-item-value="4"></div>
                <div class="rating__item" data-item-value="3"></div>
                <div class="rating__item" data-item-value="2"></div>
                <div class="rating__item" data-item-value="1"></div>
              </div>`;
      });

      productHtmlRating += productHtmlRatingStart;
      productHtmlRating += productHtmlRatingContent;
      productHtmlRating += productHtmlRatingEnd;
    };

    let productHtmlFavorite = `<a href="${productFavorite}" class="small-card__favorite _icon-favorite"></a>`;


    let productHtmlInfoStart = `<div class="small-card__info">`;
    let productHtmlInfoEnd = `</div>`;
    let productHtmlInfoContent = `<div class="small-card__info-title">${productTitle}</div>`;

    let productHtmlPrices = '';
    let productHtmlPricesStart = `<div class="small-card__info-prices">`;
    let productHtmlPricesCurrent = `<div class="small-card__info-price">${productPrice} <span>&#8381;</span></div>`;
    let productHtmlPricesOld = `<div class="small-card__info-price small-card__info-price_old">${productOldPrice} <span>&#8381;</span></div>`;
    let productHtmlPricesEnd = `</div>`;

    productHtmlPrices = productHtmlPricesStart;
    productHtmlPrices += productHtmlPricesCurrent;
    if (productOldPrice) {
      productHtmlPrices += productHtmlPricesOld;
    }
    productHtmlPrices += productHtmlPricesEnd;

    let productHtmlHiddenStart = `<div class="small-card__info-hidden">`;
    let productHtmlHiddenEnd = `</div>`;
    let productHtmlHiddenContent = '<button class="small-card__info-btn btn _icon-basket"><span>В корзину</span></button>';

    let productHtmlCardDopStart = `<div class="small-card__dop card-dop">`;
    let productHtmlCardDopEnd = `</div>`;
    
    let productHtmlSizes = '';
    if (productSizes) {
      let productHtmlSizesStart = `<div class="card-dop__sizes">`;
      let productHtmlSizesEnd = `</div>`;
      let productHtmlSizesContent = '';

      productSizes.forEach(sizeItem => {
        productHtmlSizesContent += `<div class="card-dop__size">${sizeItem.size}</div>`;
      });

      productHtmlSizes += productHtmlSizesStart;
      productHtmlSizes += productHtmlSizesContent;
      productHtmlSizes += productHtmlSizesEnd;
    };

    let productHtmlColors = '';
    if (productColors) {
      let productHtmlColorsStart = `<div class="card-dop__colors">`;
      let productHtmlColorsEnd = `</div>`;
      let productHtmlColorsContent = '';

      productColors.forEach(colorItem => {
        productHtmlColorsContent += `
            <div class="card-dop__color">
              <div class="card-dop__color-circle ${colorItem.color}"></div>
            </div>`;
      });

      productHtmlColors += productHtmlColorsStart;
      productHtmlColors += productHtmlColorsContent;
      productHtmlColors += productHtmlColorsEnd;
    };

    let productHtmlInfo = '';
    productHtmlInfo += productHtmlInfoStart;
    productHtmlInfo += productHtmlInfoContent;
    productHtmlInfo += productHtmlPrices;
    productHtmlInfo += productHtmlHiddenStart;
    productHtmlInfo += productHtmlCardDopStart;
    productHtmlInfo += productHtmlSizes;
    productHtmlInfo += productHtmlColors;
    productHtmlInfo += productHtmlCardDopEnd;
    productHtmlInfo += productHtmlHiddenContent;
    productHtmlInfo += productHtmlHiddenEnd;
    productHtmlInfo += productHtmlInfoEnd;

    let productHtml = '';
    productHtml += productHtmlStart;
    productHtml += productHtmlImage;
    productHtml += productHtmlLabels;
    productHtml += productHtmlRating;
    productHtml += productHtmlFavorite;
    productHtml += productHtmlInfo;
    productHtml += productHtmlEnd;

    productsInner.insertAdjacentHTML('beforeend', productHtml);

  });
};

getProducts();