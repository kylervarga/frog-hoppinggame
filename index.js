
const lilypads = document.querySelectorAll(".lily-pad");
console.log(lilypads);

const frog = document.querySelector(".frog");
console.log(frog);

const end = document.querySelector(".end");

let currentPosition = -1;

const movement = {
    ArrowRight: 1,
    ArrowLeft: -1,
    ArrowDown: 2,
    ArrowUp: -2
}

window.addEventListener("keydown", (e) => {

    const move = movement[e.key];

    if(move === undefined) {
        return;
    }

// START position
    if (currentPosition === -1) {

    if (e.key === "ArrowDown") {
        currentPosition = 0;
        lilypads[currentPosition].appendChild(frog);
    }

    return;
}    

//move right
    if (e.key === "ArrowRight") {

    if (currentPosition === 0) {
        currentPosition = 1;
    }

    else if (currentPosition === 2) {
        currentPosition = 3;
    }
}
//move left
    if (e.key === "ArrowLeft") {

    if (currentPosition === 1) {
        currentPosition = 0;
    }

    else if (currentPosition === 3) {
        currentPosition = 2;
    }
}
//move down
    if (e.key === "ArrowDown") {

    // Top row → bottom row
    if (currentPosition === 0 || currentPosition === 1) {
        currentPosition = currentPosition + movement.ArrowDown;
    }

    // Bottom row → END
    else if (currentPosition === 2 || currentPosition === 3) {
        currentPosition = 4;
        end.appendChild(frog);
        return;
    }
}

//move up
    if (e.key === "ArrowUp") {
        if (currentPosition === 2 || currentPosition === 3) {currentPosition = currentPosition + move;}

    }

lilypads[currentPosition].appendChild(frog);

});