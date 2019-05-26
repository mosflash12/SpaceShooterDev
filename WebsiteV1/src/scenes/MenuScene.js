import{CST} from "../CST";
export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })

    }
    init(){
   
    }
  
    create(){

        //create images (z order)
        this.add.image(this.game.renderer.width / 2, this. game.renderer.height * 0.20, "logo").setDepth(1);
        
        this.add.image(0,0,"titlebg").setOrigin(0).setDepth(0);

        let playButton = this.add.image(this.game.renderer.width / 2, this. game.renderer.height / 2, "play_button").setDepth(1);

        let optionButton = this.add.image(this.game.renderer.width / 2, this. game.renderer.height / 2 + 100, "options_button").setDepth(1);

        //crate sprites (if using pixel art, remove sharpen)

        let hoverSprite = this.add.sprite(100,100,"orb");
        hoverSprite.setScale(2);
        hoverSprite.setVisible(false);

        //creating animation

        this.anims.create({
            key:"walk",
            frameRate:4,
            repeat:-1, // to repeat forever
            frames:this.anims.generateFrameNumbers("orb",{
                frames:[0,1,2,3,4,5,6,7]
            })
        })
        //in order to stop audio when off the current page, disable pauseonblur

      
        //to create audio

        let soundSample = this.sound.add("title_music");
        soundSample.play();
        
        // this.sound.play("title_music",{
        //     loop: true,
        // })

        
        
        
        /*
            PointerEvents:
                pointerover - hovering
                pointerout - nothovering
                pointerup - click and release
                pointerdown - just click
                */
        
        playButton.setInteractive();
        optionButton.setInteractive();

        playButton.on("pointerover", ()=>{
            hoverSprite.setVisible(true);
            hoverSprite.play("walk");
            hoverSprite.x = playButton.x - playButton.width + 380;
            hoverSprite.y = playButton.y;
            
        })

        playButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
            
        })

        playButton.on("pointerup", ()=>{
          
            soundSample.stop();
            this.scene.start(CST.SCENES.PLAY);
            
        })
        
        
        optionButton.on("pointerover", ()=>{
             hoverSprite.setVisible(true);
             hoverSprite.play("walk");
             hoverSprite.x = playButton.x - playButton.width + 300;
             hoverSprite.y = playButton.y + 100;
             
        })

        optionButton.on("pointerout", ()=>{
            hoverSprite.setVisible(false);
        
        })

        optionButton.on("pointerup", ()=>{
       
        })
    }

     
  

}