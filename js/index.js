(function(window, $) {
    $(function() {
        var $nav = $(".nav");
        $nav.on("mouseover", " li", function() {
            var $this = $(this),
                id = $this.attr("id"),
                $secondary = $this.children(".secondary");
            // $secondary.show("slow","linear");
            $secondary.animate({
                height: 'toggle',
                opacity: 'toggle'
            }, "slow");
        });
        $nav.on("mouseout", " li", function() {
            var $this = $(this),
                id = $this.attr("id"),
                $secondary = $this.children(".secondary");
            $secondary.hide();
        });
    });
})(window, jQuery);
