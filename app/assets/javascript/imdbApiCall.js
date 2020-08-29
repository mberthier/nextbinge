function getImdbPoster() {
  const imdbPosterId = document.querySelectorAll(".imdb-poster");

  const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }

  asyncForEach(imdbPosterId, async (image) => {
    await waitFor(200);
    const baseUrl = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/';
    const response = await fetch(baseUrl + image.id, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
        "x-rapidapi-key": "8ca5dbf3afmsh60ff48690b836fdp169452jsnc257978cfbd8"
      },
    })
    const data = await response.json();
    console.log(data.poster);
    const posterImage = data.poster;
    image.src = posterImage;
  });
}

export default getImdbPoster;
