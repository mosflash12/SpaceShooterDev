/**@type {import("phaser")} */

import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import {PlayScene} from "./scenes/PlayScene";
let game = new Phaser.Game({
    width:1067,
    height:600,
    scene:[
        LoadScene, MenuScene, PlayScene
    ],
    render:{
        pixelArt: true,
    }
});