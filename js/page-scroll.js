function isPageScrollFrom1To2(index) {
    return (
        (window.location.hash === '#1' || window.location.hash === '') &&
        index === 2
    );
}

function isPageScrollFrom2To3(index) {
    return window.location.hash === '#2' && index === 3;
}

function isPageScrollFromFrom3To2(index) {
    return window.location.hash === '#3' && index === 2;
}

$('.scrollable').onepage_scroll({
    sectionContainer: 'section',
    easing: 'ease-in',
    animationTime: 1000,
    pagination: false,
    updateURL: true,
    beforeMove: function(index) {
        if (isPageScrollFrom2To3(index)) {
            $('#introduction').addClass(
                'introduction__stick-with-scroll--down'
            );
            $('#introduction').removeClass(
                'introduction__stick-with-scroll--up'
            );
            return;
        } else if (isPageScrollFromFrom3To2(index)) {
            $('#introduction').removeClass(
                'introduction__stick-with-scroll--down'
            );
            $('#introduction').addClass('introduction__stick-with-scroll--up');
            return;
        } else if (isPageScrollFrom1To2(index)) {
            $('#introduction .card').addClass('introduction__slide-from-left');
            $('#skills').addClass('skills__slide-from-right');
            return;
        }
    },
    afterMove: function(index) {},
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: 'vertical'
});
