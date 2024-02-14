const loader = document.querySelector(".loader");
const main = document.getElementById("main");
const video = document.getElementById("video1");
const soundIcon = document.querySelector(".fa-solid");
const page3 = document.getElementById("page3");
const page3Circle = document.querySelector(".illutrations_circle");

//Loading Script
window.addEventListener("load",()=>{
    loader.style.visibility = "hidden";
    main.style.visibility = "visible";
})

$(document).ready(function(){
    $("#menu").click(function(){
        $(".menu_page").slideDown();
        $(this).hide();
    });
    $(".close_menu").click(function(){
        $(".menu_page").slideUp();
        $("#menu").show();
    })
})

// Splite Type
const text = SplitType.create('.greeting_text');
text.chars;
const softwareText = SplitType.create("#software_text");
softwareText.chars;

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
    // console.log(dets.clientX)
    gsap.to(".illutrations_circle",{
        x: dets.clientX - 40,
        y: dets.clientY -40 
    })
})

const page5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page5",
        start: "top 80%",
        end: "top 15%",
        markers: true,
        scrub: 2
    }
})
.from("#software_text .char",{
    y: 30,
    opacity: 0,
    stagger: {
        amount:1
    }

})
.from(".page5_main_content1",{
    x: 50,
    opacity: 0
})
.from(".page5_main_content1 h2",{
    y: -35,
    opacity: 0
})
.from(".video_editing_logo",{
    y: 35,
    opacity: 0,
    stagger: {
        amount: 0.5
    }
})
.from(".page5_main_content2",{
    x: -50,
    opacity: 0
})
.from(".page5_main_content2 h2",{
    y: -35,
    opacity: 0
})
.from(".graphic_designing_logo",{
    y: 35,
    opacity: 0,
    stagger: {
        amount: 0.5
    }
})
// gsap.from("#software_text .char",{
//     y: 30,
//     opacity: 0,
//     stagger: {
//         amount:1
//     },
//     scrollTrigger: {
//         trigger: "#page5",
//         start: "top 80%",
//         end: "top 70%",
//         markers: true,
//         scrub: 2
//     }
   
// })

