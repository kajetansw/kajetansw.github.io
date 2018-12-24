/* const timelineAuto = new TimelineMax();

const controller = new ScrollMagic.Controller();

// timelineAuto.from('#introduction', 1, { scale: 0.5, opacity: 0 });
timelineAuto.from('#skills', 1, { left: 100, opacity: 0 }, '=+1');

const sceneAuto = new ScrollMagic.Scene({})
    .setTween(timelineAuto)
    .addTo(controller);
 */

function showExperienceTimeline() {
    const btnExperience = $('#experience .btn-timeline');
    const timeline = $('#experience > .timeline');
    const timelineLeftContents = $('#experience div:nth-child(odd) > .content');
    const timelineRightContents = $(
        '#experience div:nth-child(even) > .content'
    );

    timeline.removeClass('timeline__slide-out');
    for (let i = 0; i < timelineLeftContents.length; i++) {
        $(timelineLeftContents[i]).removeClass('timeline-content__from-right');
    }
    for (let i = 0; i < timelineRightContents.length; i++) {
        $(timelineRightContents[i]).removeClass('timeline-content__from-left');
    }

    setTimeout(() => {
        btnExperience.addClass('btn-timeline-onclick');
        timeline.addClass('timeline__slide-out');
        for (let i = 0; i < timelineLeftContents.length; i++) {
            $(timelineLeftContents[i]).addClass('timeline-content__from-right');
        }
        for (let i = 0; i < timelineRightContents.length; i++) {
            $(timelineRightContents[i]).addClass('timeline-content__from-left');
        }
    }, 0);
}

function showEducationTimeline() {
    const btnEducation = $('#education .btn-timeline');
    const timeline = $('#education > .timeline');
    const timelineLeftContents = $('#education div:nth-child(odd) > .content');
    const timelineRightContents = $(
        '#education div:nth-child(even) > .content'
    );

    timeline.removeClass('timeline__slide-out');
    for (let i = 0; i < timelineLeftContents.length; i++) {
        $(timelineLeftContents[i]).removeClass('timeline-content__from-right');
    }
    for (let i = 0; i < timelineRightContents.length; i++) {
        $(timelineRightContents[i]).removeClass('timeline-content__from-left');
    }

    setTimeout(() => {
        btnEducation.addClass('btn-timeline-onclick');
        timeline.addClass('timeline__slide-out');
        for (let i = 0; i < timelineLeftContents.length; i++) {
            $(timelineLeftContents[i]).addClass('timeline-content__from-right');
        }
        for (let i = 0; i < timelineRightContents.length; i++) {
            $(timelineRightContents[i]).addClass('timeline-content__from-left');
        }
    }, 0);
}
