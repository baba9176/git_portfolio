$(function(){
    const $container = $('#slides > .slides-container');
    const $btn = $('#slides > .slides-pagination > li > a');
    const $next = $('#slides > .slides-next');
    const $prev = $('#slides > .slides-previous');
    let nowIdx = 0;
  
    $btn.on('click', function(evt){
  
      evt.preventDefault();
  
      nowIdx = $btn.index(this);
  
      // 버튼활성화
      $btn.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
      // 컨테이너이동
      $container.stop().animate({
        left: -(100*nowIdx)+"%"
      });
    });
  
    $next.on('click', function(evt){    
  
      evt.preventDefault();
  
     if(nowIdx<2) {
      nowIdx++;
     }else{
      nowIdx=0;
     };
  
      // 버튼활성화
      $btn.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
      // 컨테이너이동
      $container.stop().animate({
        left: -(100*nowIdx)+"%"
      });
    });
  
    $prev.on('click', function(evt){    
  
      evt.preventDefault();
  
     if(nowIdx>0) {
      nowIdx--;
     }else{
      nowIdx=2;
     };
  
      // 버튼활성화
      $btn.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  
      // 컨테이너이동
      $container.stop().animate({
        left: -(100*nowIdx)+"%"
      });
    });

        //자동실행(next 로직과 같음)
        setInterval(function(){
          $next.trigger('click');
    
        },8000);
  });
//계절별 슬라이드 봄
$(function(){

  const $slides = $('#slides_1>.slides-container>li');
  const $indicator = $('#slides_1>.slides-pagination>li>a');
  const $btnPrev = $('#slides_1>.slides-navigation>a>.slides-prev');
  const $btnNext = $('#slides_1>.slides-navigation>a>.slides-next');

  let nowIdx = 0;
  let oldIdx = nowIdx;

  //함수선언
  function fadeFn(){

      $slides.eq(oldIdx).stop().fadeOut(800);
      $slides.eq(nowIdx).stop().fadeIn(800);
      
      //활성화표시
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  }

  //인티케이터 활성화
  $indicator.on('click', function(evt){

      oldIdx = nowIdx;
      nowIdx = $indicator.index(this);
       
      fadeFn();
      evt.preventDefault();
  });
  //이전다음
  $btnPrev.on('click', function(evt){

      oldIdx = nowIdx;

      if(nowIdx>0){
          nowIdx--;
      }else{
          nowIdx = 3;
      }

      fadeFn();
      evt.preventDefault();
  });

  $btnNext.on('click',function(evt){

      oldIdx = nowIdx;

      if(nowIdx<3){
          nowIdx++;
      }else{
          nowIdx = 0;
      }
      fadeFn();
      evt.preventDefault();
  });
//자동실행
setInterval(function(){
  $btnNext.trigger('click');

 },5000);
  
}); 

//계절별 슬라이드 여름
$(function(){

  const $slides = $('#slides_2>.slides-container>li');
  const $indicator = $('#slides_2>.slides-pagination>li>a');
  const $btnPrev = $('#slides_2>.slides-navigation>a>.slides-prev');
  const $btnNext = $('#slides_2>.slides-navigation>a>.slides-next');

  let nowIdx = 0;
  let oldIdx = nowIdx;

  //함수선언
  function fadeFn(){

      $slides.eq(oldIdx).stop().fadeOut(800);
      $slides.eq(nowIdx).stop().fadeIn(800);
      
      //활성화표시
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  }

  //인티케이터 활성화
  $indicator.on('click', function(evt){

      oldIdx = nowIdx;
      nowIdx = $indicator.index(this);
       
      fadeFn();
      evt.preventDefault();
  });
  //이전다음
  $btnPrev.on('click', function(evt){

      oldIdx = nowIdx;

      if(nowIdx>0){
          nowIdx--;
      }else{
          nowIdx = 3;
      }

      fadeFn();
      evt.preventDefault();
  });

  $btnNext.on('click',function(evt){

      oldIdx = nowIdx;

      if(nowIdx<3){
          nowIdx++;
      }else{
          nowIdx = 0;
      }
      fadeFn();
      evt.preventDefault();
  });
//자동실행
setInterval(function(){
  $btnNext.trigger('click');

 },5000);
  
}); 

//계절별 슬라이드 가을
$(function(){

  const $slides = $('#slides_3>.slides-container>li');
  const $indicator = $('#slides_3>.slides-pagination>li>a');
  const $btnPrev = $('#slides_3>.slides-navigation>a>.slides-prev');
  const $btnNext = $('#slides_3>.slides-navigation>a>.slides-next');

  let nowIdx = 0;
  let oldIdx = nowIdx;

  //함수선언
  function fadeFn(){

      $slides.eq(oldIdx).stop().fadeOut(800);
      $slides.eq(nowIdx).stop().fadeIn(800);
      
      //활성화표시
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  }

  //인티케이터 활성화
  $indicator.on('click', function(evt){

      oldIdx = nowIdx;
      nowIdx = $indicator.index(this);
       
      fadeFn();
      evt.preventDefault();
  });
  //이전다음
  $btnPrev.on('click', function(evt){

      oldIdx = nowIdx;

      if(nowIdx>0){
          nowIdx--;
      }else{
          nowIdx = 3;
      }

      fadeFn();
      evt.preventDefault();
  });

  $btnNext.on('click',function(evt){

      oldIdx = nowIdx;

      if(nowIdx<3){
          nowIdx++;
      }else{
          nowIdx = 0;
      }
      fadeFn();
      evt.preventDefault();
  });
//자동실행
setInterval(function(){
  $btnNext.trigger('click');

 },5000);
  
}); 

//계절별 슬라이드 겨울
$(function(){

  const $slides = $('#slides_4>.slides-container>li');
  const $indicator = $('#slides_4>.slides-pagination>li>a');
  const $btnPrev = $('#slides_4>.slides-navigation>a>.slides-prev');
  const $btnNext = $('#slides_4>.slides-navigation>a>.slides-next');

  let nowIdx = 0;
  let oldIdx = nowIdx;

  //함수선언
  function fadeFn(){

      $slides.eq(oldIdx).stop().fadeOut(800);
      $slides.eq(nowIdx).stop().fadeIn(800);
      
      //활성화표시
      $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
  }

  //인티케이터 활성화
  $indicator.on('click', function(evt){

      oldIdx = nowIdx;
      nowIdx = $indicator.index(this);
       
      fadeFn();
      evt.preventDefault();
  });
  //이전다음
  $btnPrev.on('click', function(evt){

      oldIdx = nowIdx;

      if(nowIdx>0){
          nowIdx--;
      }else{
          nowIdx = 3;
      }

      fadeFn();
      evt.preventDefault();
  });

  $btnNext.on('click',function(evt){

      oldIdx = nowIdx;

      if(nowIdx<3){
          nowIdx++;
      }else{
          nowIdx = 0;
      }
      fadeFn();
      evt.preventDefault();
  });
//자동실행
setInterval(function(){
  $btnNext.trigger('click');

 },5000);
  
}); 











