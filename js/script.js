$(document).ready(function() {
    // Form handle
    $("form").submit(function(e) {
        e.preventDefault();

        alert("Thank you for subscription!!")
    })

    // Scroll Visible
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 150) {
            $(".scrollToTop").addClass("active");
        } else {
            $(".scrollToTop").removeClass("active");
        }
    });

    // Scroll To Top
    $(".scrollToTop").click(function() {
        $(window).scrollTop(0);
    });
})

// Slide Animation
window.addEventListener("scroll", function() {
    var slideUp = document.querySelectorAll(".slideUp, .slideLeft, .slideRight, .rotateScale");
    for(var i = 0; i < slideUp.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = slideUp[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if(elementTop < windowHeight - elementVisible) {
            slideUp[i].classList.add("active");
        } else {
            slideUp[i].classList.remove("active");
        }
    }
});
