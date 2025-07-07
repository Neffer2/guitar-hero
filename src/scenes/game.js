export class Game extends Phaser.Scene {
    constructor ()
    {
        super('Game');
    }

    create(){
        
    }

    update(){
        
    }

    init(){
        
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
}   