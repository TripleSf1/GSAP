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
timeLine.to(".container", {
    x: 1400,
    y: 400,
    duration: 1.5,
    delay: 1,
});