require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import "bootstrap";
import getImdbPoster from "../../assets/javascript/imdbApiCall";
import bookmark from "../components/bookmark";
import watched from "../components/watched";
import excluded from "../components/excluded";
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
import { formGroupOneAction, formGroupTwoAction, formGroupThreeAction, formGroupFourAction, formGroupFiveAction } from '../plugins/surveyChanger';
import {loadingFunction } from "../plugins/loading.js";

document.addEventListener('turbolinks:load', () => {
  if (
      (document.querySelector("fieldset.form-group-1-center")) ||
      (document.querySelector("fieldset.form-group-2-right")) ||
      (document.querySelector("fieldset.form-group-3-right")) ||
      (document.querySelector("fieldset.form-group-4-right")) ||
      (document.querySelector("fieldset.form-group-5-right"))
    ) {
    formGroupOneAction();
    formGroupTwoAction();
    formGroupThreeAction();
    formGroupFourAction();
    formGroupFiveAction();
  };
  getImdbPoster();
  bookmark();
  watched();
  excluded();
  if (document.querySelector(".buttonsubmit-right")) {
    loadingFunction();
  }

  const sessionFIlterButtons1 = document.querySelector(".align-banner1")
  if(sessionFIlterButtons1) {
    const slider1 = tns({
    container: '.my-slider1',
    loop: true,
    items: 1,
    slideBy: "page",
    nav: false,
    autoplayButtonOutput: false,
    mouseDrag: true,
    // lazyload: true,
    controlsContainer: "#customize-controls1",
    // autoWidth: true,
    responsive: {
      640: {
        items:1
      },
      700: {
        gutter: 30
      },
      900: {
        items: 4,
      }
    }
  });
  }

  const sessionFIlterButtons2 = document.querySelector(".align-banner2")
  if(sessionFIlterButtons2) {

    const slider2 = tns({
    container: '.my-slider2',
    loop: true,
    items: 1,
    slideBy: "page",
    nav: false,
    autoplayButtonOutput: false,
    mouseDrag: true,
    // lazyload: true,
    controlsContainer: "#customize-controls2",
    // autoWidth: true,
    responsive: {
      640: {
        items:1
      },
      700: {
        gutter: 30
      },
      900: {
        items: 4,
      }
    }
  });
  }

  const sessionFIlterButtons3 = document.querySelector(".align-banner3")
  if(sessionFIlterButtons3) {
    const slider3 = tns({
    container: '.my-slider3',
    loop: true,
    items: 1,
    slideBy: "page",
    nav: false,
    autoplayButtonOutput: false,
    mouseDrag: true,
    // lazyload: true,
    controlsContainer: "#customize-controls3",
    // autoWidth: true,
    responsive: {
      640: {
        items:1
      },
      700: {
        gutter: 30
      },
      900: {
        items: 4,
      }
    }
  });
  }
});
