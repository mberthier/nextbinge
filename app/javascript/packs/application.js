require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import "bootstrap";
import "../category_choice";
// import { initSelect2 } from '../components/init_select2';
import getImdbPoster from "../../assets/javascript/imdbApiCall";

document.addEventListener('turbolinks:load', () => {
  getImdbPoster();
});
