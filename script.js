$(function(){
   $('#cross').click(function(){
      $('#error').hide(2000); 
   });
    
    
    /**CAR>HTML**/
    $('#go').click(function(){
        
        function checkIfComplete(){
            if(isComplete==false){
                isComplete = true;
            }
            else{
                place = 'second';
            }
        }
        
        var isComplete = false;
        var place = 'first';        
        
        //get the width of car
        var carWidth = $('#car1').width();
        
        //get the width of race track
        var raceTrackWidth = $(window).width() - carWidth;    
        
        var raceTime1 = Math.floor(1 + (Math.random() * 5000));
        var raceTime2 = Math.floor(1 + (Math.random() * 5000));
    
        console.log(raceTime1);
        
        $('#car1').animate({
            left : raceTrackWidth,
        },raceTime1,function(){
            checkIfComplete();
            
            $('#raceInfo1 span').text("Finished in " + place + "place and clocked in at " + raceTime1/1000 + " seconds");
        });
        
        $('#car2').animate({
            left : raceTrackWidth,
        },raceTime2,function(){
            $('#raceInfo2 span').text("Finished in " + place + "place and clocked in at " + raceTime2/1000 + " seconds");
        });
        
    /*End Of Click*/
    });
    
    $('#reset').click(function(){
        $('.car').css('left', '0');
        $('.raceInfo span').text('');
    });
/*End of ready*/
});