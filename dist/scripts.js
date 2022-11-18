$(function(){

    setPosition()
    setScrollMarginTop()

    $(window).on("resize", function(){
        let fixedSticky = $(".pfs")
        fixedSticky.removeClass("pfb")
        fixedSticky.removeClass("psb")
        setPosition()     
        setScrollMarginTop()
    })

    // Scroll-margin-top
    function setScrollMarginTop() {
        let navHeight = $("#nav").innerHeight()
        console.log(`NavHeight: ${navHeight}`);
        let section = $(".section")
        section.css("scroll-margin-top", `${navHeight}px`)
    }

    // Fixed-sticky position
    function setPosition() {
        fixedSticky = $(".pfs")
        let fixedStickyHeight = fixedSticky.height()
        let fixedStickyOffset = fixedSticky.offset().top
        let windowHeight = $(window).height()

        console.log(`Fixed-sticky: ${fixedStickyHeight + fixedStickyOffset}`);
        console.log(`Window: ${windowHeight}`);
        
        if ((fixedStickyHeight + fixedStickyOffset) > windowHeight) {
            fixedSticky.addClass("psb")
        } else {
            fixedSticky.addClass("pfb")
        }
    }
}
)