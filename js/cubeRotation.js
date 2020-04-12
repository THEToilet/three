const scene = new THREE.Scene(); // シーンを作成
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Collada 形式のモデルデータを読み込む
const loader = new THREE.ColladaLoader();
// dae ファイルのパスを指定
loader.load('models/dae/simpleringblend.dae', (collada) => {
  const model = collada.scene;
  scene.add(model); // 読み込み後に3D空間に追加
});

function animate() {
  requestAnimationFrame( animate );
//	cube.rotation.x += 0.01;
//  cube.rotation.y += 0.01;
  renderer.render( scene, camera );
}
animate();
