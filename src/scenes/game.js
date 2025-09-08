let mContext;
export class Game extends Phaser.Scene {
    left; 
    left2;
    // 0 segundos demora en inicar la canción
    initAvg = 0;
    tabLength = 1210;
    velocity = 200;
    tab = [
        { note: 1, seg: 4.717, pos: 0 },
        { note: 2, seg: 5.261, pos: 0 },
        { note: 3, seg: 5.850, pos: 0 },
        { note: 4, seg: 6.122, pos: 0 },
        { note: 5, seg: 6.395, pos: 0 },
        { note: 6, seg: 6.621, pos: 1 },
        { note: 7, seg: 6.939, pos: 2 },
        { note: 8, seg: 7.211, pos: 1 },
        { note: 9, seg: 7.483, pos: 0 },
        { note: 10, seg: 8.027, pos: 0 },
        { note: 11, seg: 8.345, pos: 1 },
        { note: 12, seg: 8.571, pos: 2 },
        { note: 13, seg: 8.844, pos: 1 },
        { note: 14, seg: 9.116, pos: 0 }
    ];
    initPositions = [];
    positions = [];
    notes = [];
    width;
    height;
    leftFret;
    middleFret;
    rightFret
    flame;

    constructor ()
    {
        super('Game');
    }

    create(){
        this.add.image((this.width/2), (this.height/2), 'bg');
        this.add.image((this.width/2), (this.height/2), 'neck');

        this.leftFret = this.physics.add.sprite(this.positions[0], (this.height - 100), 'fret')
                        .setImmovable(true)
                        .setCircle(45, 55)
                        .setInteractive();

        this.middleFret = this.physics.add.sprite(this.positions[1], (this.height - 100), 'fret')
                        .setImmovable(true)
                        .setCircle(45, 55)
                        .setInteractive();

        this.rightFret = this.physics.add.sprite(this.positions[2], (this.height - 100), 'fret')
                        .setImmovable(true)
                        .setCircle(45, 55)
                        .setInteractive();

        this.flame = this.add.sprite(((this.width/2) - 226), ((this.height/2) + 400), 'hit');    
        this.flame.alpha = 0;

        // Touhchpoints
        this.leftFret.on('pointerdown', () => {
            console.log('Left Fret');
            mContext.notes.forEach(note => {
                if (note.getBounds().contains(mContext.leftFret.x, mContext.leftFret.y)) {
                    mContext.deleteNote(note);
                    this.playFlame(0);
                }
            });
        });

        this.middleFret.on('pointerdown', () => {
            console.log('Middle Fret');
            mContext.notes.forEach(note => {
                if (note.getBounds().contains(mContext.middleFret.x, mContext.middleFret.y)) {
                    mContext.deleteNote(note);
                    this.playFlame(1);
                }
            });
        });

        this.rightFret.on('pointerdown', () => {
            console.log('Right Fret');
            mContext.notes.forEach(note => {
                if (note.getBounds().contains(mContext.rightFret.x, mContext.rightFret.y)) {
                    mContext.deleteNote(note);
                    this.playFlame(2);
                }
            });
        });

        // Scanner
        this.input.keyboard.on('keydown', key => {
            if (key.code === 'KeyA') {
                console.log('A');                
                mContext.notes.forEach(note => {
                    if (note.getBounds().contains(mContext.leftFret.x, mContext.leftFret.y)) {
                        mContext.deleteNote(note);
                        this.playFlame(0);
                    }
                });
            }

            if (key.code === 'KeyS') {
                console.log('S');
                mContext.notes.forEach(note => {
                    if (note.getBounds().contains(mContext.middleFret.x, mContext.middleFret.y)) {
                        mContext.deleteNote(note);
                        this.playFlame(1);
                    }
                });
            }

            if (key.code === 'KeyD') {
                console.log('D');
                mContext.notes.forEach(note => {
                    if (note.getBounds().contains(mContext.rightFret.x, mContext.rightFret.y)) {
                        mContext.deleteNote(note);
                        this.playFlame(2);
                    }
                });
            }
        })

        window.videoState = function(event) {
            console.log('Video started');
            console.log(event.data);
        }

        /**
         * Indica la posicion en donde se debe crear la nota para que caiga en los segundos esperados
         * -(((elem.seg + mContext.initAvg) * mContext.velocity) - mContext.tabLength)
        */
        mContext.tab.forEach((elem) => {
            let note = mContext.physics.add.sprite(
                (mContext.initPositions[elem.pos]),  // X
                (-(((elem.seg + mContext.initAvg) * mContext.velocity) - mContext.tabLength)), // Y
                'notes');
            note.setScale(0.1);
            note.setVelocityY(mContext.velocity);        
            console.log(elem.seg * 1000);
            mContext.tweens.add({
                targets: note,
                x: mContext.positions[elem.pos],
                scale: 1,
                ease: 'Linear',
                duration: (elem.seg * 1000),
                repeat: 0,
                yoyo: false,
            });
            mContext.notes.push(note);
        });

        window.gameStarted = function() {
            console.log('Game started');            
        }
    }

    update(){
        
    }

    init(){     
        mContext = this; 
        this.height = this.sys.game.config.height;
        this.width = this.sys.game.config.width;
        this.positions = [((this.width/2) - 226), (this.width/2), ((this.width/2) + 226)];
        this.initPositions = [((this.width/2) - 67), ((this.width/2) + 2), ((this.width/2) + 89)];
        
        // Animations
        this.anims.create({
            key: 'hit',
            frames: this.anims.generateFrameNumbers('hit', { start: 0, end: 5 }),
            frameRate: 25,
            repeat: 0
        });
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    deleteNote(note){
        mContext.notes.splice(mContext.notes.indexOf(note), 1);
        note.destroy();
    } 
    
    playFlame(posX){
        this.flame.x = this.positions[posX];
        this.flame.alpha = 1;
        this.flame.anims.play('hit', false);

        this.flame.on('animationcomplete', () => {
            this.flame.alpha = 0;
        });
    }

    noteTripAnim(note){

    }
}
