(function(window, $) {
    $(function() {
        // 轮播图
        $.PicSlide({
            selector: ".pic", //选择器
            speed: 3000, //速度
            dot: false, //焦点
            autoplay: true, //是否自动播放
            button: true //是否显示左右箭头
        });
    });
})(window, jQuery);
