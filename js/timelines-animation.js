function animateExperienceTimeline() {
    const btnExperience = $('#experience .btn-timeline');
    const timeline = $('#experience > .timeline');
    const timelineLeftContents = $('#experience div:nth-child(odd) > .content');
    const timelineRightContents = $(
        '#experience div:nth-child(even) > .content'
    );

    timeline.removeClass('timeline--slide-out');
    for (let i = 0; i < timelineLeftContents.length; i++) {
        $(timelineLeftContents[i]).removeClass('timeline-content--from-right');
    }
    for (let i = 0; i < timelineRightContents.length; i++) {
        $(timelineRightContents[i]).removeClass('timeline-content--from-left');
    }

    setTimeout(() => {
        btnExperience.addClass('btn-timeline-onclick');
        timeline.addClass('timeline--slide-out');
        for (let i = 0; i < timelineLeftContents.length; i++) {
            $(timelineLeftContents[i]).addClass('timeline-content--from-right');
        }
        for (let i = 0; i < timelineRightContents.length; i++) {
            $(timelineRightContents[i]).addClass('timeline-content--from-left');
        }
    }, 0);
}

function animateEducationTimeline() {
    const btnEducation = $('#education .btn-timeline');
    const timeline = $('#education > .timeline');
    const timelineLeftContents = $('#education div:nth-child(odd) > .content');
    const timelineRightContents = $(
        '#education div:nth-child(even) > .content'
    );

    timeline.removeClass('timeline--slide-out');
    for (let i = 0; i < timelineLeftContents.length; i++) {
        $(timelineLeftContents[i]).removeClass('timeline-content--from-right');
    }
    for (let i = 0; i < timelineRightContents.length; i++) {
        $(timelineRightContents[i]).removeClass('timeline-content--from-left');
    }

    setTimeout(() => {
        btnEducation.addClass('btn-timeline-onclick');
        timeline.addClass('timeline--slide-out');
        for (let i = 0; i < timelineLeftContents.length; i++) {
            $(timelineLeftContents[i]).addClass('timeline-content--from-right');
        }
        for (let i = 0; i < timelineRightContents.length; i++) {
            $(timelineRightContents[i]).addClass('timeline-content--from-left');
        }
    }, 0);
}
