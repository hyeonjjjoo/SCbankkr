$(function(){
    // 메인
    var btn = $('.LRbtn .image');
    var gr = $('.mainTop .group');
    var sl = $('.mainTop .slide');
    var pg = $('main .paging li');
    var i = 0;
    var pause = $('.mainBtm>.btn span:nth(0)');
    var play = $('.mainBtm>.btn span:nth(1)');
    var auto = setInterval(slideright,4500);

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
        auto = setInterval(slideright,3000)
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

    $('.btn').click(function(){
        $('article').addClass('show')
    });
});