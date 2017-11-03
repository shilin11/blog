$(function () {
    $(".headr>div").mouseenter(function () {
        $(this).css("background","#f5f5f5");
        $(".headr ul").css("display","block");
    }).mouseleave(function () {
        $(this).css("background","#fff");
        $(".headr ul").css("display","none");
    })
    $(".headr li").mouseenter(function () {
        $(this).css("background","#f5f5f5");
    }).mouseleave(function () {
        $(this).css("background","#fff");
    })
})