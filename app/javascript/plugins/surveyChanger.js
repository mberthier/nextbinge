// Form group one - genre
const formGroupOneAction = () => {
  const formGroupOne = document.querySelector("fieldset.form-group-1");
  const radioButtonOne = formGroupOne.querySelectorAll(".radio__label");
  const formGroupTwo = document.querySelector("fieldset.form-group-2-hide");
  radioButtonOne.forEach(element => {
    element.addEventListener('click', function() {
      formGroupOne.classList.remove("form-group-1");
      formGroupOne.classList.add("form-group-1-hide");  
      formGroupTwo.classList.remove("form-group-2-hide");
      formGroupTwo.classList.add("form-group-2");
    });
  });
};

// Form group two - mood
const formGroupTwoAction = () => {
  const formGroupTwo = document.querySelector("fieldset.form-group-2-hide");
  const radioButtonTwo = formGroupTwo.querySelectorAll(".radio__label");
  const formGroupThree = document.querySelector("fieldset.form-group-3-hide");
  radioButtonTwo.forEach(element => {
    element.addEventListener('click', function () {
      formGroupTwo.classList.remove("form-group-2");
      formGroupTwo.classList.add("form-group-2-hide");
      formGroupThree.classList.remove("form-group-3-hide");
      formGroupThree.classList.add("form-group-3");
    });  
  });
};

// Form group three - media type
const formGroupThreeAction = () => {
  const formGroupThree = document.querySelector("fieldset.form-group-3-hide");
  const radioButtonThree = formGroupThree.querySelectorAll(".radio__label");
  const formGroupFour = document.querySelector("fieldset.form-group-4-hide");
  radioButtonThree.forEach(element => {
    element.addEventListener('click', function () {
      formGroupThree.classList.remove("form-group-3");
      formGroupThree.classList.add("form-group-3-hide");
      formGroupFour.classList.remove("form-group-4-hide");
      formGroupFour.classList.add("form-group-4");
    });
  });
};

// Form group four - rating
const formGroupFourAction = () => {
  const formGroupFour = document.querySelector("fieldset.form-group-4-hide");
  const radioButtonFour = formGroupFour.querySelectorAll(".radio__label");
  const formGroupFive = document.querySelector("fieldset.form-group-5-hide");
  radioButtonFour.forEach(element => {
    element.addEventListener('click', function () {
      formGroupFour.classList.remove("form-group-4");
      formGroupFour.classList.add("form-group-4-hide");
      formGroupFive.classList.remove("form-group-5-hide");
      formGroupFive.classList.add("form-group-5");
    });
  });
};

// Form group five - year
const formGroupFiveAction = () => {
  const formGroupFive = document.querySelector("fieldset.form-group-5-hide");
  const radioButtonFive = formGroupFive.querySelectorAll(".radio__label");
  const submitBtn = document.querySelector(".buttonsubmit-hide");
  radioButtonFive.forEach(element => {
    element.addEventListener('click', function () {
      formGroupFive.classList.remove("form-group-5");
      formGroupFive.classList.add("form-group-5-hide");
      submitBtn.classList.remove("buttonsubmit-hide");
      submitBtn.classList.add("buttonsubmit");
    });
  });
};


const myFunction = () => {
  const drawerTransitioner = transitionHiddenElement({
    element: document.querySelector('.js-drawer'),
    visibleClass: 'is-open'
  });
  
  document.querySelector('.js-open-button').addEventListener('click', () => {
    drawerTransitioner.show()
  });
  
  document.querySelector('.js-close-button').addEventListener('click', () => {
    drawerTransitioner.hide()
  });
  
  /** 
   * Library code
   * Using https://www.npmjs.com/package/@cloudfour/transition-hidden-element
   */
  
  function transitionHiddenElement({
    element,
    visibleClass,
    waitMode = 'transitionend',
    timeoutDuration,
    hideMode = 'hidden',
    displayValue = 'block'
  }) {
    if (waitMode === 'timeout' && typeof timeoutDuration !== 'number') {
      console.error(`
        When calling transitionHiddenElement with waitMode set to timeout,
        you must pass in a number for timeoutDuration.
      `);
  
      return;
    }
  
    // Don't wait for exit transitions if a user prefers reduced motion.
    // Ideally transitions will be disabled in CSS, which means we should not wait
    // before adding `hidden`.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      waitMode = 'immediate';
    }
  
    /**
     * An event listener to add `hidden` after our animations complete.
     * This listener will remove itself after completing.
     */
    const listener = e => {
      // Confirm `transitionend` was called on  our `element` and didn't bubble
      // up from a child element.
      if (e.target === element) {
        applyHiddenAttributes();
  
        element.removeEventListener('transitionend', listener);
      }
    };
  
    const applyHiddenAttributes = () => {
      if (hideMode === 'display') {
        element.style.display = 'none';
      } else {
        element.setAttribute('hidden', true);
      }
    }
  
    const removeHiddenAttributes = () => {
      if (hideMode === 'display') {
        element.style.display = displayValue;
      } else {
        element.removeAttribute('hidden');
      }
    }
  
    return {
      /**
       * Show the element
       */
      show() {
        /**
         * This listener shouldn't be here but if someone spams the toggle
         * over and over really fast it can incorrectly stick around.
         * We remove it just to be safe.
         */
        element.removeEventListener('transitionend', listener);
  
        /**
         * Similarly, we'll clear the timeout in case it's still hanging around.
         */
        if (this.timeout) {
          clearTimeout(this.timeout);
        }
  
        removeHiddenAttributes();
  
        /**
         * Force a browser re-paint so the browser will realize the
         * element is no longer `hidden` and allow transitions.
         */
        const reflow = element.offsetHeight;
  
        element.classList.add(visibleClass);
      },
  
      /**
       * Hide the element
       */
      hide() {
        if (waitMode === 'transitionend') {
          element.addEventListener('transitionend', listener);
        } else if (waitMode === 'timeout') {
          this.timeout = setTimeout(() => {
            applyHiddenAttributes();
          }, timeoutDuration);
        } else {
          applyHiddenAttributes();
        }
  
        // Add this class to trigger our animation
        element.classList.remove(visibleClass);
      },
  
      /**
       * Toggle the element's visibility
       */
      toggle() {
        if (this.isHidden()) {
          this.show();
        } else {
          this.hide();
        }
      },
  
      /**
       * Tell whether the element is hidden or not.
       */
      isHidden() {
        /**
         * The hidden attribute does not require a value. Since an empty string is
         * falsy, but shows the presence of an attribute we compare to `null`
         */
        const hasHiddenAttribute = element.getAttribute('hidden') !== null;
  
        const isDisplayNone = element.style.display === 'none';
  
        const hasVisibleClass = [...element.classList].includes(visibleClass);
  
        return hasHiddenAttribute || isDisplayNone || !hasVisibleClass;
      },
  
      // A placeholder for our `timeout`
      timeout: null
    };
  }
  
}

export { formGroupOneAction, formGroupTwoAction, formGroupThreeAction, formGroupFourAction, formGroupFiveAction, myFunction };

