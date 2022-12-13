/* Las imágenes de movieDB vienen con una URL de base la cual se tiene que colocar en conjunto con lo que venga en el objeto de cada película para que la imagen aparezca. Guardamos esta en una constante. 
Para mas referencia :  https://developers.themoviedb.org/3/getting-started/images . Elegimos para esta APP el tamaño original.
*/
const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

const btnContainer = document.querySelector(".pagination");
const previousPageBtn = document.querySelector(".left");
const nextPageBtn = document.querySelector(".right");
const cardsContainer = document.querySelector(".cards-container");
const pageNumber = document.querySelector(".page-number");
const filterButtons = document.querySelectorAll(".btn");
const filterContainer = document.querySelector(".filter-container");

const pageController = {
  page: null,
  total: null,
  searchParameter: TRENDING_URL,
};

const renderLoader = () => {
  return `
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    `;
};

const formatDate = (date) => {
  // 2022-10-30 -> 30/10/2022
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
  /* const newDate = date.split('-').reverse().join('/')
    return newDate */
};

const getMovieCardHtml = ({
  title,
  release_date,
  vote_average,
  poster_path,
}) => {
  return `
        <div class="card">
            <img 
                loading="lazy"
                src=${
                  poster_path
                    ? ImgBaseUrl + poster_path
                    : "./img/placeholder.png"
                }
                alt="${title}"
                class="card-img"
            />
            <div class="card-popularity">
                ${Math.floor(vote_average * 10)}% de popularidad
            </div>
            <div>
                <h2>${title}</h2>
                <p>Fecha de estreno: ${formatDate(release_date)}</p>
            </div>
        </div>
    `;
};
const renderCards = (movies) => {
  cardsContainer.innerHTML = movies
    .map((movie) => getMovieCardHtml(movie))
    .join("");
};

const getMovies = async () => {
  // monstrar el loader
  cardsContainer.innerHTML = renderLoader();
  // llamar a la API
  const movies = await fetchMovies(pageController.searchParameter);
  // actualizar mi pageController
  pageController.total = movies.total_pages;
  pageController.page = movies.page;
  // manejar la pagination
  setPagination();
  // renderizar las cards
  renderCards(movies.results);
};

const getParameterUrl = (filterType) =>
  filterType === "TOPRATED"
    ? TOPRATED_URL
    : filterType === "UPCOMING"
    ? UPCOMING_URL
    : TRENDING_URL;

const changeSearchParameter = (e) => {
  // console.log("me hiciste click");
  if (
    !e.target.classList.contains("btn") ||
    e.target.classList.contains("btn--active")
  )
    return;
  // console.log("click en un boton");

  const selecteSearchParameter = e.target.dataset.filter;
  pageController.searchParameter = getParameterUrl(selecteSearchParameter);

  const buttons = [...filterButtons];
  buttons.forEach((btn) => {
    if (btn.dataset.filter !== selecteSearchParameter) {
      btn.classList.remove("btn--active");
    } else {
      btn.classList.add("btn--active");
    }
  });

  getMovies();
};

const disablePreviousBtn = (page) => {
  if (page === 1) {
    previousPageBtn.classList.add("disabled");
  } else {
    previousPageBtn.classList.remove("disabled");
  }
};

const disableNextBtn = (page, total) => {
  if (page === total) {
    nextPageBtn.classList.add("disabled");
  } else {
    nextPageBtn.classList.remove("disabled");
  }
};

const setPagination = () => {
  pageNumber.innerHTML = `${pageController.page} de ${pageController.total}`;
  disablePreviousBtn(pageController.page);
  disableNextBtn(pageController.page, pageController.total);
};

const loadAndShow = (movies) => {
  setTimeout(() => {
    renderCards(movies.results);
    filterContainer.scrollIntoView({
      behavior: "smooth",
    });
  }, 1500);
};

const changePage = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await fetchMovies(
    pageController.searchParameter,
    pageController.page
  );
  setPagination();
  loadAndShow(movies);
};

const nextPage = async (e) => {
  e.stopImmediatePropagation();
  if (pageController.page === pageController.total) return;
  pageController.page += 1;
  await changePage();
};

const previousPage = async (e) => {
  e.stopImmediatePropagation();
  if (pageController.page === pageController.total) return;
  pageController.page -= 1;
  await changePage();
};

const init = () => {
  window.addEventListener("DOMContentLoaded", getMovies);
  nextPageBtn.addEventListener("click", nextPage);
  previousPageBtn.addEventListener("click", previousPage);
  filterContainer.addEventListener("click", changeSearchParameter);
};

init();
