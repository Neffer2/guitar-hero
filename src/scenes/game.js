let mContext;
export class Game extends Phaser.Scene {
    left; 
    left2; 

    constructor ()
    {
        super('Game');
    }

    create(){
    }

    update(){
        // console.log(this.left.body.velocity.y);
    }

    init(){     
        mContext = this;   
        window.videoState = function(event) {
            console.log('Video started');
            console.log(event.data);
        }

        window.gameStarted = function() {
            console.log('Game started');
            this.left = mContext.physics.add.image(400, -380, 'left').setScale(0.25).setInteractive();
            this.left.body.setVelocityY(200);

            this.left2 = mContext.physics.add.image(400, -480, 'left').setScale(0.25).setInteractive();
            this.left2.body.setVelocityY(200);
        }
        

        
        // this.add.image(600, 300, 'right').setScale(0.25).setInteractive();
        // this.add.image(500, 200, 'up').setScale(0.25).setInteractive();
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
