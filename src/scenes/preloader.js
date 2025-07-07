export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('public/assets');
        
    }

    create ()
    {
        this.scene.start('Game');
    } 
}