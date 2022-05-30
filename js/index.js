$(function(){
    // 메인
    var btn = $('.LRbtn .image');
    var gr = $('.mainTop .group');
    var sl = $('.mainTop .slide');
    var pg = $('main .paging li');
    var i = 0;
    var pause = $('.mainBtm>.sdBtn span:nth(0)');
    var play = $('.mainBtm>.sdBtn span:nth(1)');
    var auto = setInterval(slideright,4000);

    // 메인 페이징 버튼
    pg.click(function(){
        var ind =  $(this).index()
        pg.removeClass('on');          
        $(this).addClass('on');          
        gr.css('margin-left', ind * -100 +'%')
        sl.find('.image').removeClass('in')
        sl.eq(ind).find('.image').addClass('in')
        i = ind ;
    });
    // 메인 자동 슬라이드 재생 정지 버튼
    pause.click(function(){
        pause.css({display : 'none'})
        play.css({display : 'block'})
        clearInterval(auto);
    });
    play.click(function(){
        pause.css({display : 'block'})
        play.css({display : 'none'})
        auto = setInterval(slideright,4000)
    });

    // 메인 버튼 클릭시
    btn.first().click(slideleft)
    btn.last().click(slideright)
    function slideright(){
        i++
        i = i%6
        gr.stop().css({
            marginLeft: i * -100 + '%'
        })
        sl.find('.image').removeClass('in')
        sl.eq(i).find('.image').addClass('in')
        pg.removeClass('on');          
        pg.eq(i).addClass('on'); 
    }                  
    function slideleft(){
        i--;
        i = (i+6)%6;
        gr.stop().css({
            marginLeft: i * -100 + '%'
        })
        sl.find('.image').removeClass('in')
        sl.eq(i).find('.image').addClass('in')
        pg.removeClass('on');          
        pg.eq(i).addClass('on'); 
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
        pg2.removeClass('on')
        pg2.eq(j).addClass('on')
        // 텍스트슬라이드
        $('.textView .texts').removeClass('on')
        $('.textView .texts').eq(j).addClass('on')
    } 
    // 컨텐츠2 자동 슬라이드 재생 정지 버튼
    pause2.click(function(){
        pause2.css({display : 'none'})
        play2.css({display : 'block'})
        clearInterval(auto2);
    });
    play2.click(function(){
        pause2.css({display : 'block'})
        play2.css({display : 'none'})
        auto2 = setInterval(slide,4000)
    });

    // 컨텐츠2 artRight
    var q = 0;
    var auto3 = setInterval(slideright2,3000)
    var txtGroup = $('.artRight .Group');
    var pg3 = $('.artRight .paging li');
    var pause3 = $('.artRight .sdBtn span:nth(0)');
    var play3 = $('.artRight .sdBtn span:nth(1)');

    function slideright2(){
        q++
        q = q%2;
        pg3.removeClass('on')
        pg3.eq(q).addClass('on')
        txtGroup.animate({
            marginLeft : q*-100+'%'
        });
        
    };
    // 컨텐츠2 artRight 자동 슬라이드 재생 정지 버튼
    pause3.click(function(){
        pause3.css({display : 'none'})
        play3.css({display : 'block'})
        clearInterval(auto3);
    });
    play3.click(function(){
        pause3.css({display : 'block'})
        play3.css({display : 'none'})
        auto3 = setInterval(slideright2,3000)
    });
    // 페이징 버튼 클릭시
    pg3.click(function(){
        var ind =  $(this).index()
        pg3.removeClass('on');          
        $(this).addClass('on');          
        txtGroup.css('margin-left', ind * -100 +'%')
    });

});