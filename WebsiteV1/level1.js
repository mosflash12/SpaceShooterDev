/** @type{import("phaser.js")} */

class level1 extends Phaser.Scene {

  constructor(){
    super({key:"level1"});
  }

  preload(){
    this.load.image('testimg', 'assets/testjpg.jpg');
  }

  create(){
    this.image = this.add.image(400,300,'testimg');
    }

}
