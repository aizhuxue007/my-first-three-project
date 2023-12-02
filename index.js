import * as THREE from 'three';

// Four things required for a scene

// 1. Scene
const scene = new THREE.Scene();

// 2. Object(s)
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);

// 3. Camera
const sizes = {
    width: 800,
    height: 600
};
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// Camera and Objects are in origin
camera.position.z = 8;

// Add everything to the scene
scene.add(camera);
scene.add(mesh);

// 4. Renderer
const canvas = document.querySelector('canvas.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// transforming the cube
mesh.position.x = 3;
mesh.position.y = 0;
mesh.position.z = 1;
mesh.scale.set(1, 1, 1)
mesh.rotation.y = Math.PI * 0.5;

// Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

// Objects
// const group
const group = new THREE.Group()
group.scale.y = 1
group.rotation.y = 0.5
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' })
)
const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'yellow' })
)

cube1.position.x = -2
cube2.position.x = 0
cube3.position.x = 2

group.add(cube1, cube2, cube3);

camera.lookAt(cube2.position)

renderer.render(scene, camera);

// other concepts to consider
// quaternion, normalize