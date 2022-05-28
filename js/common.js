$(function(){
    // 헤더
    $('.hdr').load('./inc/header.html',function(){
        var hdr = $('.hdrWrap');
        $(window).scroll(function(){
            var now = $(this).scrollTop();
            if(now >= 1){
                hdr.addClass('fix');
            }else{
                hdr.removeClass('fix');
            }
        })
        // 햄버거 메뉴
        var tabLi = $('.tab li:nth(1)');
        var tab = $('.hdrWrap ul.tab');
        $('.menu').next().click(function(){
            tab.animate({
                right : 0
            },400);
        });
        $('div.hdrWrap .btn:nth(0)').click(function(){
            tab.animate({
                right : '-100%'
            },400);   
        });
        tabLi.click(function(){
            tabLi.toggleClass('on');
            tabLi.find('span').text('+');
            $('li.on').find('span').text('-');
        });
  
    });
    // 푸ㅌ
    $('.ftr').load('./inc/footer.html');

});