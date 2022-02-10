window.addEventListener("load", function() {

    const body = document.querySelector("body");
    body.style.fontFamily = '"Outfit", sans-serif';
    body.style.backgroundColor = "hsl(217, 54%, 11%)";
    body.style.minHeight = "100vh";
    body.style.padding = "25px";
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";

    let wrapper = document.createElement('div');
    wrapper.id = "wrapper";
    body.append(wrapper);

    // Card
    let card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundColor = 'hsl(216, 50%, 16%)';
    card.style.maxWidth = '350px';
    card.style.padding = '24px';
    card.style.borderRadius = '15px';
    card.style.boxShadow = '0px 20px 15px 15px rgb(0, 0, 0, 0.05), 0px 40 px 30px 5px rgb(0, 0, 0, 0.01)';
    wrapper.append(card);

    let cardHead = document.createElement('div');
    cardHead.className = 'card-head';
    card.append(cardHead);

    let cardProductImg = document.createElement('div');
    cardProductImg.className = 'card-product-image';
    cardProductImg.style.position = 'relative';
    cardProductImg.style.cursor = 'pointer';
    cardProductImg.style.borderRadius = '8px';
    cardHead.append(cardProductImg);

    let cardProductImgImage = document.createElement('img');
    cardProductImgImage.alt = 'image-equilibrium';
    cardProductImgImage.src = './images/image-equilibrium.jpg';
    cardProductImgImage.style.width = '100%';
    cardProductImgImage.style.borderRadius = '10px';
    cardProductImg.append(cardProductImgImage);

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    cardBody.style.padding = '20px 0';
    cardBody.style.borderBottom = '1px solid hsl(215, 32%, 27%)';
    card.append(cardBody);

    let cardBodyA = this.document.createElement('a');
    cardBodyA.href = '#';
    cardBodyA.style.color = '#fff';
    cardBody.append(cardBodyA);

    let cardTitle = this.document.createElement('h3');
    cardTitle.className = 'card-title';
    cardTitle.style.fontSize = '22px';
    cardTitle.style.fontWeight = '700';
    cardTitle.style.marginBottom = '15px';
    cardTitle.style.textTransform = 'capitalize';
    cardTitle.textContent = 'Equilibrium #3429';
    cardBodyA.append(cardTitle);

    let cardText = this.document.createElement('p');
    cardText.className = 'card-text';
    cardText.style.fontSize = '18px';
    cardText.style.color = 'hsl(216, 30%, 55%)';
    cardText.style.marginBottom = '23px';
    cardText.style.lineHeight = '1.5';
    cardText.style.textTransform = 'capitalize';
    cardText.textContent = 'Our equilibrium collection promotos balence and calm.';

    cardBody.append(cardText);

    let cardWrapper = this.document.createElement('div');
    cardWrapper.className = 'card-wrapper';
    cardWrapper.style.display = 'flex';
    cardWrapper.style.justifyContent = 'space-between';
    cardWrapper.style.alignItems = 'center';
    cardBody.append(cardWrapper);

    let cardPrice = this.document.createElement('div');
    cardPrice.className = 'card-price';
    cardPrice.style.display = 'flex';
    cardPrice.style.justifyContent = 'center';
    cardPrice.style.alignItems = 'center';
    cardPrice.style.fontSize = '18px';
    cardWrapper.append(cardPrice);

    let cardPriceImg = document.createElement('img');
    cardPriceImg.alt = 'icon-ethereum';
    cardPriceImg.src = './images/icon-ethereum.svg';
    cardPrice.append(cardPriceImg);

    let cardPriceSpan = document.createElement('span');
    cardPriceSpan.textContent = '0.041 eth';
    cardPriceSpan.style.color = 'hsl(178, 100%, 50%)';
    cardPriceSpan.style.textTransform = 'uppercase';
    cardPriceSpan.style.fontWeight = 'bold';
    cardPrice.append(cardPriceSpan);

    let cardCountdown = this.document.createElement('div');
    cardCountdown.className = 'card-countdown';
    cardCountdown.style.display = 'flex';
    cardCountdown.style.justifyContent = 'center';
    cardCountdown.style.alignItems = 'center';
    cardCountdown.style.fontSize = '18px';
    cardWrapper.append(cardCountdown);

    let cardCcoutdownImg = document.createElement('img');
    cardCcoutdownImg.alt = 'icon-clock';
    cardCcoutdownImg.src = './images/icon-clock.svg';
    cardCountdown.append(cardCcoutdownImg);

    let cardCcoundownSpan = document.createElement('span');
    cardCcoundownSpan.textContent = '3 days left';
    cardCcoundownSpan.style.color = 'hsl(218, 30%, 89%)';
    cardCountdown.append(cardCcoundownSpan);

    let cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    cardFooter.style.marginTop = '20px';
    cardFooter.style.display = 'flex';
    cardFooter.style.alignItems = 'center';
    card.append(cardFooter);

    let cardFooterImg = document.createElement('img');
    cardFooterImg.style.width = '35px';
    cardFooterImg.style.height = '35px';
    cardFooterImg.style.marginRight = '15px';
    cardFooterImg.style.border = '1px solid #fff';
    cardFooterImg.style.borderRadius = '50%';
    cardFooterImg.alt = 'image-avatar';
    cardFooterImg.src = './images/image-avatar.png';
    cardFooter.append(cardFooterImg);

    let cardAuthorName = this.document.createElement('p');
    cardAuthorName.className = 'card-author-name';
    cardAuthorName.textContent = 'creation of ';
    cardAuthorName.style.color = 'hsl(218, 30%, 89%)';
    cardAuthorName.style.fontWeight = '500';
    cardAuthorName.style.textTransform = 'capitalize';
    cardFooter.append(cardAuthorName);

    let cardAuthorNameA = this.document.createElement('a');
    cardAuthorNameA.href = '#';
    cardAuthorNameA.textContent = ' nouradin aden';
    cardAuthorNameA.style.color = '#fff';
    cardAuthorNameA.style.fontWeight = '700';
    cardFooter.append(cardAuthorNameA);

    this.alert('Я оцениваю свою работу на ___ баллов');
});