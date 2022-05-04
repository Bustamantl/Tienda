const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:76
});

typewriter
.typewriter('La capital de sol')
.pauseFor(200)
.start();