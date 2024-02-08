const video = document.getElementById("video1");
const text = SplitType.create('.greeting_text');
const soundIcon = document.querySelector(".fa-solid");
const page3 = document.getElementById("page3");
const page3Circle = document.querySelector(".illutrations_circle");
console.log(soundIcon)

text.chars;

gsap.to("#craft_story",{
    xPercent: -100,
    transformOrigin: "right center",
    color: "#DCF2F1",
    scrollTrigger: {
        trigger: "#page2",
        start: "top 0%",
        end: "top -50%",
        scrub: 3,
        markers: true,
        pin: "#page2",
        pinSpacing: false
    }
})


soundIcon.addEventListener("click",sound)


function sound(){
    if(video.muted){
        video.muted = false;
        soundIcon.classList.remove("fa-volume-high");
        soundIcon.classList.add("fa-volume-xmark");
    } else{
        video.muted = true;
        soundIcon.classList.remove("fa-volume-xmark");
        soundIcon.classList.add("fa-volume-high");
    }

}

page3.addEventListener("mousemove", (dets)=>{
    // console.log(dets)
    console.log(dets.clientX)
    gsap.to(".illutrations_circle",{
        x: dets.clientX - 40,
        y: dets.clientY -40 
    })
})

