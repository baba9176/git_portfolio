//제이쿼리 방식으로 DOM, 이벤트, Data 핸들링
//read == DOMContentLoaded 와 같은 의미
$(document).ready(function(){

    const $aside = $("aside");
    const $header = $("header");
    const headerH = $header.outerHeight();//헤더의 높이(보더,패딩 포함해서 측정)

    console.log(headerH);

    const $aboutme = $("#aboutme");
    const $mnu = $('header>.container>nav>.gnb>li>a');//6개의 메뉴셀렉팅
    let idx = 0;//현재 선택된 메뉴의 인덱스

    let arrTopVal = [];//header이후에 나타나는 section의 top값

    
    // 함수는 반복되는 코드를 많들어 놓고 사용하면 코드의 재활용 측면에서 유용하게 사용 가능
    function pageAni(topVal){
        $('html, body').stop().animate({scrollTop:topVal});
    }


    //로딩 애니메이션
    $(".loading>p").fadeOut();
    $(".loading").delay(350).fadeOut(800, function(){
        $(this).remove();//내용삭제
    });


    //load 이벤트는 컨텐츠가 페이지에 노출된 시점에 딱 한번 일어남
    //resize 이벤트는 브라우저의 크기가 바뀌면 일어남
    $(window).on('load resize', function(){

        const $h1 = $('h1');
        const $h2 = $('#visual h2');
        const $intro = $h2.parent();
        
        $("#visual").height($(window).height());
        $intro.css({
            marginTop : -$intro.height()/2
        });

        $h1.css({
            top : $h2.offset().top-100,
            marginLeft : -$h1.width()/2
        });

    
        console.log("현재 메뉴의 개수 : "+$mnu.size());
        
        //어떤 요소의 top값(문서/브라우저/body로부터의 거리)를 구하는 방법 -> .offset().top
        //각 section의 top값을 자동으로 계산하는 장점
        //반복문을 이용한 처리
        for(let i=0;i<$mnu.size();i++){
            arrTopVal[i] = $("#visual~section").eq(i).offset().top;
        }
        
    });
    
    
    console.log(arrTopVal);//[508, 1208, 2108, 2808, 3708]
    //0: 568    1: 1068    2: 1568    3: 2068    4: 2568

    $mnu.on('click', function(evt){
        //이번에 클릭한 요소의 index번호
        idx = $mnu.index(this);//0~5
        pageAni(arrTopVal[idx]-headerH+1);//fixed한 헤더의 높이값
        evt.preventDefault();
    });


    $(window).on('scroll', function(){

        let scrollTop = $(this).scrollTop();
        console.log("scrollTop = ",scrollTop);

        //오른쪽 하단 top 화살표
        if(scrollTop>150){
            //$aside.css({display:"block"});
            //$aside.show();
            $aside.fadeIn();
        }else{
            //$aside.css({display:"none"});
            //$aside.hide();
            $aside.fadeOut();
        }

        //헤더고정
        if(scrollTop>$(this).height()){
            $header.addClass('h-fixed');
            $aboutme.css({marginTop:headerH})
        }else{
            $header.removeClass('h-fixed');
            $aboutme.css({marginTop:0})
        }


        //메뉴 활성화 표시
        for(let i=0;i<$mnu.size();i++){
            if(scrollTop>=arrTopVal[i]-headerH-200){//fixed한 헤더의 높이값
                $mnu.eq(i).parent().addClass('on');
                $mnu.eq(i).parent().siblings().removeClass('on');
            }else if(scrollTop<arrTopVal[0]-headerH-200){//비주얼 슬라이드 구간
                $mnu.parent().removeClass('on');
            }
        }

    });

    //로고에 대한 클릭이벤트 구문
    $(".logo>a, aside").on('click', function(evt){
        evt.preventDefault();
        pageAni(0);
    });


    $(window).on('load', function(){
        pageAni(0);
    });

});


//aboutme
$(function(){
    const $slides = $("#aboutme>.visual li");
    const $tit = $slides.find("h3");
    const $desc = $tit.next();
    let nowIdx = 0;

    $slides.on('mouseenter', function(){
        nowIdx = $slides.index(this);

        $tit.eq(nowIdx).css({
            top:300,
            opacity:0.1
        }).stop().animate({
            top:330,
            opacity:1
        },500,"easeInOutCubic");


        $desc.eq(nowIdx).css({
            top:430,
            opacity:0.1
        }).stop().animate({
            top:400,
            opacity:1
        },500,"easeInOutCubic");
    });
   //resume
    const $btnIAM = $(".iam a");
    const $shadow = $(".iam .shadow");
    const $lightbox = $('.iam .lightbox');
    const $btnClse = $(".iam .clse");

    $btnIAM.on('click', function(evt){
        evt.preventDefault();

        $shadow.show();//그림자 노출
        $lightbox.show();
    })

    //닫기
    $btnClse.on('click', function(){
        $lightbox.hide();
        $shadow.hide();
    });


    //그림자영역에서 닫힘
    $shadow.on('click', function(){
        $lightbox.hide();
        $shadow.hide();
    });


    //이벤트전파 안되게 설정
    $lightbox.on('click', function(evt){
        evt.stopPropagation();
    });


    //ESC키  닫기설정
    $(document).on('keyup', function(evt){
        console.log('현재 눌린 키의 번호는 '+ evt.which);
        if(evt.which=='27'){
            $lightbox.hide();
            $shadow.hide();
        }
    });
});


