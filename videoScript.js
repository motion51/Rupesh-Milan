$(document).ready(function () {
    $("#menu").click(function () {
        $(".menu_page").slideDown();
        $(this).hide();
    });
    $(".close_menu").click(function () {
        $(".menu_page").slideUp();
        $("#menu").show();
    })
})

let i = document.querySelectorAll("i");


i.forEach(function (button) {
    button.addEventListener('click', function () {
        // Find the parent video element
        var videoo = this.parentNode.querySelector('.videoo');


        //Video paused code
        let videos = document.querySelectorAll(".videoo");
        videos.forEach(video => {
            // Pause the video
            video.pause();
        });
        //Video paused code ends

        videoo.controls = true;
        videoo.play();
        button.style.opacity = 0


        videoo.addEventListener('dblclick', () => {
            if (!videoo.paused) {
                videoo.pause();
            }
        })



        videoo.addEventListener('pause', function () {
            // Hide video controls
            videoo.controls = false;
            // Show poster
            videoo.setAttribute('poster', 'images/illustrations.webp');
            button.style.opacity = 1
        });

        // Add event listener for play event
        videoo.addEventListener('play', function () {
            // Show video controls
            videoo.controls = true;
            // Hide poster
            videoo.removeAttribute('poster');
        });


    });
});

