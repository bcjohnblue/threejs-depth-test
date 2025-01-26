import * as THREE from 'three';

export class Plane2 {
  constructor(experience) {
    this.experience = experience;

    this.create();
  }

  create() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    this.material = new THREE.MeshBasicMaterial({ color: 'blue' });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.z = -1;
    this.experience.scene.add(this.mesh);
  }

  update() {}
}
