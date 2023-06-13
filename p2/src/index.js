import * as THREE from "three";
console.log(THREE);
const scene = new THREE.Scene();

const group = new THREE.Group();

const group1 = new THREE.Group();
const group2 = new THREE.Group();
scene.add(group);
group.add(group1, group2);

group1.position.y = 1;
group1.position.z = -1;

group2.position.y = -1;
group2.position.z = -1;

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -1.5;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 1.5;

const cube4 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

const cube5 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube5.position.x = -1.5;

const cube6 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

cube6.position.x = 1.5;

group1.add(cube1, cube2, cube3);
group2.add(cube4, cube5, cube6);

//Axis helper
const axisHelper = new THREE.AxesHelper();
scene.add(axisHelper);

//Sizes
const sizes = {
  width: 800,
  height: 600,
};

//Camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 5;
// camera.position.x = 1;
// camera.position.y = 1;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
let time = Date.now();

//Clock
const clock = new THREE.Clock();

//Animations
const tick = () => {
  //Clock
  const elapsedTime = clock.getElapsedTime();
  console.log(
    "🚀 ~ file: index.js:89 ~ tick ~ elapsedTime:",
    Math.sin(elapsedTime)
  );
  // Delta time
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  //Update Object
  //   group.rotation.y -= 0.001 * deltaTime;
  //   group.rotation.y = Math.tan(elapsedTime);
  group.rotation.x = Math.cos(elapsedTime);
  group.rotation.y = Math.sin(elapsedTime);
  //   camera.rotation.x = Math.cos(elapsedTime);
  //   camera.rotation.y = Math.sin(elapsedTime);
  camera.lookAt(group.position);
  //   group.rotation.y = elapsedTime;
  //   group.rotation.x -= 0.01;
  //   group.rotation.z -= 0.01;

  //Render
  renderer.render(scene, camera);

  //Request Animation Frame
  window.requestAnimationFrame(tick);
};
tick();
