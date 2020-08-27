function getImdbPoster() {
  console.log("Function starts")
  const imdbPosterId = document.querySelectorAll(".imdb-poster")
  imdbPosterId.forEach(image => {
    async function postData(url = `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${imdb_id}`, data = {}) {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      return response.json();
    }
    postData('https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${imdbPosterId}', { answer: 42 })
      .then(data => {
        console.log(data);
      });
      // with the response, get the poster image url
      // image.src = new url
    })
}

export default getImdbPoster;
