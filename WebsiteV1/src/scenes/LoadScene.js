import{CST} from "../CST";
export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })

    }
    init(){

    }
    preload(){
        //change resolution to: 800x600 before startting

        //load image, spritesheet, sound
        this.load.image("titlebg", "./assets/night_titlescreenbg.jpg");
        this.load.image("options_button", "./assets/night_optionbutton.png");
        this.load.image("play_button", "./assets/night_playbutton.png");
        this.load.image("logo", "./assets/originallogo3.png");

        this .load.spritesheet("orb","./assets/orb2.png",{
            frameHeight:32,
            frameWidth:32,
        });
        this.load.spritesheet("MC","./assets/GameSprites[workinprogress]/Characters/MC.png", {frameHeight:64, frameWidth:64});
        this.load.atlas("MC_atlas", "./assets/GameSprites[workinprogress]/Characters/CharacterAtlas.png", "./assets/GameSprites[workinprogress]/Characters/CharacterAtlas.json");

        this.load.audio("title_music","./assets/238072__shuinvy__childhood.mp3");

       

        //create loading bar

        let loadingBar = this.add.graphics({
            fillStyle:{
                color: 0xffffff //white
            }
        });

        /*
        Loader Events:
            complete - when done loading everything
            progress - loader number progress in decimal
        */
          for(let i = 0; i < 100; i++){
           this.load.spritesheet("cat" + i,"SpaceShooterDev/WebsiteV1/assets/testSprite/cat.png",{
             frameHeight: 32,
               frameWidth: 32
            });} 
          

        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        });
    }
    create(){

        this.scene.start(CST.SCENES.MENU);
    }
}