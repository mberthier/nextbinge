const excluded = () => {
  const medias = document.querySelectorAll(".excluded");

  const toggleActiveClass = (event) => {
    event.currentTarget.classList.toggle('excluded-active');
    console.log(event.currentTarget.classList)
    if ([...event.currentTarget.classList].includes('modal-excluded'))  {
      event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[2].children[0].classList.toggle('excluded-active');
    } else {
      event.currentTarget.parentNode.parentNode.parentNode.children[2].children[0].children[0].children[0].children[0].children[0].children[0].children[2].children[0].classList.toggle('excluded-active');
    }
  };

  const toggleActiveOnClick = (media) => {
    media.addEventListener('click', toggleActiveClass);
  };

  medias.forEach(toggleActiveOnClick);

};

export default excluded;
