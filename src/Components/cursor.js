// Select all elements with the class 'cursor'
var cursors = document.getElementsByClassName('cursor');


// Add event listener for mouse movement to move the cursor
window.addEventListener('mousemove', (dets) => {
    for (let i = 0; i < cursors.length; i++) {
        cursors[i].style.left = dets.clientX + 'px';
        cursors[i].style.top = dets.clientY + 'px';
    }
});


