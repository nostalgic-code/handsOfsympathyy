//dRS6co6s0xtBT9TN
//mongodb+srv://<db_username>:<db_password>@cluster0.tz7a9.mongodb.net/

//rgba(127, 23, 52, 0.1)


$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[769,1],
        pagination:true,
        transitionStyle:"goDown",
        autoplay:true
    });
});