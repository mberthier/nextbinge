const hello = () => { 
  console.log("Hello world");
};
// set each result's image as placeholder
// then
// images.forEach(image => {
//   // get the id from the image
//   // make a fetch call with this id in the url
//   // with the response, get the poster image url
//   // image.src = new url
// })

// // Example POST method implementation:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'GET',
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });

// url = URI(`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${imdb_id}`)

// http = Net:: HTTP.new(url.host, url.port)
// http.use_ssl = true
// http.verify_mode = OpenSSL:: SSL:: VERIFY_NONE

// request = Net:: HTTP:: Get.new(url)
// request["x-rapidapi-host"] = 'imdb-internet-movie-database-unofficial.p.rapidapi.com'
// request["x-rapidapi-key"] = '8ca5dbf3afmsh60ff48690b836fdp169452jsnc257978cfbd8'

// response = http.request(request)
// data = response.read_body

export {hello};
