$('section article').each(function (a) {
    $(this).css({
        transform: 'translateZ(' + a * (-5000) + 'px)'
    })
})


$('.scrollNavi li').on('click', function () {
    var index = $(this).index()
    $('html').stop().animate({
        scrollTop: 5000*index
    },1500, 'swing')
})


$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    for (var i=0; i<$('section article').length; i++){
        $('section article').eq(i).css({
            transform:'translateZ('+ parseInt(-5000*i+sct) +'px)'
        })
        if (sct>=i*5000 && sct<(i+1)*5000){
            $('.scrollNavi li').eq(i).addClass('on').siblings().removeClass('on')
            $('section article').eq(i).addClass('on').siblings().removeClass('on')
        }
    }
})

