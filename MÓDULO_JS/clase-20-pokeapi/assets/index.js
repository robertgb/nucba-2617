const container = document.querySelector("#caja");
const loader = document.querySelector(".pokeballs-container");

const baseURL = "https://pokeapi.co/api/v2/pokemon";

let isFetching = false;

const nextURL = {
  next: null,
};

const fetchPokemons = async () => {
  const response = await fetch(`${baseURL}?offset=0&limit=8`);
  const data = await response.json();
  return data;
};

const getPokemonHtml = ({
  id,
  name,
  sprites,
  height,
  weight,
  types,
  base_experience,
}) => {
  return `
    <div class="poke">
        <img  src="${sprites.other.home.front_default}"/>
        <h2>${name.toUpperCase()}</h2>
        <span class="exp">EXP: ${base_experience}</span>
        <div class="tipo-poke">
            ${types
              .map((tipo) => {
                return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
              })
              .join("")}
        </div>
        <p class="id-poke">#${id}</p>
        <p class="height">Height: ${height / 10}m</p>
        <p class="weight">Weight: ${weight / 10}Kg</p>
    </div>
    `;
};

const renderPokemonList = (pokemonsList) => {
  const cardsHtml = pokemonsList
    .map((pokemon) => getPokemonHtml(pokemon))
    .join("");
  container.innerHTML += cardsHtml;
};

const loadAndPrint = (pokemonsList) => {
  loader.classList.add("show");
  setTimeout(() => {
    loader.classList.remove("show");
    renderPokemonList(pokemonsList);
    isFetching = false;
  }, 1500);
};

function init() {
  window.addEventListener("DOMContentLoaded", async () => {
    const { next, results } = await fetchPokemons();
    // console.log(next, 'next', results, 'results')
    nextURL.next = next;
    const URLS = results.map((pokemon) => pokemon.url);
    // console.log(URLS, 'TODAS LAS URLS QUE HAY Q LLAMAR')
    const infoPokemones = await Promise.all(
      URLS.map(async (url) => {
        const nextPokemon = await fetch(url);
        return await nextPokemon.json();
      })
    );
    // console.log(infoPokemones, 'infoPokemones TODA LA INFO DE TODOs LOS POKEMONES')
    renderPokemonList(infoPokemones);
  });

  window.addEventListener("scroll", async () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    /* console.log('scrollTop', scrollTop)
        console.log('clientHeight', clientHeight)
        console.log('scrollHeight', scrollHeight) */

    const isAtTheBottom = scrollTop + clientHeight >= scrollHeight - 1;

    if (isAtTheBottom  && !isFetching) {
      // console.log("I'm at the bottom")
      isFetching = true;
      console.log("Llamando a la API");
      const nextPokemonsResponse = await fetch(nextURL.next);
      const { next, results } = await nextPokemonsResponse.json();
      nextURL.next = next;

      const URLS = results.map((pokemon) => pokemon.url);
      const infoPokemones = await Promise.all(
        URLS.map(async (url) => {
          const nextPokemon = await fetch(url);
          return await nextPokemon.json();
        })
      );
      loadAndPrint(infoPokemones);
    }
  });
}

init();
