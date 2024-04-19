    $(document).ready(function () {
        $('.header').height($(window).height());
    })

    $(document).ready(function() {
        $("a.nav-link[href='#about-section'], a.nav-link[href='#contact-section']").on("click", function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top
            }, 800);
        });
    });

