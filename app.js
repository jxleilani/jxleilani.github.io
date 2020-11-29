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
})

// RENDER PORTFOLIO
const portfolio = [
  { 
    title: "Da.Mo.Jo - Virtual Closet",
    image: "./Assets/img/DaMoJo.png",
    url: "https://project2-damojo.herokuapp.com/",
    github: "https://github.com/jxleilani/project2",
    desc: "A virtual closet experience. Upload images of your clothing items and pair them together for the perfect outfit."
  },
  { 
    title: "Weather App",
    image: "./Assets/img/Weather.png",
    url: "https://jxleilani.github.io/Weather/",
    github: "https://github.com/jxleilani/Weather",
    desc: "A 7 day weather forecast searchable by location."
  },
  { 
    title: "Homework Helper",
    image: "./Assets/img/hwhelper.png",
    url: "https://vscacchitti.github.io/HomeworkHelper/",
    github: "https://github.com/VScacchitti/HomeworkHelper",
    desc: "Concept design created for kids grades K-12. An online platform to keep track of and work on homework assignments while having fun."
  },
  {
    title: "Build-A-Burger",
    image: "./Assets/img/Burger.png",
    url: "https://quiet-beyond-71421.herokuapp.com/",
    github: "https://github.com/jxleilani/burger",
    desc: "Create burgers && devour them too!. Dynamically create burger items and click to eat them."
  },
  {
    title: "Note Taker",
    image: "./Assets/img/NoteTaker.png",
    url: "https://blooming-spire-75700.herokuapp.com/",
    github: "https://github.com/jxleilani/Note-Taker",
    desc: "Create and save notes."
  },
  {
    title: "JavaScript Quiz",
    image: "./Assets/img/QuizApp.png",
    url: "https://jxleilani.github.io/QuizApp/", 
    github: "https://github.com/jxleilani/QuizApp",
    desc: "Timed JavaScript Quiz with high scores."
  },
  {
    title: "Day Planner",
    image: "./Assets/img/DayPlanner.png",
    url: "https://jxleilani.github.io/DayPlanner/", 
    github: "https://github.com/jxleilani/DayPlanner",
    desc: "24 hour task planner."
  },
  {
    title: "Password Generator",
    image: "./Assets/img/PassGen.png",
    url: "https://jxleilani.github.io/PasswordGenerator/",
    github: "https://github.com/jxleilani/PasswordGenerator",
    desc: "Create a random password based on character type selection."
  }
];

function renderPortfolio() {
  for(let i=0;i<portfolio.length;i++){
    if(i % 2 == 0){
      let item = portfolio[i];
      const html = `
        <div class="portfolio-item">
          <div class="portfolio-img item-${i}" data-aos="fade-up-left">
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
