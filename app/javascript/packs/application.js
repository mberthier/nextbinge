require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import "bootstrap";

// Internal imports
import hello from "../../assets/javascript/imdbApiCall.js";
import getImdbPoster from "../../assets/javascript/imdbApiCall.js";

document.addEventListener('turbolinks:load', () => {
  getImdbPoster();
});
