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
    notes = [];
    width;
    height;

    constructor ()
    {
        super('Game');
    }

    create(){
        this.add.image((this.width/2), (this.height/2), 'bg');
        this.add.image((this.width/2), (this.height/2), 'neck');

        let positions = [((this.width/2) - 226), (this.width/2), ((this.width/2) + 226)];

        window.videoState = function(event) {
            console.log('Video started');
            console.log(event.data);

            /**
             * Indica la posicion en donde se debe crear la nota para que caiga en los segundos esperados
             * -(((elem.seg + mContext.initAvg) * mContext.velocity) - mContext.tabLength)
            */
            mContext.tab.forEach((elem) => {
                let note = mContext.physics.add.image(
                    (positions[elem.pos]),  // X
                    (-(((elem.seg + mContext.initAvg) * mContext.velocity) - mContext.tabLength)), // Y
                    'notes');
                note.setVelocityY(mContext.velocity);
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
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
