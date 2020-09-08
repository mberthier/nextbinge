const bookmark = () => {
 const medias = document.querySelectorAll("#bookmark");
 console.log("hello");
  medias.forEach(media => {
   media.addEventListener("click", (e) => {
    console.log("hello again");
    e.currentTarget.style.color = "#FCBF1E"; });
  });
};

export default bookmark;
