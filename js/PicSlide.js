
/**
 * 
 * @authors Xiao hei (649925003@qq.com)
 * @date    2015-07-03 15:46:33
 * @version 1.0
 */
 

(function($) {
    $.extend({
        PicSlide: function(options) {
            var defaults = {
                selector: null, //选择器
                speed: 3000, //速度
                dot: true, //焦点
                autoplay: true, //是否自动播放
                button: true //是否显示左右箭头
            };
            options = $.extend(defaults, options);
            var $picslide = $(options.selector),
                $img = $picslide.find("img");
            var index = 0,
                next,
                total = $img.length - 1,
                stop;
            $img.eq(0).css("display", "block");
            function action(state) {
                if (state === "add") {
                    index + 1 > total ? next = 0 : next = index + 1;
                } else if (state === "minus") {
                    index - 1 < 0 ? next = total : next = index - 1;
                } else {
                    state = parseInt(state);
                    next = state;
                }
                $img.eq(index).fadeOut();
                $img.eq(next).fadeIn();
                $(".picslide-dot span").eq(next).addClass('on').siblings('span').removeClass('on');
                index = next;
            }

            options.dot && ! function() {
                $picslide.append('<div class="picslide-dot"></div>');
                var $picslide_dot = $(".picslide-dot");

                for (var i = 0; i < total + 1; i++) {
                    $picslide_dot.append('<span data-index="' + i + '"></span>');
                }
                $(".picslide-dot span").eq(0).addClass('on');
                $picslide_dot.css("marginLeft", -($picslide_dot.width()) / 2 + "px");
                $picslide.on("click", " .picslide-dot span", function() {
                    action($(this).attr("data-index"));
                });
            }();
            options.autoplay && ! function() {
                function setAutoTime() {
                    stop = setInterval(function() {
                        action("add");
                    }, options.speed);
                }
                setAutoTime();
                $picslide.on("mouseover", function() {
                    clearInterval(stop);
                });
                $picslide.on("mouseleave", function() {
                    setAutoTime();
                });
            }();

            options.button && ! function() {
                 $picslide.append('<a href="javascript:;" class="picslide-next">&gt;</a><a href="javascript:;" class="picslide-last">&lt;</a>');
                $picslide.on("click", " .picslide-next", function() {
                    action("add");
                });
                $picslide.on("click", " .picslide-last", function() {
                    action("minus");
                });
            }();

        }
    });
})(jQuery);