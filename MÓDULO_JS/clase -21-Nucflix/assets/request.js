const KEY = "ee793e36b0b7a0ed13af01890f5dab32";

const TRENDING_URL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}&language=en-US`;
const TOPRATED_URL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=en-US`;
const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${KEY}&language=en-US`;

const fetchMovies = async (searchUrl, page = 1) => {
  try {
    const response = await fetch(`${searchUrl}&page=${page}`);
    const responseData = await response.json();
    console.log("Response data:", responseData);
    return responseData;
  } catch (error) {
    alert('Error al consumir la API')
  }
};
