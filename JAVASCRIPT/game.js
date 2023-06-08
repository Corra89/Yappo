// Creazione del canvas
const canvas = document.getElementById('gameCanvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Creazione della scena
const scene = new THREE.Scene();

// Creazione del gioco
const game = {
  sun: {
    position: new THREE.Vector3(0, 0, 0),
    radius: 100,
    color: 0xFFFF00,
  },
  moon: {
    position: new THREE.Vector3(100, 0, 0),
    radius: 50,
    color: 0xFFA500,
  },
  earth: {
    position: new THREE.Vector3(200, 0, 0),
    radius: 20,
    color: 0x008000,
  },
};

// Creazione della luna
const moonGeometry = new THREE.CircleGeometry(game.moon.radius, 32);
const moonMaterial = new THREE.MeshBasicMaterial({ color: game.moon.color });
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
moon.position.copy(game.moon.position);
scene.add(moon);

// Creazione della terra
const earthGeometry = new THREE.CircleGeometry(game.earth.radius, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: game.earth.color });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.copy(game.earth.position);
scene.add(earth);

// Aggiunta dell'evento onclick alla terra
earth.addEventListener('click', () => {
  const x = Math.random() * 50 - 25;
  const y = Math.random() * 50 - 25;
  const z = Math.random() * 50 - 25;
  earth.position.set(x, y, z);
});

// Creazione del sole
const sunGeometry = new THREE.CircleGeometry(game.sun.radius, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: game.sun.color });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
sun.position.copy(game.sun.position);
scene.add(sun);

// Animazione del gioco
function animate() {
  requestAnimationFrame(animate);

  // Aggiornamento della posizione della luna
  moon.rotation.y += 0.01;

  // Aggiornamento della posizione della terra
  earth.rotation.y += 0.005;

  renderer.render(scene, camera);
}

// Creazione della camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  // Aggiornamento della posizione della luna
  moon.rotation.y += 0.01;

  // Aggiornamento della posizione della terra
  earth.rotation.y += 0.005;

  // Posizionamento della vista della camera
  camera.position.x = earth.position.x + 100;
  camera.position.y = earth.position.y + 100;
  camera.position.z = earth.position.z + 100;
  camera.lookAt(earth.position);

  renderer.render(scene, camera);
}
animate();