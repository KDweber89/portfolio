

/* $('.begin').click(function() {
    $('.begin').hide('fast');
    return false;
  });*/


/*window.setInterval(function(){    
       $('div').css('background-image','url(background.jpg)');
   },100);
    $('div').css('background-image','url(background_n.jpg)');
},10000);*/
 

$(function(){ 
	var images =['../styles/pictures/lake.jpg', '../styles/pictures/foggyforest.jpg', '../styles/pictures/brooklynbridge.jpg', '../styles/pictures/greatplain.jpg', '../styles/pictures/perspective.jpg', '../styles/pictures/picketfence.jpg', '../styles/pictures/meltedsnow.jpg', '../styles/pictures/skilift.jpg', '../styles/pictures/woodedroad.jpg', '../styles/pictures/weatfield.jpg', '../styles/pictures/serferready.jpg', '../styles/pictures/hillylake.jpg', '../styles/pictures/lostroad.jpg', '../styles/pictures/winterpond.jpg', '../styles/pictures/riverfromafar.jpg', '../styles/pictures/foggylake.jpg', '../styles/pictures/mountainsonlake.jpg', '../styles/pictures/hayfog.jpg', '../styles/pictures/waterflow.jpg' ];


window.setTimeout(function(){
$('.main').css({'background-image': 'url(styles/' +images[Math.floor(Math.random()* images.length)] + ')'} );

});

}, 5);





/*$('.contain').mouseover(function() {
	$('.animation').animate({left: "50%"}, 200);
});*/

	/*	('fast');
	return false;
});




$(this).	animate({
        width: "70%"
    }, 300 );*/