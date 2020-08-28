function getImdbPoster() {
  console.log("Function starts")
  const imdbPosterId = document.querySelectorAll(".imdb-poster")
  imdbPosterId.forEach(image => {
    async function postData(url = '', data = {}) {
      const response = await fetch(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${imdbPosterId}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          "x-rapidapi-key": "8ca5dbf3afmsh60ff48690b836fdp169452jsnc257978cfbd8"
        }
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        });
    }
    postData('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/id', { id: imdbPosterId })
      .then(data => {
        // console.log(data);
        return data
      });
  })
}

export default getImdbPoster;
