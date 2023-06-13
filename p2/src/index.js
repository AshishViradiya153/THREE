import "./global.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

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
  width: window.innerWidth,
  height: window.innerHeight,
};

// Mouse Move
const cursor = {
  x: 0,
  y: 0,
};
window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = -(e.clientY / sizes.height - 0.5);
  // console.log(cursor);
});

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// const camera = new THREE.OrthographicCamera(
//   -10 * (sizes.width / sizes.height),
//   10 * (sizes.width / sizes.height),
//   10,
//   -10
// );
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
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//Resize
window.addEventListener("resize", () => {
  //Update camera aspect retio
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //Update camera aspect retio
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
//Full screen
window.addEventListener("dblclick", (e) => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

let time = Date.now();

//Clock
const clock = new THREE.Clock();

//Animations
const tick = () => {
  //Clock
  const elapsedTime = clock.getElapsedTime();

  // Delta time
  const currentTime = Date.now();
  const deltaTime = currentTime - time;
  time = currentTime;

  //Update controls
  controls.update();

  //Update Object
  // group.rotation.y -= 0.001 * deltaTime;
  //   group.rotation.y = Math.tan(elapsedTime);
  // group.rotation.x = Math.cos(elapsedTime);
  // group.rotation.y = Math.sin(elapsedTime);
  //   camera.rotation.x = Math.cos(elapsedTime);
  //   camera.rotation.y = Math.sin(elapsedTime);
  // camera.position.x = cursor.x * 5;
  // camera.position.y = cursor.y * 5;
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 5;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 5;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(group.position);
  // camera.lookAt(new THREE.Vector3());
  //   group.rotation.y = elapsedTime;
  //   group.rotation.x -= 0.01;
  //   group.rotation.z -= 0.01;

  //Render
  renderer.render(scene, camera);

  //Request Animation Frame
  window.requestAnimationFrame(tick);
};
tick();
