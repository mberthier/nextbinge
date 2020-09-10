const bookmark = () => {
 // const medias = document.querySelectorAll("#bookmark");
 // console.log("hello");
 //  medias.forEach(media => {
 //   media.addEventListener("click", (e) => {
 //    e.currentTarget.style.color = "#FCBF1E"; });
 //  });
  const medias = document.querySelectorAll(".bookmark");

  const toggleActiveClass = (event) => {
    event.currentTarget.classList.toggle('bookmark-active');
  };

  const toggleActiveOnClick = (media) => {
    media.addEventListener('click', toggleActiveClass);
  };

  medias.forEach(toggleActiveOnClick);

};

export default bookmark;


