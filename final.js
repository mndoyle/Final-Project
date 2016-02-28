$(function(){
    console.log('ready');
    
    $('#helper').click(function(){
        console.log('click');
        
        $('section#overlay').animate({
            width:'100%',
            left:'0',
        });
        
        $('section p').css('visibility','visible');
        return false;  
    });
    
    $('nav#close').click(function(){
        console.log('click');
        $('section#overlay').css('width','0px');
         $('section p').css('visibility','hidden');
        return false;  
    });   
})
    
                
