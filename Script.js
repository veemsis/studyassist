function Timer(){

    this.setMinutes = function (minutes) {
        this.minutes = minutes;
    };
    
    this.timeOut = function () {
        for (var min = minutes; min >= 0; min--) {
            $('#minutes').replaceWith('<div id="minutes>' + min + '</div>');
            $('#minutes').fadeIn('fast');
            $('#minutes').delay(1000).fadeOut('fast');


            for (var sec = 10; sec >= 0; sec--) {
                $('#seconds').delay(1000).replaceWith('<div id="seconds">' + sec + '</div>');
                $('#seconds').fadeIn('fast');
                $('#seconds').delay(1000).fadeOut('fast');



            }
        }



    }
}
var Watch = new Timer();
$(document).ready(function () {
    Watch.setMinutes(2);
    Watch.timeOut;

});



