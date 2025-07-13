export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('public/assets');
        this.load.image('left', '/buttons/left.png');
        this.load.image('right', '/buttons/right.png');
        this.load.image('up', '/buttons/up.png');
    }

    create ()
    {
        this.scene.start('Game');
    } 
}