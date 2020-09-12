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

export { formGroupOneAction, formGroupTwoAction, formGroupThreeAction, formGroupFourAction, formGroupFiveAction };
