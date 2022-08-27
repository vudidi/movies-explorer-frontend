export function saveMoviesId(arr) {
  if (arr) {
    return arr.map((i) => {
      return i.movieId;
    });
  }
  return;
}

export function saveHexMoviesId(arr, movie) {
  if (arr) {
    const result = arr.find((item) => {
      return item.movieId === movie.movieId && item;
    });
    return result._id;
  }
  return;
}
