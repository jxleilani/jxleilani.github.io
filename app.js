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

// RENDER PORTFOLIO
const portfolio = [
  { 
    title: "Da.Mo.Jo - Virtual Closet",
    image: "./Assets/img/DaMoJo.png",
    url: "https://project2-damojo.herokuapp.com/",
    github: "https://github.com/jxleilani/project2",
    desc: `A virtual closet experience in a full stack application. Upload images of your clothing items and pair them together for the perfect outfit.
    <br><br><em>Technologies Used:</em><br>
    Node Express Handlebars Passport Bcrypt Bootstrap MySQL Heroku`
  },
  { 
    title: "Weather App",
    image: "./Assets/img/Weather.png",
    url: "https://jxleilani.github.io/Weather/",
    github: "https://github.com/jxleilani/Weather",
    desc: `A 7 day weather forecast searchable by location.
    <br>*Not supported by Safari.
    <br><br><em>Technologies Used:</em><br>
    HTML CSS JS jQuery Geolocation OpenWeatherMapAPI`
  },
  { 
    title: "Homework Helper",
    image: "./Assets/img/hwhelper.png",
    url: "https://vscacchitti.github.io/HomeworkHelper/",
    github: "https://github.com/VScacchitti/HomeworkHelper",
    desc: `Concept design created for kids grades K-12. An online platform to keep track of and work on homework assignments while having fun.
    <br><br><em>Technologies Used:</em><br>
    AJAX GrammarBotAPI TwinWordAPI Slider.js Materialize`
  },
  {
    title: "Build-A-Burger",
    image: "./Assets/img/Burger.png",
    url: "https://quiet-beyond-71421.herokuapp.com/",
    github: "https://github.com/jxleilani/burger",
    desc: `Create burgers && devour them too!. Dynamically create burger items and click to eat them. This application responds dynamically as burgers are built. When a burger is devoured, it will move to the right side of the page. Views are created using express-handlebars and data is stored via MySQL. This application has been deployed to Heroku.
    <br><br><em>Technologies Used:</em><br>
    Node Express Handlebars MySQL Heroku Bootstrap`
  },
  {
    title: "Note Taker",
    image: "./Assets/img/NoteTaker.png",
    url: "https://blooming-spire-75700.herokuapp.com/",
    github: "https://github.com/jxleilani/Note-Taker",
    desc: `Create and save notes. This application uses an express.js server to save and retrieve data from a JSON file. The interface also allows the user to delete notes, which removes the selected note from the JSON file.
    <br><br><em>Technologies Used:</em><br>
    HTML CSS JavaScript jQuery Node Express Heroku`
  },
  {
    title: "JavaScript Quiz",
    image: "./Assets/img/QuizApp.png",
    url: "https://jxleilani.github.io/QuizApp/", 
    github: "https://github.com/jxleilani/QuizApp",
    desc: `Timed JavaScript Quiz with high scores.
    <br><br><em>Technologies Used:</em><br>
    HTML CSS JavaScript`
  },
  {
    title: "Day Planner",
    image: "./Assets/img/DayPlanner.png",
    url: "https://jxleilani.github.io/DayPlanner/", 
    github: "https://github.com/jxleilani/DayPlanner",
    desc: `24 hour task planner. The Day Planner app displays the current day of the week, date, and current local time. 24 time blocks are displayed for the 24 hours of the current day. Time blocks shown in gray are in the past, time blocks in red are the current hour block, and time blocks in green are hours in the future. The user can can add text to any time block and then click the save button to save to local storage.
    <br><br><em>Technologies Used:</em><br>
    HTML CSS JavaScript jQuery Bootstrap`
  },
  {
    title: "Password Generator",
    image: "./Assets/img/PassGen.png",
    url: "https://jxleilani.github.io/PasswordGenerator/",
    github: "https://github.com/jxleilani/PasswordGenerator",
    desc: `Create a random password based on character type selection. The user is prompted for the length of the password, and whether or not they want to include lowercase letters, uppercase letters, numbers, or symbols. Based on the user's responses, the app uses JavaScript to put together a password of the selected length, using the selected character types.
    <br><br><em>Technologies Used:</em><br>
    HTML CSS JavaScript`
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