//portfolio
$(function(){

    //페이드 슬라이드
    const $slides = $('#portfolio .slides-container>figure');
    const $indicator = $('#portfolio .slides-pagination>li>a');

    let nowIdx = 0;
    let oldIdx = nowIdx;


    function fadeFn(){
        $slides.eq(oldIdx).stop().fadeOut(200);//이전 슬라이드 사라짐 처리
        $slides.eq(nowIdx).stop().fadeIn(200).css({display:'flex'});//이번에 나타날 슬라이드 처리
        
        //활성화표시
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    }

    $indicator.on('click', function(evt){

        evt.preventDefault();

        oldIdx = nowIdx;
        nowIdx = $indicator.index(this);

        fadeFn();
    });
    const $btnProc = $("#portfolio>.slides .proc");
    const $shadow = $("#portfolio>.slides .shadow");
    const $lightbox = $('#portfolio>.slides .lightbox');
    const $btnClse = $("#portfolio>.slides .clse");

    $btnProc.on('click', function(evt){
        evt.preventDefault();

        $shadow.hide().eq(nowIdx).show();//그림자 노출
    })

    //닫기
    $btnClse.on('click', function(){
        $shadow.hide();
    });


    //그림자영역을 클릭하면 닫힘
    $shadow.on('click', function(){
        $shadow.hide();
    });


    //이벤트전파 안되게 설정
    $lightbox.on('click', function(evt){
        evt.stopPropagation();
    });


    //ESC키를 이용한 닫기설정
    $(document).on('keyup', function(evt){
        console.log('현재 눌린 키의 번호는 '+ evt.which);
        if(evt.which=='27'){
            $shadow.hide();
        }
    });


	//inview 이벤트는 화면이 요소가 출현했을 때 작동
	$(".skill").on("inview", function(evt, visible){
		if(visible==true){
			console.log("inview 이벤트 작동완료");
/*			
			$(".skill .bar").each(function(){
				$(this).css({
				//	"width" : $(this).children("span").text()
				
					"width" : $(this).parent().attr("data-bar")+"%"
				});
			});
*/		

			for(var i=0;i<=5;i++){
				var $that = $(".skill .bar").eq(i);
				$that.css({
					"width" : $that.parent().attr("data-bar")+"%"
				});
			}
		}
	});
	
	
	$(window).on("scroll", function(){
		if($(this).scrollTop() < $(".skill").offset().top-$(this).height()){
			$(".skill .bar").width(0);
		}
	});

	
	$(".skill-piechart").on("inview", function(evt, visible){
		
		if(visible==true){
			
			$('.chart').easyPieChart({
				//your configuration goes here
				easing: 'easeInOutCubic',
				delay: 3000,
				barColor:'#f389e1',
				trackColor:'rgba(255,255,255,0.2)',
				scaleColor: false,
				lineWidth: 8,
				size: 140,
				animate: 2000,
				onStep: function(from, to, percent) {
					this.el.children[0].innerHTML = Math.round(percent);
				}
			});

		}
		
	});

 
    const spreadFn = function (el) {
        for (let i = 0; i < 6; i++) {
            $(el).eq(i).delay((i * 100) + 100).fadeIn(600);
        }

        for (let k = 0; k < 6; k++) {
            $(el).eq(k).delay((k + 6) * 100).fadeOut(600);
        }
    };

    spreadFn(".ring");

    setInterval(function(){
        spreadFn("h4 .ring");
        spreadFn("h4+div .ring");
    }, 3000);

});


//uxdesign
$(function(){

    const $container = $('#uxdesign .slides-container');
    const $indicator = $('#uxdesign .slides-pagination>li>a');
    const $btnNext = $("#uxdesign .next");
    const $btnPrev = $("#uxdesign .prev");
    let nowIdx = 0;


    //컨테이너 이동
    function moveFn(){
        //컨테이너 이동
        $container.stop().animate({
            left : -1100 * nowIdx
        },400,"easeInOutCubic",function(){
            console.log("슬라이드 이동 완료~!");
        });
    }

    //활성화 표시
    function indicatorFn(){
        $indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
    }


    $indicator.on('click', function(evt){
        nowIdx = $indicator.index(this);

        moveFn();
        indicatorFn();

        evt.preventDefault();
    });

    


    $btnNext.on('click', function(evt){
 
        if(nowIdx<=3){
            nowIdx++;
        }else{
            nowIdx = 0;
        }

        //컨테이너 이동
        $container.stop().animate({left : -1100},400,"easeInOutCubic",function(){            
            const $slides = $('.slides-container>li');//li 5개
            $slides.first().appendTo($container);
            $container.css({left:0});
        });
        
        indicatorFn();//인디케이터 활성화

        evt.preventDefault();
    });


    $btnPrev.on('click', function(evt){

        // 보여줄 슬라이드에 대한 인덱스번호 추출
       if(nowIdx>=1) {
        nowIdx--;
       }else{     
         nowIdx=4;
       };

       const $slides = $('.slides-container>li');//li 5개

       //컨테이너 이동
       $slides.last().prependTo($container);
       $container.css({left:-1100});
       $container.stop().animate({left : 0},400,"easeInOutCubic",function(){});

       indicatorFn();//인디케이터 활성화

       evt.preventDefault();
      });



      //자동실행(next 로직과 같음)
      setInterval(function(){

        //방법-1
        //아래 로직과 같은 효과
        //2초에 한번씩 next버튼을 강제로 클릭한다.
        //$btnNext.trigger('click');
 
        //방법-2
        //다음 버튼을 클릭했을 때 작성하 코드를 그대로 복붙해도 됨

      },5000);

});


//#uidesign
$(function(){
    const $thmbs = $("#uidesign .gallery-thmbs>li>a");

    $thmbs.on('click', function(evt){
       evt.preventDefault();

       const imgSrc = $(this).attr('href');

       $("#uidesign .gallery-screen").css({
           'background-image' : 'url(' + imgSrc + ')'
       });

       $(this).parent().addClass('on');
       $(this).parent().siblings().removeClass('on');
    });
});