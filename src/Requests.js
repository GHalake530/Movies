const key = '0e2b17a56452e1085d498d616bd36112';

const requests = {
  requestPopular: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=27&page=1&include_adult=false`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=28&page=1&include_adult=false`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=35&page=1&include_adult=false`,
  requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=18&page=1&include_adult=false`,
  requestScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=878&page=1&include_adult=false`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=10749&page=1&include_adult=false`,
};

export default requests;
