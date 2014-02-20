function Timer(minutes){
    for(var min = minutes;min>=0;min --){
        $('#minutes').delay(1000).replaceWith('<div id="minutes">' + min + '</div>');
        
        
        for (var sec = 10;sec >= 0;sec-- ){
            $('#seconds').delay(1000).fadeIn('slow').replaceWith('<div id="seconds">' + sec + '</div>');
            $('#seconds').fadeOut('slow');  
        }
    }
}

$(document).ready(function () {
    Timer(1);

});



