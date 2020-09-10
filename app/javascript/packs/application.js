require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import "bootstrap";
import getImdbPoster from "../../assets/javascript/imdbApiCall";
import bookmark from "../components/bookmark";

document.addEventListener('turbolinks:load', () => {
  getImdbPoster();
  bookmark();
});
