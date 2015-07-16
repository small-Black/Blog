(function(window, $) {
    $(function() {
        // 轮播图
        $.PicSlide({
            selector: ".pic", //选择器
            speed: 3000, //速度
            dot: false, //焦点
            autoplay: false, //是否自动播放
            button: false //是否显示左右箭头
        });
    });
})(window, jQuery);
