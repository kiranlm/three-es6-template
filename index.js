import * as THREE from 'three';

class Box {
  constructor({ width, height, depth, color }) {
    this.geometry = new THREE.BoxGeometry(width, height, depth);
    this.material = new THREE.MeshBasicMaterial({
      color,
    });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }

  update() {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
  }

  getMesh() {
    return this.mesh;
  }
}

class Home {
  constructor() {
    this.objects = [];
    this.createScene();
  }

  createScene() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
    this.camera.position.z = 20;

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.render();
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });

    this.objects.forEach((object) => {
      object.update();
    });

    this.renderer.render(this.scene, this.camera);
  }

  add(mesh) {
    this.objects.push(mesh);
    this.scene.add(mesh.getMesh());
  }
}

let app = new Home();
app.add(
  new Box({
    width: 10,
    height: 10,
    depth: 10,
    color: 0x8844aa,
  }),
);
