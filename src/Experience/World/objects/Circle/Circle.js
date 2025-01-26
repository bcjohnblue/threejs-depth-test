import * as THREE from 'three';

export class Plane {
  constructor(experience) {
    this.experience = experience;

    this.create();
  }

  create() {
    this.geometry = new THREE.PlaneGeometry(1, 1, 32, 32);
    this.material = new THREE.MeshBasicMaterial({ color: 'red', transparent: true, opacity: 0.3 });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.experience.scene.add(this.mesh);
  }

  update() {}
}
