const bookmark = () => {
  const medias = document.querySelectorAll(".bookmark");

  const toggleActiveClass = (event) => {
    event.currentTarget.classList.toggle('bookmark-active');
    console.log(event.currentTarget.classList)
    if ([...event.currentTarget.classList].includes('modal-bookmark'))  {
      event.currentTarget.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.children[0].children[0].classList.toggle('bookmark-active');
    } else {
      event.currentTarget.parentNode.parentNode.children[4].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].classList.toggle('bookmark-active');
    }
  };

  const toggleActiveOnClick = (media) => {
    media.addEventListener('click', toggleActiveClass);
  };

  medias.forEach(toggleActiveOnClick);

};

export default bookmark;

