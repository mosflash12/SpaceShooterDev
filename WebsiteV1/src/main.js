/**@type {import("phaser")} */

import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import {PlayScene} from "./scenes/PlayScene";
import {GAMEOVER} from "./scenes/GAMEOVER";
import{WIN} from "./scenes/WIN";
let game = new Phaser.Game({
    width:1067,
    height:600,
    scene:[
        LoadScene, MenuScene, PlayScene, GAMEOVER, WIN
    ],
    physics: {
        default: 'arcade',
        arcade:{
            gravity:{y:300},
            debug:false
        }
    },
    render:{
        pixelArt: true,
    }
});