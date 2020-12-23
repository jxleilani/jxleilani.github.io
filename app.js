$('.menu-toggle').on('click', function() {
  $(this).toggleClass('open');
  $('.nav').toggleClass('open');
  $('.bar-start').toggleClass('open');
  $('.bar-mid').toggleClass('open');
  $('.bar-end').toggleClass('open');
  $('body').toggleClass('open');
});
$('.nav-link').on('click', function() {
  $('.nav').toggleClass('open');
  $('.bar-start').toggleClass('open');
  $('.bar-mid').toggleClass('open');
  $('.bar-end').toggleClass('open');
  $('body').toggleClass('open');
});

function renderPortfolio() {
  for(let i=0;i<portfolio.length;i++){
    if(i % 2 == 0){
      let item = portfolio[i];
      const html = `
        <div class="portfolio-item">
          <div class="portfolio-img item-${i}" data-aos="fade-up-left">
            <a href="${item.url}" target="_blank"><img src="${item.image}" alt="${item.alt}"></a>
          </div>
          <div class="portfolio-desc item-2">
            <h6>${item.title}</h6>
            <p>${item.desc}</p>
            <div class="icon">
              <a href="${item.github}" target="_blank"><i class="fab fa-github"></i> View Repository</a>
            </div>
          </div>
        </div>
      `;
      $('.portfoliocontainer').append(html);
    }else{
      let item = portfolio[i];
      const html = `
        <div class="portfolio-item">
          <div class="portfolio-img item-${i}" data-aos="fade-up-right">
            <a href="${item.url}"><img src="${item.image}"></a>
          </div>
          <div class="portfolio-desc item-2">
            <h6>${item.title}</h6>
            <p>${item.desc}</p>
            <div class="icon">
              <a href="${item.github}"><i class="fab fa-github"></i> View Repository</a>
            </div>
          </div>
        </div>
      `;
      $('.portfoliocontainer').append(html);
    }
  }
}
renderPortfolio();
// END RENDER PORTFOLIO
