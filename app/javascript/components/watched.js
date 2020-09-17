const watched = () => {
  const medias = document.querySelectorAll(".watched");

  const toggleActiveClass = (event) => {
    event.currentTarget.classList.toggle('watched-active');
    console.log(event.currentTarget.classList)
    if ([...event.currentTarget.classList].includes('modal-watched'))  {
      event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[1].children[0].classList.toggle('watched-active');
    } else {
      event.currentTarget.parentNode.parentNode.parentNode.children[2].children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].classList.toggle('watched-active');
    }
  };

  const toggleActiveOnClick = (media) => {
    media.addEventListener('click', toggleActiveClass);
  };

  medias.forEach(toggleActiveOnClick);

};

export default watched;
