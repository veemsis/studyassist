function Timer(){
    
    this.start = function (minutes) {
        for (var min = minutes; min >= 0; min--) {
            setTimeout(function () {
                $('#minutes').html(min).fadeIn().fadeOut();
            }, 2000);
            console.log(min);


            for (var sec = 10; sec >= 0; sec--) {

                setTimeout(function () {
                    $('#seconds').html(sec).fadeIn().fadeOut();
                }, 2000);
                console.log(sec);
            }
        }



    };
}
var Watch = new Timer();

$(document).ready(function () {
    
    Watch.start(2);

});



