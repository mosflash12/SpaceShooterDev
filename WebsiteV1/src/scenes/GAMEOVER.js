import {CST} from "../CST";

export class GAMEOVER extends Phaser.Scene{
    constructor(){
        super({key:CST.SCENES.GAMEOVER
        });
    }




    create(){
        this.add.image(0,0,"titlebg").setOrigin(0).setDepth(0);
        let musicbox = this.sound.add("music_box",{
            loop: true,
        });
        musicbox.play();

        let hoverSprite = this.add.sprite(100,100,"orb");
        hoverSprite.setScale(2);
        hoverSprite.setVisible(false);

        this.anims.create({
            key:"walk",
            frameRate:4,
            repeat:-1, // to repeat forever
            frames:this.anims.generateFrameNumbers("orb",{
                frames:[0,1,2,3,4,5,6,7]
            })
        });

        let gameOverText = this.add.text(350,110,'Your Dead!', {
            fontSize: '64px',
            fill:'#ffffff'
        });

        let PlayAgain = this.add.text(430,410,'Play Again?', {
            fontSize: '32px',
            fill:'#ffffff'
        });
        
        

        PlayAgain.setInteractive();

        PlayAgain.on("pointerover", ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = PlayAgain.x - PlayAgain.width + 180;
            hoverSprite.y = PlayAgain.y + 10;
            
        })

        PlayAgain.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
            
        })

        
        PlayAgain.on("pointerup", ()=>{
            
            musicbox.stop();
            this.scene.start(CST.SCENES.LOAD);
            
        })

        
    }
    
}