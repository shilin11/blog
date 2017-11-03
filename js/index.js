$(function () {
    var ban=$(".ban>main");
    var left=$(".left");
    var right=$(".right");
    var banimg=$(".ban>main>div>img");
    var banr=$(".banr>div");
    let t;
    let num=0;
    let flag=true;
    t=setInterval(fn,3000);

    function fn(){
        let y1=banr.eq(0).position().top;
        let y2=banr.eq(1).position().top;
        let y3=banr.eq(2).position().top;
        if(num==banimg.length){
            num=0;
        }
        banimg.css({'opacity':'0.1','zIndex':'0'});
        banimg.eq(num).css({'opacity':'1','zIndex':'1'});
        banr.css('opacity',1);
        if(y1==-685){
            y1=685;
            banr.eq(0).css('opacity',0);
        }
        if(y2==-685){
            y2=685;
            banr.eq(1).css('opacity',0);
        }
        if(y3==-685){
            y3=685;
            banr.eq(2).css('opacity',0);
        }
        banr.eq(0).animate({top:y1-137}, 800);
        banr.eq(1).animate({top:y2-137}, 800);
        banr.eq(2).animate({top:y3-137}, 800,function () {
            flag=true;
        });
        num++;
    }
    function fn1(){
        let y1=banr.eq(0).position().top;
        let y2=banr.eq(1).position().top;
        let y3=banr.eq(2).position().top;
        num--;
        if(num==-1){
            num=banimg.length-1;
        }
        banimg.css({'opacity':'0.1','zIndex':'0'});
        banimg.eq(num).css({'opacity':'1','zIndex':'1'});
        banr.css('opacity',1);
        if(y1==685){
            y1=-685;
            banr.eq(0).css('opacity',0);
        }
        if(y2==685){
            y2=-685;
            banr.eq(1).css('opacity',0);
        }
        if(y3==685){
            y3=-685;
            banr.eq(2).css('opacity',0);
        }
        banr.eq(0).animate({top:y1+137}, 800);
        banr.eq(1).animate({top:y2+137}, 800);
        banr.eq(2).animate({top:y3+137}, 800,function () {
            flag=true;
        });
    }

    ban.mouseenter(function () {
        left.css("display","block");
        right.css("display","block");
        clearInterval(t);
    }).mouseleave(function () {
        left.css("display","none");
        right.css("display","none");
        t=setInterval(fn,3000);
    })

    left.click(function(){
        fn1();
    })
    right.click(function(){
        fn();
    })
})