export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('public/assets');
        this.load.image('notes', '/notes/notes.png');
        this.load.image('neck', '/neck/neck.png');

    }

    create ()
    {
        this.scene.start('Game');
    } 
}