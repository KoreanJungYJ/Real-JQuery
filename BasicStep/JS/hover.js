$(function () {
    
    var duration = 750;
    var $images = $('#ImageCover');
    var $black = $('#blackCoverBox');
    
    $images
        .on('mouseover', function () {
            $($black).stop(true).animate({
            opacity: 1
            }, duration);
        })
        .on('mouseout', function () {
            $($black).stop(true).animate({
            opacity: 0
            }, duration);
        });
    });
//this 대신 그냥 변수 하나 더 만들어서 집어넣어줌.
//여러가지 할 때에는 :nth-child잘 활용하자!