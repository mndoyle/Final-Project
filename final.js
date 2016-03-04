// Main Page

// Slide Button Nav
$(function () {
    console.log('ready');

    $('#swipeButton').click(function () {
        console.log('click');
        $('#swipeButton').animate({
            left: 104,
        })
        $('section#navOverlay').animate({
            width: '80%',
            left: '0',
        });
        $('section#navOverlay p').css('visibility', 'visible').animate({
                opacity: 1,
            },
            1500
        );

        $('#swipeClose').css('visibility', 'visible');
        return false;
    });

    $('section#navClose').click(function () {
        console.log('click');
        $('section#navOverlay').animate({
            width: '0%',
            left: '0',
        });

        $('#swipeButton').animate({
            left: -210,
        })
        $('section#navOverlay p').css('visibility', 'hidden');
        $('#swipeClose').css('visibility', 'hidden');
        $('#swipeButton').css('visibility', 'visible');
        return false;
    });
    
// Hamburger Helper Nav
    $('#helper').click(function () {
        console.log('click');
        
        var center=$(window).width()/2;
         $('section#overlay').css('left', center);

        $('section#overlay').animate({
            width: '100%',
            left: '0',
        });

        $('section#overlay p').css('visibility', 'visible');
        return false;
    });

    $('nav#close').click(function () {
        console.log('click');
        $('section#overlay').css('width', '0px');
        $('section#overlay p').css('visibility', 'hidden');
        return false;
    });


// Restaurants

// Sort By
    $('#options').hide();
    $('#triangle').click(function(){
        console.log('slide toggle');
        $('#options').slideToggle();
    });
    
    $('#ethnicity').click(function(){
        console.log('click');
        $('#alpha').css('visibility','hidden')
        $('#ethnic').css('visibility','visible')
        $('#options').slideToggle();
    });
    
    $('#alphabetical').click(function(){
        console.log('click');
        $('#ethnic').css('visibility','hidden')
        $('#alpha').css('visibility','visible')
        $('#options').slideToggle();
    });

//Question 1
$('#questionOne').hide();
$('#startButton').click(function(){
    console.log('Start Button Click');
    $('#startButton').css('visibility','hidden');
    $('section#questionOne').show();
});
    $('h6').hide();
    $('h5').hide();
    
    //Question 2
    
    $('p#qoneAnswerOne').click(function(){
    console.log('Question One Answer One Clicked');
    $('section#questionOne').css('visibility','hidden');
    $('h6').show();
});
    
    $('p#qoneAnswerThree').click(function(){
    console.log('Question One Answer Three Clicked');
    $('section#questionOne').css('visibility','hidden');
    $('h5').show();
});
    

     })
