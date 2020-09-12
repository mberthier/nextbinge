require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External imports
import "bootstrap";
import getImdbPoster from "../../assets/javascript/imdbApiCall";
import bookmark from "../components/bookmark";
import * as THREE from 'three';
import { formGroupOneAction, formGroupTwoAction, formGroupThreeAction, formGroupFourAction, formGroupFiveAction } from '../plugins/surveyChanger';


document.addEventListener('turbolinks:load', () => {
  if (
      (document.querySelector("fieldset.form-group-1")) || (document.querySelector("fieldset.form-group-2-hide")) || 
      (document.querySelector("fieldset.form-group-3-hide")) || (document.querySelector("fieldset.form-group-4-hide")) ||
      (document.querySelector("fieldset.form-group-5-hide")) 
      ) {
    formGroupOneAction();
    formGroupTwoAction();
    formGroupThreeAction();
    formGroupFourAction();
    formGroupFiveAction();
  };
  getImdbPoster();
  bookmark();

  // Below code is for the spinning cube via three.js
  // guard clause for if the element with class name "cube" exists, only then will it execute the code
  if (document.querySelector(".cube")) {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("rgb(0, 0, 0)", 0);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true});
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(window.innerWidth, window.innerHeight);
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
    camera.position.z = 3;
  
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
  
      renderer.render(scene, camera);
    }
    animate();
  }
  // three.js code ends
});
