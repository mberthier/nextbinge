require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import "bootstrap";
import getImdbPoster from "../../assets/javascript/imdbApiCall";
import bookmark from "../components/bookmark";
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

document.addEventListener('turbolinks:load', () => {
  getImdbPoster();
  bookmark();

  const sessionFIlterButtons = document.querySelector(".align-banner")
  if(sessionFIlterButtons) {
    const slider = tns({
    container: '.my-slider',
    loop: true,
    items: 1,
    slideBy: "page",
    nav: false,
    autoplayButtonOutput: false,
    mouseDrag: false,
    lazyload: true,
    controlsContainer: "#customize-controls",
    autoWidth: true,
    responsive: {
      640: {
        items:1
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3,
      }
    }
  });
  }
});
