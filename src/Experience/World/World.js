import { Cube, Plane, Plane2 } from './objects';

export class World {
  constructor(experience) {
    this.experience = experience;

    // this.cube = new Cube(experience);
    this.plane = new Plane(experience);
    this.plane2 = new Plane2(experience);
  }

  update(...arg) {
    // if (this.cube) {
    //   this.cube.update(...arg);
    // }
  }
}
