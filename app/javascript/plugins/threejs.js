const cubeOfSubSvcs = () => {
  
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const cubeMaterials =
    [
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/netflix_cube_logo.jpg'), side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/netflix_cube_logo.jpg'), side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/amazon_cube_logo.jpg'), side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/amazon_cube_logo.jpg'), side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/disney_cube_logo.jpg'), side: THREE.DoubleSide }),
      new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load('img/disney_cube_logo.jpg'), side: THREE.DoubleSide }),
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
}