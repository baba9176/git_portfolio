$(function(){

	const $hair = $('#slides > .hair ');
	const $pagenation = $('#slides > .slides-pagenation > li > a ' );
	let nowIdx=0;


  $pagenation.on('click',function(evt){
    evt.preventDefault();

    nowIdx=$pagenation.index(this);

    $pagenation.eq(nowIdx).parent().addClass('on');
    $pagenation.eq(nowIdx).parent().siblings().removeClass('on');

    $hair.animate({
      left:-250*nowIdx
    });
  });
});