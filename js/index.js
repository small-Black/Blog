(function(window, $) {
    $(function() {
        var $nav = $(".nav"),
            $allsecondary = $(".secondary");
        $nav.on("mouseover", " li", function() {
            var $this = $(this),
                id = $this.attr("id"),
                $secondary = $this.children(".secondary");
            $secondary.slideDown('500');
            $this.children('.nav-title').addClass('on');
           

        });
        $nav.on("mouseleave", " li", function() {
            var $this = $(this),
                id = $this.attr("id");
            $allsecondary.hide().stop(false,true);
            $this.children('.nav-title').removeClass('on');
        });

    });
})(window, jQuery);
