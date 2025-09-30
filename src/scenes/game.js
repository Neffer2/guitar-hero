let mContext;
export class Game extends Phaser.Scene {
    left; 
    left2;
    // 0 segundos demora en inicar la canción
    initAvg = 0;
    tabLength = 1210;
    velocity = 200;
    tab = [
        { note: 1, seg: 4.082, pos: 0 },
        { note: 2, seg: 4.535, pos: 0 },
        { note: 3, seg: 5.261, pos: 0 },
        { note: 4, seg: 5.488, pos: 0 },
        { note: 5, seg: 5.714, pos: 0 },
        { note: 6, seg: 5.941, pos: 0 },
        { note: 7, seg: 6.395, pos: 0 },

        { note: 8, seg: 7.120, pos: 0 },
        { note: 9, seg: 7.347, pos: 0 },
        { note: 10, seg: 7.619, pos: 0 },
        { note: 11, seg: 7.800, pos: 0 },

        { note: 12, seg: 8.299, pos: 0 },

        { note: 13, seg: 9.116, pos: 0 },
        { note: 14, seg: 9.297, pos: 0 },
        { note: 15, seg: 9.705, pos: 0 },
        { note: 16, seg: 10.068, pos: 0 },

        { note: 17, seg: 11.020, pos: 0 },
        { note: 18, seg: 11.247, pos: 0 },
        { note: 19, seg: 11.565, pos: 0 },
        { note: 20, seg: 11.927, pos: 0 },


        { note: 21, seg: 12.834, pos: 0 },
        { note: 22, seg: 13.016, pos: 0 },
        { note: 23, seg: 13.379, pos: 0 },
        { note: 24, seg: 13.741, pos: 0 },

        { note: 25, seg: 14.739, pos: 0 },
        { note: 26, seg: 14.921, pos: 0 },
        { note: 27, seg: 15.193, pos: 0 },
        { note: 28, seg: 15.556, pos: 0 },

        { note: 29, seg: 16.553, pos: 0 },
        { note: 30, seg: 16.735, pos: 0 },
        { note: 31, seg: 17.052, pos: 0 },
        { note: 32, seg: 17.460, pos: 0 },

        // PUSH ME
        { note: 33, seg: 18.866, pos: 2 },
        { note: 34, seg: 19.320, pos: 2 },

        { note: 35, seg: 20.000, pos: 2 },
        { note: 36, seg: 20.272, pos: 2 },
        { note: 37, seg: 20.499, pos: 2 },

        { note: 38, seg: 20.726, pos: 2 },
        { note: 39, seg: 21.134, pos: 2 },

        { note: 40, seg: 21.905, pos: 2 },
        { note: 41, seg: 22.132, pos: 2 },
        { note: 42, seg: 22.313, pos: 2 },
        { note: 43, seg: 22.585, pos: 2 },

        { note: 44, seg: 23.039, pos: 2 },

        { note: 45, seg: 23.855, pos: 2 },
        { note: 46, seg: 24.036, pos: 2 },
        { note: 47, seg: 24.354, pos: 2 },
        { note: 48, seg: 24.853, pos: 2 },

        { note: 49, seg: 25.760, pos: 2 },
        { note: 50, seg: 25.896, pos: 2 },
        { note: 51, seg: 26.259, pos: 2 },
        { note: 52, seg: 26.712, pos: 2 },

        { note: 53, seg: 27.574, pos: 2 },
        { note: 54, seg: 27.755, pos: 2 },
        { note: 55, seg: 28.118, pos: 2 },
        { note: 56, seg: 28.526, pos: 2 },

        { note: 57, seg: 29.433, pos: 2 },
        { note: 58, seg: 29.569, pos: 2 },
        { note: 59, seg: 29.932, pos: 2 },
        { note: 60, seg: 30.385, pos: 2 },

        { note: 61, seg: 31.247, pos: 2 },
        { note: 62, seg: 31.429, pos: 2 },
        { note: 63, seg: 31.837, pos: 2 },
        { note: 64, seg: 32.245, pos: 2 },

        { note: 65, seg: 33.107, pos: 2 },
        { note: 66, seg: 33.288, pos: 2 },
        { note: 67, seg: 33.651, pos: 2 },
        { note: 68, seg: 34.059, pos: 2 },

        // CHORUS
        { note: 69, seg: 35.374, pos: 2 },
        { note: 70, seg: 35.873, pos: 1 },
        { note: 71, seg: 36.190, pos: 0 },

        { note: 72, seg: 36.871, pos: 2 },
        { note: 73, seg: 37.007, pos: 2 },

        { note: 74, seg: 37.415, pos: 2 },
        { note: 75, seg: 37.778, pos: 2 },
        { note: 76, seg: 37.914, pos: 1 },
        { note: 77, seg: 38.141, pos: 2 },
        { note: 78, seg: 38.367, pos: 1 },
        { note: 79, seg: 38.639, pos: 2 },
        { note: 80, seg: 39.093, pos: 1 },
        { note: 81, seg: 39.274, pos: 2 },
        { note: 82, seg: 39.773, pos: 1 },
        { note: 83, seg: 40.000, pos: 0 },

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
                    (-(((elem.seg + mContext.initAvg) * mContext.velocity) - mContext.tabLength)), // Y
                    'notes');
                note.setScale(0.1);
                note.setVelocityY(mContext.velocity);        
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

    }
}
