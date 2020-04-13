var sethover; 

$(function() {
	$('.home_inner').on({
		'mouseenter':function(){
			sethover = setTimeout(function(){
				$('.home_inner').css('width', '130px');
                $(".first_name").animate({
                    width: "90px"
                    }, 800);
                $('.last_name').animate({
                    width: "90px"
                    }, 900);
			},100);
		},
		'mouseleave':function(){
            $('.home_inner').css('width', '5px');
			$(".first_name").animate({
                width: "9px"
                }, 600);
            $('.last_name').animate({
                width: "8px"
                }, 600);
			clearTimeout(sethover);
		}
	});
});


//----------------------------


// Project section hover //
$(function() {
        $('.projects').children().hover(function() {
        $(this).siblings().stop().fadeTo(700,0.1);
    }, function() {
        $(this).siblings().stop().fadeTo(500,1);
        });
});
