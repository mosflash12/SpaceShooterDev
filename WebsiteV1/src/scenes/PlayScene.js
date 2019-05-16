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

        
        this.textures.addSpriteSheetFromAtlas("Maya1",{frameHeight: 64, frameWidth:64, atlas: "MC_atlas", frame:"Maya.png"});
        
        console.log(this.textures.list);

        
        this.anims.create({
            key:"left",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("Maya1",{
                frames:[0,1,2,3,4,5,6,7,8,9]
            })
            
        });

        this.anims.create({
            key:"right",
            anchor: 0.5, 
            scale: -1,
            frame:10,
            frames: this.anims.generateFrameNumbers("Maya1",{
                frames:[0,1,2,3,4,5,6,7,8,9]
            })
        }); 
        
    }

   

    create(){


        this.maya = this.physics.add.sprite(100,430, "Maya1");

        // to set a smaller hitbox
        //this.maya.setSize(40,50).setOffset(10,10);

        //to stop character going out of bounds
        this.maya.setCollideWorldBounds(true);
       



        let mappy = this.add.tilemap("mappy");
        let terrain = mappy.addTilesetImage( "RPNoTop");
        let terrain2 = mappy.addTilesetImage( "RPWithTop");
        let terrain3 = mappy.addTilesetImage( "GrassA");


        //layers

        let ground = mappy.createStaticLayer("Ground Layer", [terrain,terrain2,terrain3],0,-2600).setDepth(-1);
        
        

        

        
        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

       // map collisions
        this.physics.add.collider(this.maya, ground);
            //by tile property
        
        ground.setCollisionByProperty({collides:true});

       
    }

    update(){

       /*  this.physics.world.collide(this.maya,(maya: Phaser.Physics.Arcade.Sprite)=>{
            maya.destroy();
            hooded.destroy();

        } */

        // this.physics.accelerateToObject()

         

       if (this.keyboard.A.isDown === true){
           this.maya.setVelocityX(-100);
           this.maya.play("left",true);
           
       }else if(this.keyboard.D.isDown === true){
         
           this.maya.setVelocityX(100);
           this.maya.play("right",true);
          
       }

}

}
