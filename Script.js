function Timer(minutes){
    for(var min = minutes;min>=0;min --){
        $('#minutes').html(min);
        Window.setTimeout(function() {return true;}, 1000);
        
        for (var sec = 59;sec >= 0;sec-- ){
            $('#seconds').html(sec);
            Window.setTimeout(function() {return true;}, 1000);
        }
    }
}

$(document).ready(function () {
    $('#minutes').delay(500).fadeIn('slow');

});



