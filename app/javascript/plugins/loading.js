import * as THREE from 'three';

const loadingFunction = () => {
  const submitButton = document.querySelector(".buttonsubmit-right")
  submitButton.addEventListener('click', function() {
    let body = document.querySelector("body")

    let texts = ["Adjusting flux capacitor...",
      "Asking Chewie to punch it",
      "Checking database",
      "Convicing AI not to turn evil",
      "It's almost done I swear",
      "Your movies are coming!"]

    let index = 0;

    const newSentence = () => {
      document.querySelector(".sentence").innerHTML = texts[index];
      index < 3 ? index++ : index = 0;
    };
    if (body) {
      body.style.overflow = "hidden";
      body.insertAdjacentHTML("beforebegin", `<div class="background-holder"><div class="central-box"><div class="cube"></div><div class="spin"><h3 class="sentence">Adjusting flux capacitor...</h3></div</div></div>`);
      setInterval(newSentence, 1000);
    };
    const navbar = document.querySelector(".navbar");
    navbar.style.display = "none";

    // THREE.JS code
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(window.innerWidth/1.5, window.innerHeight/1.5);
    document.querySelector(".cube").appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const cubeMaterials =
      [
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://res.cloudinary.com/dinzvmaaw/image/upload/v1599908578/NextBinge/netflix_cube_logo_eqgv1s.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://res.cloudinary.com/dinzvmaaw/image/upload/v1599908578/NextBinge/netflix_cube_logo_eqgv1s.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://res.cloudinary.com/dinzvmaaw/image/upload/v1599908578/NextBinge/amazon_cube_logo_ygdhcp.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://res.cloudinary.com/dinzvmaaw/image/upload/v1599908578/NextBinge/amazon_cube_logo_ygdhcp.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://res.cloudinary.com/dinzvmaaw/image/upload/v1599908578/NextBinge/disney_cube_logo_ogsp6r.jpg'), side: THREE.DoubleSide }),
        new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('https://res.cloudinary.com/dinzvmaaw/image/upload/v1599908578/NextBinge/disney_cube_logo_ogsp6r.jpg'), side: THREE.DoubleSide }),
      ];
    const material = new THREE.MeshFaceMaterial(cubeMaterials);
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 4;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;

      renderer.render(scene, camera);
    }
    animate();
  });
};

export { loadingFunction };
