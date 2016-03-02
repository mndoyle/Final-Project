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

        $('section p').css('visibility', 'visible');
        return false;
    });

    $('nav#close').click(function () {
        console.log('click');
        $('section#overlay').css('width', '0px');
        $('section p').css('visibility', 'hidden');
        return false;
    });
})

// Restaurants

// Sort By