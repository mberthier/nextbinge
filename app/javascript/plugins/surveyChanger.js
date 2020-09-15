// Form group one - genre
const formGroupOneAction = () => {
  const formGroupOne = document.querySelector("fieldset.form-group-1-center");
  const radioButtonOne = formGroupOne.querySelectorAll(".radio__label");
  const formGroupTwo = document.querySelector("fieldset.form-group-2-right");
  radioButtonOne.forEach(element => {
    element.addEventListener('click', function () {
      formGroupOne.classList.remove("form-group-1-center");
      formGroupOne.classList.add("form-group-1-left");
      formGroupTwo.classList.remove("form-group-2-right");
      formGroupTwo.classList.add("form-group-2-center");
    });
  });
};

// Form group two - mood
const formGroupTwoAction = () => {
  const formGroupTwo = document.querySelector("fieldset.form-group-2-center");
  const radioButtonTwo = formGroupTwo.querySelectorAll(".radio__label");
  const formGroupThree = document.querySelector("fieldset.form-group-3-right");
  radioButtonTwo.forEach(element => {
    element.addEventListener('click', function () {
      formGroupTwo.classList.remove("form-group-2-center");
      formGroupTwo.classList.add("form-group-2-left");
      formGroupThree.classList.remove("form-group-3-right");
      formGroupThree.classList.add("form-group-3-center");
    });
  });
};

// Form group three - media type
const formGroupThreeAction = () => {
  const formGroupThree = document.querySelector("fieldset.form-group-3-center");
  const radioButtonThree = formGroupThree.querySelectorAll(".radio__label");
  const formGroupFour = document.querySelector("fieldset.form-group-4-right");
  radioButtonThree.forEach(element => {
    element.addEventListener('click', function () {
      formGroupThree.classList.remove("form-group-3-center");
      formGroupThree.classList.add("form-group-3-left");
      formGroupFour.classList.remove("form-group-4-right");
      formGroupFour.classList.add("form-group-4-center");
    });
  });
};

// Form group four - rating
const formGroupFourAction = () => {
  const formGroupFour = document.querySelector("fieldset.form-group-4-center");
  const radioButtonFour = formGroupFour.querySelectorAll(".radio__label");
  const formGroupFive = document.querySelector("fieldset.form-group-5-right");
  radioButtonFour.forEach(element => {
    element.addEventListener('click', function () {
      formGroupFour.classList.remove("form-group-4-center");
      formGroupFour.classList.add("form-group-4-left");
      formGroupFive.classList.remove("form-group-5-right");
      formGroupFive.classList.add("form-group-5-center");
    });
  });
};

// Form group five - year
const formGroupFiveAction = () => {
  const formGroupFive = document.querySelector("fieldset.form-group-5-center");
  const radioButtonFive = formGroupFive.querySelectorAll(".radio__label");
  const submitBtn = document.querySelector(".buttonsubmit-right");
  radioButtonFive.forEach(element => {
    element.addEventListener('click', function () {
      formGroupFive.classList.remove("form-group-5-center");
      formGroupFive.classList.add("form-group-5-left");
      submitBtn.classList.remove("buttonsubmit-right");
      submitBtn.classList.add("buttonsubmit-center");
    });
  });
};

export { formGroupOneAction, formGroupTwoAction, formGroupThreeAction, formGroupFourAction, formGroupFiveAction };
