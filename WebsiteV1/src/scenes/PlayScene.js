import { CST } from "../CST";

export class PlayScene extends Phaser.Scene {
    constructor(){
        super({key:CST.SCENES.PLAY});
    }

    
    

    init(){}

    preload(){
        
        this.load.image("RPWithTop","./assets/GameSprites[workinprogress]/Maps/RPWithTop.png");
        this.load.image("RPNoTop","./assets/GameSprites[workinprogress]/Maps/RPNoTop.png");
        this.load.image("GrassA","./assets/GameSprites[workinprogress]/Maps/GrassA.png");

        this.load.tilemapTiledJSON("mappy","./assets/GameSprites[workinprogress]/Maps/level_1[backup].json");
        
    }

   

    create(){

        let mappy = this.add.tilemap("mappy");
        let terrain = mappy.addTilesetImage( "RPNoTop");
        let terrain2 = mappy.addTilesetImage( "RPWithTop");
        let terrain3 = mappy.addTilesetImage( "GrassA");


        //layers

        let ground = mappy.createStaticLayer("Ground Layer", [terrain,terrain2,terrain3],0,-2600).setDepth(-1);
        
      



  
    }

    update(){

        // if( cursers.up.isDown){
        //     PlayScene.camera.y -=4;
        // }else if( cursers.down.isDown){
        //     PlayScene.camera.y += 4;
        // }else if( cursers.left.isDown){
        //     PlayScene.camera.x -= 4;

        // }else if ( cursers.right.isDown){
        //     PlayScene.camera.x += 4;
        // }
    }

}


