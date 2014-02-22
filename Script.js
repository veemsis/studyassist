function Timer(){
    var isPaused = false;
    var min;
    var sec;
    var minuty;
    var pausedSec, pausedMin;
    this.returnPaused = function () {
        console.log(isPaused);
    }


    this.start = function (minutes, seconds) {
        min = minutes;
        sec = seconds;

        $('#minutes').html(min + ":").fadeIn();
        $('#seconds').html(sec).fadeIn().fadeOut();
        sec = sec - 1;


        minuty = setInterval(function () {
            if (sec === 0 && min === 0) {
                $('#seconds').html("0").fadeIn();
                clearInterval(minuty);
            }
            else if (sec === 0) {
                min = min - 1;
                console.log("Minute is gone " + min);
                $('#minutes').html(min + ":").fadeIn();
                $('#seconds').html("59").fadeIn().fadeOut();
                sec = 58;
            } else {
                console.log("second is gone " + sec);
                $('#seconds').html(sec).fadeIn().fadeOut();
                sec = sec - 1;
            }

        }, 1000);
    };

             this.pause = function () {
                 if (isPaused == false) {
                     isPaused = true;
                     console.log('Pause - sec = ' + sec);
                     pausedSec = sec;
                     pausedMin = min;
                     clearInterval(minuty);
                     console.log('pauseSec = ' + pausedSec);

                 } else {
                     isPaused = false;
                     this.start(pausedMin, pausedSec);

                 }


             };

             
}
var pauseClicked = function () {
    console.log("Pause button is clicked");
}




var Watch = new Timer();

$(document).ready(function () {
    $( "button, input[id='bstart']" ).click(function () {

        Watch.start(2,5);
    });
    
    $( "button, input[id='bpause']" ).click(function () {
        Watch.pause();
    });

});



