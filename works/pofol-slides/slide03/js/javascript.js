$(function(){

    const $goStory = $('.go-story');
    const $slides = $('.story li');
    const $btnPlay = $('.story-play');
    const $btnPause = $('.story-pause');

    let intervalKey = null;//

    //자동실행
    function autoPlay(){
        intervalKey = setInterval(function(){
            $slides.fadeToggle(800);
        },5000);        
    }

    //재생정지
    function autoPause(){
        clearInterval(intervalKey);
        $btnPause.addClass('on').prev().removeClass('on');
    }


    $goStory.on('click', function(evt){
        evt.preventDefault();
        autoPause();
        $slides.fadeToggle(800);
    });


    //플레이버튼
    $btnPlay.on('click', function(evt){
        evt.preventDefault();        
        $(this).addClass('on').next().removeClass('on');        
        autoPlay();
    });

    
    //일시정지버튼
    $btnPause.on('click', function(evt){
        evt.preventDefault();        
        autoPause();
    });


    //load 이벤트는 컨텐츠가 페이지에 노출된 시점에 딱 한번 일어남
    $(window).on('load', function(){
        autoPlay();
    });
});