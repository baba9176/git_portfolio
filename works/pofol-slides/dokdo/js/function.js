$(function(){

	const $container = $('.page-one>#slides>.slides-container');
	const $indicators = $('.page-one>.slides-pagination>li>a');

	const $gnb = $('#wrap > header > nav > .gnb');
    const $lnb = $gnb.find('.lnb');
    const $bg_lnb = $('.bg_lnb');

	let nowIdx = 0;

	$indicators.on('click', function(evt){
		evt.preventDefault();
		
		nowIdx = $indicators.index(this);
	
		$indicators.eq(nowIdx).parent().addClass('on');
		$indicators.eq(nowIdx).parent().siblings().removeClass('on');

		$container.animate({
			left : -1000*nowIdx
		});
	});

    $gnb.on('mouseover', function(){
        $bg_lnb.stop().fadeIn(500);
        $lnb.stop().fadeIn(500);
    });

    $gnb.on('mouseout', function(){
        $lnb.stop().fadeOut(300);
        $bg_lnb.stop().fadeOut(300);
    }); 

    $bg_lnb.on('mouseover', function(){
        $gnb.trigger('mouseover');
    });

    $bg_lnb.on('mouseout', function(){
        $gnb.trigger('mouseout');
    });
});
