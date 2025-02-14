import './style.css'

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene()
scene.background = new THREE.Color(0xffb6c1)

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

const renderer = new THREE.WebGLRenderer({
  canvas : document.querySelector('#bg')
})

renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth, window.innerHeight )
camera.position.setZ(15)
camera.position.setY(15)

const loader = new GLTFLoader();

loader.load( '/heart/heart.gltf', function ( gltf ) {



	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const pointLight = new THREE.PointLight(0xffffff, 500)
pointLight.position.set(1,3,6)
pointLight.power = 12500

const pointLight2 = new THREE.PointLight(0xffffff, 500)
pointLight2.position.set(1,3,-6)
pointLight2.power = 12000

const pointLight3 = new THREE.PointLight(0xffffff, 150)
pointLight3.position.set(10,3,0)
pointLight3.power = 1500

const pointLight4 = new THREE.PointLight(0xffffff, 500)
pointLight4.position.set(-10,3,0)
pointLight4.power = 1500

const ambientLight = new THREE.AmbientLight(0xffffff)




scene.add(pointLight, pointLight2, pointLight3, pointLight4, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement)
controls.autoRotate = true
controls.enableZoom = false
controls.maxPolarAngle = Math.PI / 2
controls.mminPolarAngle = Math.PI / 2

function  animate() {
  requestAnimationFrame( animate )


  controls.update()
  renderer.render( scene, camera)
}

animate()

