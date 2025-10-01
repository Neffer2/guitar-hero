let startButton = document.getElementById('start');
let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '250',
        width: '250',
        videoId: 'O7ExJ3_yKtQ',
        playerlets: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    startButton.addEventListener('click', function() {
        setTimeout(function() {
            event.target.playVideo();
        }, 2000);
        
        window.gameStarted();
    });

}

let done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        window.videoState(event);
        done = true;
    }
}

function stopVideo() {
    player.stopVideo();
}