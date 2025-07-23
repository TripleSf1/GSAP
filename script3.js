gsap.from("#box3", {
    x: 1000,
    duration: 3,
    delay: 2,
    rotate: 360,
    backgroundColor: "green",
    borderRadius: "50%",
    repeat: -1,
    scale: 0.5,
    opacity: 0,
    yoyo: true,

});

gsap.from("#box1", {
    y: 30,
    opacity: 0,
    duration: 4,
    delay: 1,
    repeat: -1,
    width: "0",
    yoyo: true,

});

gsap.from("h1", {
    y: 30,
    duration: 2,
    delay: 1,
    opacity: 0,
    stagger: 1,
    repeat: -1,
    yoyo: true,

});

let timeLine = gsap.timeline();
timeLine.to(".container1", {
    x: 400,
    duration: 1,
    delay: 0.5,
});

timeLine.to(".container2", {
    x: 500,
    duration: 1,
    backgroundColor: "red",
    delay: 0.5,
});
timeLine.to(".container3", {
    x: 600,
    rotateX: 360,
    duration: 1,
    delay: 0.5,
});
timeLine.to(".container4", {
    x: 500,
    rotateY: 180,
    duration: 1,
    delay: 0.5,
    backgroundColor: "red",
});

timeLine.to(".container5", {
    x: 400,
    duration: 1,
    delay: 0.5,
});
timeLine.to(".container2", {
    x: 300,
    duration: 1,
    delay: 0.5,
});
timeLine.to(".container3", {
    x: 200,
    duration: 1,
    delay: 0.5,
});
timeLine.to(".container4", {
    x: 300,
    duration: 1,
    delay: 0.5,
});
