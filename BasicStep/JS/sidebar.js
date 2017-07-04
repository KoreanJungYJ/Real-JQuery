//image가 없기 때문에 attr()은 쓰지 않았다.
$(function () {
    var duration = 350;
    var $sidebar = $('#sidebar');
    
    var $btn = $sidebar.find('#btn').on('click', function () {
        $sidebar.toggleClass('open');
        if ($sidebar.hasClass('open')) {
            $sidebar.stop(true).animate({
                left: '-70px'
            }, duration);
            //$btn.find('img')
            //  .attr('src','img/btn_close.png');
        }
        else {
            $sidebar.stop(true).animate({
                left: '-350px'
            }, duration);
            //$btn.find('img')
            //  .attr('src','img/btn_open.png');
        };
    });
});