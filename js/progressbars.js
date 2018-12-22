// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

/*
##########################################
   SETTINGS
##########################################
*/
const fontFamily = '"Quicksand", sans-serif';
const fontSize = '1.8rem';
const stepHandler = (state, circle) => {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    if (value === 0) {
        circle.setText('');
    } else {
        circle.setText(`${value}%`);
    }
};

/*
##########################################
   PROGRESSBAR FOR ANGULAR SKILL
##########################################
*/
const progressbarAngular = document.querySelector('.progressbar-angular');
const barAngular = new ProgressBar.Circle(progressbarAngular, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#b52e31', width: 5 },
    // Set default step function for all animate calls
    step: stepHandler
});
barAngular.text.style.fontFamily = fontFamily;
barAngular.text.style.fontSize = fontSize;
barAngular.animate(0.9); // Number from 0.0 to 1.0

/*
##########################################
   PROGRESSBAR FOR TS/JS SKILL
##########################################
*/
const progressbarTsJs = document.querySelector('.progressbar-tsjs');
const barTsJs = new ProgressBar.Circle(progressbarTsJs, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#007acc', width: 5 },
    step: stepHandler
});
barTsJs.text.style.fontFamily = fontFamily;
barTsJs.text.style.fontSize = fontSize;
barTsJs.animate(0.85);

/*
##########################################
   PROGRESSBAR FOR SPRING/HIBERNATE SKILL
##########################################
*/
const progressbarSpring = document.querySelector('.progressbar-spring');
const barSpring = new ProgressBar.Circle(progressbarSpring, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#77BC1F', width: 5 },
    step: stepHandler
});
barSpring.text.style.fontFamily = fontFamily;
barSpring.text.style.fontSize = fontSize;
barSpring.animate(0.8);

/*
##########################################
   PROGRESSBAR FOR DATABASES SKILL
##########################################
*/
const progressbarDb = document.querySelector('.progressbar-db');
const barDb = new ProgressBar.Circle(progressbarDb, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#E58F00', width: 5 },
    step: stepHandler
});
barDb.text.style.fontFamily = fontFamily;
barDb.text.style.fontSize = fontSize;
barDb.animate(0.7);

/*
##########################################
   PROGRESSBAR FOR CLEAN CODE SKILL
##########################################
*/
const progressbarCleanCode = document.querySelector('.progressbar-cleancode');
const barCleanCode = new ProgressBar.Circle(progressbarCleanCode, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#862d8e', width: 5 },
    step: stepHandler
});
barCleanCode.text.style.fontFamily = fontFamily;
barCleanCode.text.style.fontSize = fontSize;
barCleanCode.animate(0.9);

/*
##########################################
   PROGRESSBAR FOR PASSION SKILL
##########################################
*/
const progressbarPassion = document.querySelector('.progressbar-passion');
const barPassion = new ProgressBar.Circle(progressbarPassion, {
    color: '#aaa',
    strokeWidth: 4,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 1 },
    to: { color: '#fff', width: 5 },
    step: stepHandler
});
barPassion.text.style.fontFamily = fontFamily;
barPassion.text.style.fontSize = fontSize;
barPassion.animate(1);
