const left = document.getElementsByClassName('sec-left-container')[0];
const right = document.getElementsByClassName('sec-right')[0];

window.onload = function() {
    setTimeout( () => {
        left.style.transform = 'scaleX(1)';
        right.style.transform = 'scaleY(1)';
    }, 1000);
}