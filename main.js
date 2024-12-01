import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;
console.log(w)
const renderer = new THREE.WebGLRenderer({antialias : true});
renderer.setSize(w,h)


document.body.appendChild(renderer.domElement);

const fov = 75;
const aspect = w/h;
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
// move camera back a bit
camera.position.z = 2;

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const scene = new THREE.Scene()
// create a sample object to put in the scene
const geo = new THREE.IcosahedronGeometry(1.0,2);
const mat = new THREE.MeshStandardMaterial({
    color : 0xffffff,
    flatShading : true
});
const mesh = new THREE.Mesh(geo,mat);
scene.add(mesh);

const mat2 = new THREE.MeshStandardMaterial({
    color : 0xffffff,
    flatShading : true,
	wireframe : true
});
const mesh2 = new THREE.Mesh(geo,mat2);
mesh.add(mesh2);
// create lighting
const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000);
scene.add(hemiLight);

function animate(t=0){
	requestAnimationFrame(animate);
	// your animation here
	// heres an example
	//
	renderer.render(scene, camera);
	controls.update();
}

animate();
