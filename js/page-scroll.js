$('.scrollable').onepage_scroll({
    sectionContainer: 'section',
    easing: 'ease-in',
    animationTime: 1000,
    pagination: false,
    updateURL: true,
    beforeMove: function(index) {
        if (window.location.hash === '#2' && index === 3) {
            $('#introduction').addClass(
                'introduction__stick-with-scroll--down'
            );
            $('#introduction').removeClass(
                'introduction__stick-with-scroll--up'
            );
            return;
        } else if (window.location.hash === '#3' && index === 2) {
            $('#introduction').removeClass(
                'introduction__stick-with-scroll--down'
            );
            $('#introduction').addClass('introduction__stick-with-scroll--up');
            return;
        }
    },
    afterMove: function(index) {},
    loop: false,
    keyboard: true,
    responsiveFallback: false,
    direction: 'vertical'
});
