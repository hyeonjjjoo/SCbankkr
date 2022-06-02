$(function(){
    // 메인
    var btn = $('.LRbtn .image');
    var gr = $('.mainTop .group');
    var sl = $('.mainTop .slide');
    var pg = $('main .paging li');
    var m = 0;
    var pause = $('.mainBtm>.sdBtn span:nth(0)');
    var play = $('.mainBtm>.sdBtn span:nth(1)');
    // var auto = setInterval(slideright,4000);

    // 메인 페이징 버튼
    pg.click(function(){
        var ind =  $(this).index()
        pg.removeClass('on');          
        $(this).addClass('on');          
        gr.css('margin-left', ind * -100 +'%');
        sl.find('.image').removeClass('in');
        sl.eq(ind).find('.image').addClass('in');
        i = ind ;
    });
    // 메인 자동 슬라이드 재생 정지 버튼
    pause.click(function(){
        pause.css({display : 'none'});
        play.css({display : 'block'});
        clearInterval(auto);
    });
    play.click(function(){
        pause.css({display : 'block'});
        play.css({display : 'none'});
        auto = setInterval(slideright,4000);
    });

    // 메인 버튼 클릭시
    btn.first().click(slideleft);
    btn.last().click(slideright);
    function slideright(){
        m++;
        m = m%6
        var col = $('.slide').eq(m).attr('data-col');
        gr.stop().css({
            marginLeft: m * -100 + '%'
        })
        $('.mainWrap').css({
            background: col
        })
        sl.find('.image').removeClass('in');
        sl.eq(m).find('.image').addClass('in');
        pg.removeClass('on');          
        pg.eq(m).addClass('on'); 
    }                  
    function slideleft(){
        m--;
        m = (m+6)%6;
        gr.stop().css({
            marginLeft: m * -100 + '%'
        })
        sl.find('.image').removeClass('in');
        sl.eq(m).find('.image').addClass('in');
        pg.removeClass('on');          
        pg.eq(m).addClass('on'); 
    }

    //컨텐츠2
    var auto2 = setInterval(slide,4000)
    var imgGrp = $('.imgGroup');
    var pg2 = $('.artLeft .paging li');
    var pause2 = $('.artLeft .sdBtn span:nth(0)');
    var play2 = $('.artLeft .sdBtn span:nth(1)');
    var j = 0;
    function slide(){
        imgGrp.find('.image').removeClass('first');
        imgGrp.find('.image').removeClass('second');
        imgGrp.find('.image').removeClass('third');
        imgGrp.find('.image').removeClass('fourth');
        imgGrp.find('.image').eq(1).addClass('first');
        imgGrp.find('.image').eq(2).addClass('second');
        imgGrp.find('.image').eq(3).addClass('third');
        imgGrp.find('.image').eq(4).addClass('fourth');
        imgGrp.stop().animate({
            marginLeft :'-33%'
        },500,function(){
            imgGrp.find('.image').first().appendTo('.imgGroup');
            imgGrp.css({
            marginLeft : '0%'})
        });
        // 페이징 버튼 
        j++
        if(j>=3){
            j=0
        }
        pg2.removeClass('on');
        pg2.eq(j).addClass('on');
        // 텍스트슬라이드
        $('.textView .texts').removeClass('on');
        $('.textView .texts').eq(j).addClass('on');
    } 
    // 컨텐츠2 자동 슬라이드 재생 정지 버튼
    pause2.click(function(){
        pause2.css({display : 'none'});
        play2.css({display : 'block'});
        clearInterval(auto2);
    });
    play2.click(function(){
        pause2.css({display : 'block'});
        play2.css({display : 'none'});
        auto2 = setInterval(slide,4000);
    });

    // 컨텐츠2 artRight
    var q = 0;
    var auto3 = setInterval(slideright2,3000);
    var txtGroup = $('.artRight .Group');
    var pg3 = $('.artRight .paging li');
    var pause3 = $('.artRight .sdBtn span:nth(0)');
    var play3 = $('.artRight .sdBtn span:nth(1)');

    function slideright2(){
        q++;
        q = q%2;
        pg3.removeClass('on');
        pg3.eq(q).addClass('on');
        txtGroup.animate({
            marginLeft : q*-100+'%'
        });
        
    };
    // 컨텐츠2 artRight 자동 슬라이드 재생 정지 버튼
    pause3.click(function(){
        pause3.css({display : 'none'});
        play3.css({display : 'block'});
        clearInterval(auto3);
    });
    play3.click(function(){
        pause3.css({display : 'block'});
        play3.css({display : 'none'});
        auto3 = setInterval(slideright2,3000);
    });
    // 페이징 버튼 클릭시
    pg3.click(function(){
        var ind =  $(this).index();
        pg3.removeClass('on');          
        $(this).addClass('on');          
        txtGroup.css('margin-left', ind * -100 +'%')
    });

    // 컨텐츠2 artbottom 
    $('.cnt02 .artBtm li').mouseover(function(){
        var ind = $(this).index();
        $('.box').css({
            left : 100 / 5 * ind + '%'
        });
    });

    // 컨텐츠3
    $('.cnt03 li').even().mouseover(function(){
        $('.cnt03 li').removeClass('on');
        $(this).addClass('on');
        $(this).next().addClass('on');
    });


    // 스크롤이벤트
    var loc = [$('body>div')];
    var cnt = 1;
    var flag = true;
    var sc = 0;
    var now =  0;
    for(var i = 1; i < $('body>div').length; i++){
        loc[i] = $('body>div').eq(i).offset().top;
    }
    $(window).on('mousewheel',function(eve){
        now= eve.originalEvent.wheelDelta;
        if(flag){
            if(now<0){
                cnt++;
                flag=false;
                if(cnt>=6) cnt=6;
            }else{
                cnt--;
                flag=false;
                if(cnt<=1) cnt=1;
            }
            $('html').animate({
                scrollTop : loc[cnt]
            },500,function(){
                flag = true;
            });
        }
    });
    var cntW = $('body>div').eq(2).offset().top;
    var cnt2W = $('body>div').eq(3).offset().top;

    $(window).scroll(function(){
        var scrT = $(this).scrollTop();
        console.log(scrT)
        if(scrT > 50){
            $('.hdrWrap').css({
                marginTop : '-80px'
            });
        }else{
            $('.hdrWrap').css({
                marginTop : '0'
            });
        }

        // 컨텐츠2
        if( cntW <= scrT && scrT < cnt2W){
            $('.cnt01 article').addClass('show');
        }else{
            $('.cnt01 article').removeClass('show');

        }
    });

});