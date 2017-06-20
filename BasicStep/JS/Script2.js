$(function(){
    var duration=1000;

    $('#box1').on('mouseover',function(){
        $(this).stop(true).animate({
            backgroundColor: '#65ce47',
            borderRadius:'10px',
            width: '400px',
            height: '500px'
        },duration);
    })
    .on('mouseout',function(){
        $(this).stop(true).animate({
            backgroundColor:'#59cf8c',
            borderRadius:'0px',
            width:'200px',
            height:'100px'
        },duration);
    });
});