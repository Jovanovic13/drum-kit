function buttonAnimation(key) {
    let activeButton = document.querySelector('.'+ key);
    activeButton.classList.add('active')

    setTimeout(() => {
        activeButton.classList.remove('active')
    }, 150);
}

document.addEventListener('keypress', () => {
    switch(event.key) {
        case 'a':
            new Audio('sounds/boom.wav').play();
            buttonAnimation('a')
            break;
        
        case 's':
            new Audio('sounds/clap.wav').play();
            buttonAnimation('s')
            break;
        
        case 'd':
            new Audio('sounds/hihat.wav').play();
            buttonAnimation('d')
            break;

        case 'f':
            new Audio('sounds/kick.wav').play();
            buttonAnimation('f')
            break;

        case 'g':
            new Audio('sounds/openhat.wav').play();
            buttonAnimation('g')
            break;

        case 'h':
            new Audio('sounds/ride.wav').play();
            buttonAnimation('h')
            break;

        case 'j':
            new Audio('sounds/snare.wav').play();
            buttonAnimation('j')
            break;

        case 'k':
            new Audio('sounds/tink.wav').play();
            buttonAnimation('k')
            break;

        case 'l':
            new Audio('sounds/tom.wav').play();
            buttonAnimation('l')
            break;
        }
})