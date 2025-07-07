export class Game extends Phaser.Scene {
    iframe;
    constructor ()
    {
        super('Game');
    }

    create(){
        console.log("Hola muindo");
    }

    update(){
        
    }

    init(){
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
}   