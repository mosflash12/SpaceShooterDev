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
        this.load.image("inner hole","./assets/inner hole.png");
        this.load.image("ladder","./assets/ladder.png");
        this.load.image("spikes","./assets/spikes.png");
        // this.load.image("orb2"," ./assets/orb2.png");

        this.load.tilemapTiledJSON("mappy","./assets/GameSprites[workinprogress]/Maps/level_1[backup].json");

        
        this.textures.addSpriteSheetFromAtlas("Maya1",{frameHeight: 64, frameWidth:64, atlas: "MC_atlas", frame:"Maya.png"});
        this.textures.addSpriteSheetFromAtlas("Mayajump",{frameHeight:64, frameWidth:64, atlas: "MC_atlas", frame:"jumpcycle.png"});
      
        
        
        console.log(this.textures.list);

        
        this.anims.create({
            key:"left",
            frameRate: 10,
            frames: this.anims.generateFrameNumbers("Maya1",{
                frames:[0,1,2,3,4,5,6,7,8,9]
            }),
            repeat:-1
            
        });

        this.anims.create({
            key:"standleft",
            frameRate:10,
            frames: this.anims.generateFrameNumbers("Maya1",{
                frames:[9]
            }),
            repeat: -1
        });

        this.anims.create({
            key:"jump",
            frameRate:10,
            frames: this.anims.generateFrameNumbers("Mayajump", {
                frames:[0,1,2,3,4,5,6]
            }),
            
            
        });



       

        
        
    }
    
   

    create(){
        

        this.maya = this.physics.add.sprite(100,430, "Maya1");
        this.maya.setBounce(0.2);
       

        //collecting orbs
        this.orbs = this.physics.add.group({
            key: "orb",
            repeat: 25,
            setXY:{x: 12, y:-700, stepX:70, stepY:70}
        });

        this.orbs.children.iterate(function(child){
            child.setBounceY(Phaser.Math.FloatBetween(0.4,0.8));
        });
        

        // to set a smaller hitbox
        // this.maya.setSize(40,50).setOffset(10,10);

        //to stop character going out of bounds
        
      


        let mappy = this.add.tilemap("mappy");
        let terrain = mappy.addTilesetImage( "RPNoTop");
        let terrain2 = mappy.addTilesetImage( "RPWithTop");
        let terrain3 = mappy.addTilesetImage( "GrassA");
        let background = mappy.addTilesetImage("inner hole");
        let ladder = mappy.addTilesetImage("ladder");
        let spikes = mappy.addTilesetImage("spikes");
        // let orbtiles = mappy.addTilesetImage("orb2");


        //layers
        //-2600

        let ground = mappy.createStaticLayer("Ground Layer", [terrain,terrain2,terrain3,ladder],0,-2600).setDepth(-1);
        let damage = mappy.createStaticLayer("DamageLayer",[spikes],0,-2600).setDepth(-2);
        let wall = mappy.createStaticLayer("backgroundlayer", [background],0,-2600).setDepth(-3);
        
        
        

        // let orblayer = mappy.createDynamiclayer('orb2', orbtiles,0,0);
        // orblayer.setTileindexCallBack('2', orbtiles,0,0);
        
          //set bounds so the camera wouldnt go outside the game world
          this.cameras.main.setBounds(0,-1000 , mappy.widthInPixels, mappy.heightInPixels);
          //so camera would follow the player
          this.cameras.main.startFollow(this.maya);
          this.cameras.main.zoomTo(1.5,1000);
          
        

        
        this.keyboard = this.input.keyboard.addKeys("W, A, S, D");

       // map collisions
        this.physics.add.collider(this.maya, ground);
        this.physics.add.collider(this.orbs, ground);
        this.physics.add.collider(this.maya, damage, spikeDamage,null,this);
        // this.phyiscs.add.collider(this.maya, wall);
        // this.phyiscs.add.overlap(this.maya,wall,climbup,null,this);
        
        this.physics.add.overlap(this.maya,this.orbs,collectOrb,null,this);
        this.score = 0;
        this.scoreText = this.add.text(200,110,'Orbs: 0', {
            fontSize: '32px',
            fill:'#ffffff'
        });
        this.scoreText.setScrollFactor(0);

        
        function collectOrb(player,orbs){
            player == this.maya;
            orbs == this.orbs;
           
            orbs.disableBody(true,true);
            this.maya.setTint(0x9FC5E8);
            this.score ++;
            this.scoreText.setText('Orbs: ' + this.score);
            this.maya.setTint(0xFFFFFF); 

            if (this.score == 13){
                this.scene.start(CST.SCENES.WIN);
            };
            return false
           
        }

        function spikeDamage(player,spike){
            player == this.maya;
            spike == damage;

            this.scene.start(CST.SCENES.GAMEOVER);

            
        }
        // function climbup(player,ladder){
        //     player == this.maya;
        //     ladder == ladder
        // }
    

            //by tile property
        
        ground.setCollisionByProperty({collides:true});
        damage.setCollisionByProperty({SpikeDamage: true});

       
    }

    

    update(){

    

         

       if (this.keyboard.A.isDown === true){
           this.maya.setVelocityX(-100);
           this.maya.play("left",true);
           //used to flip the sprite
           this.maya.flipX = false;
           
           
       }else if(this.keyboard.D.isDown === true ){
         
           this.maya.setVelocityX(100);
           this.maya.play("left",true);
           //used to flip the sprite
           this.maya.flipX = true;
          
       }else {
           this.maya.setVelocityX(0);
           this.maya.play("standleft",true);
       }

       if ( this.keyboard.W.isDown === true && this.maya.body.onFloor()){
           this.maya.setVelocityY(-220);
           this.maya.play('jump',true);
       }

}


}
