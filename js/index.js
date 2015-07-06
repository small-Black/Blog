(function(window, $) {
    $(function() {
        var $nav = $(".nav"),
            $allsecondary = $(".secondary"),
            $logo = $(".logo");
        $nav.on("mouseover", " li", function() {
            var $this = $(this),
                id = $this.attr("id"),
                $secondary = $this.children(".secondary");
            $secondary.slideDown('500');
            $secondary.children('a').addClass('action');
            $this.children('.nav-title').addClass('on');


        });
        $nav.on("mouseleave", " li", function() {
            var $this = $(this),
                id = $this.attr("id");
            $allsecondary.hide().stop(false, true);
            $this.children('.nav-title').removeClass('on');
            $this.children('.secondary').find('a').removeClass('action');
        });
        $.PicSlide({
            selector: ".pic", //选择器
            speed: 3000, //速度
            dot: true, //焦点
            autoplay: true, //是否自动播放
            button: true //是否显示左右箭头
        });
    });
})(window, jQuery);
