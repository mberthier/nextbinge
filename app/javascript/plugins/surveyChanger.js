// Form group one - genre
const formGroupOneAction = () => {
  const formGroupOne = document.querySelector("fieldset.form-group-1");
  const radioButtonOne = formGroupOne.querySelectorAll(".radio__label");
  const formGroupTwo = document.querySelector("fieldset.form-group-2-hidden");
  radioButtonOne.forEach(element => {
    element.addEventListener('click', function() {
      formGroupOne.classList.remove("form-group-1");
      formGroupOne.classList.add("form-group-1-hidden");  
      formGroupTwo.classList.remove("form-group-2-hidden");
      formGroupTwo.classList.add("form-group-2");
    });
  });
};

// Form group two - mood
const formGroupTwoAction = () => {
  const formGroupTwo = document.querySelector("fieldset.form-group-2-hidden");
  const radioButtonTwo = formGroupTwo.querySelectorAll(".radio__label");
  const formGroupThree = document.querySelector("fieldset.form-group-3-hidden");
  radioButtonTwo.forEach(element => {
    element.addEventListener('click', function () {
      formGroupTwo.classList.remove("form-group-2");
      formGroupTwo.classList.add("form-group-2-hidden");
      formGroupThree.classList.remove("form-group-3-hidden");
      formGroupThree.classList.add("form-group-3");
    });  
  });
};

// Form group three - media type
const formGroupThreeAction = () => {
  const formGroupThree = document.querySelector("fieldset.form-group-3-hidden");
  const radioButtonThree = formGroupThree.querySelectorAll(".radio__label");
  const formGroupFour = document.querySelector("fieldset.form-group-4-hidden");
  radioButtonThree.forEach(element => {
    element.addEventListener('click', function () {
      formGroupThree.classList.remove("form-group-3");
      formGroupThree.classList.add("form-group-3-hidden");
      formGroupFour.classList.remove("form-group-4-hidden");
      formGroupFour.classList.add("form-group-4");
    });
  });
};

// Form group four - rating
const formGroupFourAction = () => {
  const formGroupFour = document.querySelector("fieldset.form-group-4-hidden");
  const radioButtonFour = formGroupFour.querySelectorAll(".radio__label");
  const formGroupFive = document.querySelector("fieldset.form-group-5-hidden");
  radioButtonFour.forEach(element => {
    element.addEventListener('click', function () {
      formGroupFour.classList.remove("form-group-4");
      formGroupFour.classList.add("form-group-4-hidden");
      formGroupFive.classList.remove("form-group-5-hidden");
      formGroupFive.classList.add("form-group-5");
    });
  });
};

// Form group five - year
const formGroupFiveAction = () => {
  const formGroupFive = document.querySelector("fieldset.form-group-5-hidden");
  const radioButtonFive = formGroupFive.querySelectorAll(".radio__label");
  const submitBtn = document.querySelector(".buttonsubmit-hidden");
  radioButtonFive.forEach(element => {
    element.addEventListener('click', function () {
      formGroupFive.classList.remove("form-group-5");
      formGroupFive.classList.add("form-group-5-hidden");
      submitBtn.classList.remove("buttonsubmit-hidden");
      submitBtn.classList.add("buttonsubmit");
    });
  });
};

export { formGroupOneAction, formGroupTwoAction, formGroupThreeAction, formGroupFourAction, formGroupFiveAction };
