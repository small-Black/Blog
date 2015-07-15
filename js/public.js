(function(window, $) {
    var $head = $(".head"),
        $back_top = $(".back-top"),
        $nav = $(".nav");
    // $head.load("head.html");
    
    // 百度分享
    function share() {
        window._bd_share_config = {
            "common": {
                "bdSnsKey": {},
                "bdText": "",
                "bdMini": "2",
                "bdMiniList": false,
                "bdPic": "",
                "bdStyle": "0",
                "bdSize": "32"
            },
            "share": {}
        };
        with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
    }
    share();
    $(function() {
        // 导航条
        $head.on("mouseover", " .nav li", function() {
            var $this = $(this),
                id = $this.attr("id"),
                $secondary = $this.children(".secondary");
            $secondary.slideDown('500').stop(false, true);
            $secondary.children('a').addClass('action');
            $this.children('.nav-title').addClass('on');


        });
        $head.on("mouseleave", " .nav li", function() {
            var $this = $(this),
                id = $this.attr("id"),
                $secondary = $this.children(".secondary");
            $secondary.hide().stop(false, true);
            $this.children('.nav-title').removeClass('on');
            $secondary.find('a').removeClass('action');
        });
        // 返回顶部
        $(window).scroll(function(event) {
            if ($(window).scrollTop() > 100) {
                $back_top.fadeIn('500');
                $nav.addClass('fixedtop');
            } else {
                $back_top.fadeOut('500');
                $nav.removeClass('fixedtop');
            }
        });
        $back_top.on("click", function() {
            $("body").animate({
                scrollTop: 0
            }, 500);
        });
    });
})(window, jQuery);
