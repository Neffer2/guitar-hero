export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('public/assets');
        this.load.spritesheet('notes', '/notes/notes.png', { frameWidth: 199, frameHeight: 103 });
        this.load.spritesheet('hit', '/notes/hit.png', { frameWidth: 252, frameHeight: 341 });
        this.load.image('fret', '/notes/tecla_on_temp.png');
        this.load.image('neck', '/neck/neck.png');
        this.load.image('bg', '/bg.png');

    }

    create ()
    {
        this.scene.start('Game');
    } 
}