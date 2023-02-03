// AOS library
AOS.init();

// 페이지전환효과
jQuery(function($) {
    $("body").css("display", "none");
    $("body").fadeIn(1000);
    $("a.transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
    window.location = linkLocation;
    }
});

// 타이핑 효과
$(document).ready(function() {
    var text = document.getElementById("typeStyle");

    var typewriter = new Typewriter(text, {
        loop: true
    });

    typewriter.typeString('Welcome my portfolio')
        .pauseFor(2000)
        .deleteAll()
        .start();

});