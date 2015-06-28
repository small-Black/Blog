(function(window, $) {
    $(function() {
        var $nav = $(".nav");
        $nav.on("mouseover", " li", function() {
            var $this = $(this),
                id = $this.attr("id"),
                $secondary = $this.children(".secondary");
            $secondary.slideDown('500');
            $this.children('.nav-title').addClass('on');
           

        });
        $nav.on("mouseleave", " li", function() {
            var $this = $(this),
                id = $this.attr("id"),
                $secondary = $(".secondary");
            $secondary.hide();
            $this.children('.nav-title').removeClass('on');
        });

    });
})(window, jQuery);
