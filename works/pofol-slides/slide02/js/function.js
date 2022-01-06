$(function(){

    const $indicator = $('.slides>.slides-pagination>li>a');
    const $container = $('.slides>.slides-container');
    const $btnNext = $(".next");
    const $btnPrev = $(".prev");
    let nowIdx = 0;


    //활성화표시, 컨테이너 이동
    function moveFn(){
        //활성화표시
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');

        //컨테이너 이동
        $container.stop().animate({
            left : -1180 * nowIdx
        },400,"easeInOutCubic",function(){
            console.log("슬라이드 이동 완료~!");
        });
    }


    $indicator.on('click', function(evt){

        //이번에 클릭한 a의 인덱스번호 추출
        nowIdx = $indicator.index(this);

        moveFn();


        evt.preventDefault();
    });

    $btnNext.on('click', function(evt){
        //보여줄 슬라이드에 대한 인덱스번호 추출
        /**
         * 만약 
         * 
       nowIdx < 4  이면 1증가
       nowIdx <= 3 이면 1증가

       nowIdx == 0 이면 1 증가
       nowIdx == 1 이면 1 증가
       nowIdx == 2 이면 1 증가
       nowIdx == 3 이면 1 증가

       nowIdx == 4 이면 0
       nowIdx == 4 이면 nowIdx-4

       nowIdx > 3 이면 nowIdx-4

         0      -> 1
         1      -> 2
         2      -> 3
         3      -> 4

         4      -> 0

         */

        if(nowIdx<=3){
            nowIdx++;
        }else{
            nowIdx = 0;
        }

        moveFn();
        evt.preventDefault();
    });

    $btnPrev.on('click', function(evt){

        // 보여줄 슬라이드에 대한 인덱스번호 추출
       if(nowIdx>=1) {
        nowIdx--;
       }else{     
         nowIdx=4;
       };
    
       moveFn();
    
       evt.preventDefault();
      });


      let intervalID = "";

      //슬라이드 자동실행
      intervalID = setInterval(function(){

        //다음 슬라이드의 인덱스 추출
        if(nowIdx<=3){
          nowIdx++;
        }else{
            nowIdx = 0;
        }

        moveFn();

      },2000);


});