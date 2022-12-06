const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);

const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 20, -200), scene);
camera.cameraDirection = new BABYLON.Vector3(0, -2, 0,);
const light = new BABYLON.PointLight("light", new BABYLON.Vector3(100, 100, -100), scene);

const sun = BABYLON.Mesh.CreateSphere("sphere", 50.0, 50.0, scene);
const sunMaterial = new BABYLON.StandardMaterial("material", scene);
sunMaterial.emissiveColor = new BABYLON.Color3(0, 0.5, 0.86);
sun.material = sunMaterial;

const planet = BABYLON.Mesh.CreateSphere("sphere", 10.0, 10.0, scene);
const planetMaterial = new BABYLON.StandardMaterial("material", scene);
planetMaterial.emissiveColor = new BABYLON.Color3(0.4, 0, 0.2);
planet.material = planetMaterial;

let t = 0;
function renderLoop() {
    scene.render();
    planet.position.x = Math.sin(t) * 50;
    planet.position.z = Math.cos(t) * 50;
    planet.position.y = Math.sin(t) * 20;
    t -= 0.01;
}

engine.runRenderLoop(renderLoop);