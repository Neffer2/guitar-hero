let mContext;
export class Game extends Phaser.Scene {
    left; 
    left2;
    // Cuanto demora en iniciar la canción
    initAvg = 0;
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

        this.tab = mContext.getTabs('GreenDay-WakeMeUpWhenSeptemberEnds.txt');
        console.log('Tab loaded:', this.tab);


        this.initAvg = this.tab.length > 0 ? this.tab[0].seg : 0;

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

    getTabs(songName){
        const tabCacheKey = songName || 'GreenDay-WakeMeUpWhenSeptemberEnds.txt';
        const txt = this.cache.text.get(tabCacheKey);

        if (!txt) {
            console.warn(`No se encontró el tab con la clave: ${tabCacheKey}`);
            return [];
        }

        return txt
            .split(/\r?\n/)
            .map(line => line.trim())
            .filter(line => line.length > 0)
            .map((line, index) => {
                const values = line.split(/\s+/).filter(Boolean);
                const seg = Number.parseFloat(values[0]);

                let pos;
                for (let i = 1; i < values.length; i++) {
                    if (/^\d+$/.test(values[i])) {
                        const parsedPos = Number.parseInt(values[i], 10);
                        if (parsedPos >= 0 && parsedPos <= 2) {
                            pos = parsedPos;
                            break;
                        }
                    }
                }

                if (typeof pos === 'undefined') {
                    pos = this.getRandomNumber(0, 3);
                }

                return {
                    note: index + 1,
                    seg: Number.isFinite(seg) ? seg : 0,
                    pos
                };
            })
            .filter(note => note.seg > 0);
    }
}
 