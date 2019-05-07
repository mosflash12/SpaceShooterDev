import { CST } from "../CST";

export class PlayScene extends Phaser.Scene {
    constructor(){
        super({key:CST.SCENES.PLAY});
    }

    
    

    init(){}

    preload(){
        
        this.load.spritesheet('ground','./assets/GameSprites[workinprogress]/test.png',
        {frameWidth:32,
        frameHeight:32,});

        /* PlayScene.load.image('sky',''); */


      /*   PlayScene.load.image()
        PlayScene.load.image()
        PlayScene.load.spritesheet() */

        
        
    }

   

    create(){
    

        platforms = this.physics.add.staticGroup();

        platforms.create(400,500, 'ground');




        // Gamepad.physics.startSystem(Phaser.Physics.ARCADE)

        // PlayScene.add.sprite(0,0,'sky')

/*         platforms = game.add.group()
        platforms.enableBody = true

        let ground = platforms.create(0, game.world.height - 64, 'ground')
        ground.scale.setTo(2,2)
        ground.body.immovable = true
         */
        

/*         player = game.add.sprite(32, game.world.height - 150, 'w')
        game.physics.arcade.enable(player)
        player.body.bounce.y = 0.2
        player.body.gravity.y = 800
        player.body.collideWorldBounds = true */
    }

}

