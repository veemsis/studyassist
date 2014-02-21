function Timer(){
    

    this.start = function (minutes) {
        var min = minutes;
        var sec = 0;
        
           var minuty = setInterval(function () {
                if(sec === 0 && min ===0){
                    clearInterval(minuty);
                }
                else if(sec === 0){
                    console.log("Minute is gone " + min);
                    $('#minutes').html(min).fadeIn();
                    min = min-1;
                    sec = 59;
                    }else{
                        console.log("second is gone " + sec);
                        $('#seconds').html(sec).fadeIn().fadeOut();
                        sec = sec-1;
                    }
                
            }, 1000);     
             };
}




var Watch = new Timer();

$(document).ready(function () {
    
    Watch.start(1);

});



