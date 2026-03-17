let mContext;
export class Game extends Phaser.Scene {
    left; 
    left2;
    tab = [
        { note: 1, seg: 8.101089, pos: 1 },
        { note: 2, seg: 8.435374, pos: 0 },
        { note: 3, seg: 8.752834, pos: 2 },

        { note: 4, seg: 9.070295, pos: 0 },
        { note: 5, seg: 9.387755, pos: 0 },
        { note: 6, seg: 9.659864, pos: 2 },

        { note: 7, seg: 10.521542, pos: 0 },
        { note: 8, seg: 10.884354, pos: 0 },
        { note: 9, seg: 11.292517, pos: 2 },

        { note: 10, seg: 11.609977, pos: 0 },
        { note: 11, seg: 11.882086, pos: 0 },
        { note: 12, seg: 12.244898, pos: 2 },

        { note: 13, seg: 13.061224, pos: 0 },
        { note: 14, seg: 13.424036, pos: 0 },
        { note: 15, seg: 13.832200, pos: 2 },

        { note: 16, seg: 14.149660, pos: 0 },
        { note: 17, seg: 14.467120, pos: 0 },
        { note: 18, seg: 14.784580, pos: 2 },

        { note: 19, seg: 15.600907, pos: 0 },
        { note: 20, seg: 15.963719, pos: 0 },
        { note: 21, seg: 16.326531, pos: 2 },

        { note: 22, seg: 16.643991, pos: 0 },
        { note: 23, seg: 17.006803, pos: 0 },
        { note: 24, seg: 17.278912, pos: 2 },
    ];
    // Cuanto demora en iniciar la canción
    initAvg = this.tab[0].seg;
    velocity = 200;
    tabLength = 1280;
    initPositions = [];
    positions = [];
    notes = [];
    width;
    height;
    leftFret;
    middleFret;
    rightFret;
    flame;

    constructor ()
    {
        super('Game');
    }

    create(){
        this.add.image((this.width/2), (this.height/2), 'bg');
        this.add.image((this.width/2), (this.height/2), 'neck');

        this.leftFret = this.physics.add.sprite(this.positions[0], (this.height - 100), 'fret')
                        .setSize(200, 120, true)
                        .setImmovable(true)
                        .setInteractive();

        this.middleFret = this.physics.add.sprite(this.positions[1], (this.height - 100), 'fret')
                        .setSize(200, 120, true)
                        .setImmovable(true)
                        .setInteractive();

        this.rightFret = this.physics.add.sprite(this.positions[2], (this.height - 100), 'fret')
                        .setSize(200, 120, true)
                        .setImmovable(true)
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

            /**
             * Indica la posicion en donde se debe crear la nota para que caiga en los segundos esperados
             * -(((elem.seg + mContext.initAvg) * mContext.velocity) - mContext.tabLength)
            */
            mContext.tab.forEach((elem) => {
                let note = mContext.physics.add.sprite(
                    (mContext.initPositions[elem.pos]),  // X
                    (-1000), // Y
                    'notes');
                note.y  = (-(mContext.velocity * elem.seg)) + (mContext.tabLength - note.body.height);
                note.setVelocityY(mContext.velocity);        
                note.position = elem.pos;
                mContext.noteTripAnim(note);
                mContext.notes.push(note);
            });
        }

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
        if (note.position === 0) this.physics.moveToObject(note, this.leftFret, 200);
        if (note.position === 1) this.physics.moveToObject(note, this.middleFret, 200);
        if (note.position === 2) this.physics.moveToObject(note, this.rightFret, 200);
    }
}
 