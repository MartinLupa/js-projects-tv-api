//Query Selectors
const searchForm = document.querySelector('#searchForm');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

//Event Listeners
searchForm.addEventListener('submit', async function (e) {
  let q = searchInput.value;

  //GET Request to TV Maze API with AXIOS
  axios
    //API Example: https://api.tvmaze.com/search/shows?q=girls
    .get(`https://api.tvmaze.com/search/shows?q=${q}`)
    .then((res) => {
      let movieSelection = res.data;
      //console.log(movieSelection);

      //Iterate over data to extract the required information to create new cards to display in HTML.
      for (i = 0; i < movieSelection.length; i++) {
        let movieName = movieSelection[i].show.name;
        let movieImage = movieSelection[i].show.image.medium;
        let movieSummary = movieSelection[i].show.summary;
        let movieUrl = movieSelection[i].show.url;
        console.log(movieUrl);

        //Create new elements and asign the extracted data to them.
        //Card creation
        const movieCard = document.createElement('div');
        movieCard.setAttribute('class', 'movieCard');
        //Card organizer container creation
        const midCard = document.createElement('div');
        midCard.setAttribute('class', 'midCard');
        //Card image
        const cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'cardImg');
        cardImg.setAttribute('src', movieImage);
        movieCard.appendChild(cardImg);
        //Card title
        const cardTitle = document.createElement('h4');
        cardTitle.setAttribute('class', 'cardTitle');
        cardTitle.innerText = movieName.toUpperCase();
        midCard.appendChild(cardTitle);

        //Card description/summary
        const cardDescription = document.createElement('p');
        cardDescription.innerHTML = movieSummary;
        midCard.appendChild(cardDescription);
        //Card link
        const cardLink = document.createElement('a');
        cardLink.innerText = 'Watch movie';
        cardLink.setAttribute('class', 'cardLink');
        cardLink.setAttribute('href', movieUrl);
        midCard.appendChild(cardLink);
        //Finally adding the organizer container to the Card
        movieCard.appendChild(midCard);

        //Append each card to container.
        let main = document.querySelector('main');
        main.appendChild(movieCard);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //Prevents browser´s default behaviour of submitting the form to the servers.
  e.preventDefault();

  //Clears the form´s inputs.
  searchForm.reset();
});

//Crear form y escuchar eventos.
//Hacer una request a la API.
//La info que vuelve, hacer un display de las peliculas

//   //Creates elements of each new movie card.
//   const movieCard = document.createElement('div');
//   movieCard.setAttribute('.movieCard');
//   const cardImg = document.createElement('img');
//   cardImg.setAttribute('.cardImg');
//   const cardTitle = document.createElement('h4');
//   cardTitle.setAttribute('.cardTitle');
//   const cardDescription = document.createElement('p');
//   const cardLink = document.createElement('a');

//   //Sets data attributes to elements in each card.
// }

/*   <div class="movieCard">
        <img class="cardImg" src="" alt="" />
        <div class="midCard">
          <h4 class="cardTitle">Title</h4>    
          <p class="cardDescription">Description</p>
          <a class="cardLink" href="">Watch movie!</a>
        </div>
        
      </div> */
