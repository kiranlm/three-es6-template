import * as THREE from 'three';

export default class Box {
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
