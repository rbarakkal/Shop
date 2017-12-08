$(document).ready(function(){
    // mobile search
    $('.xs-search').click(function(){
      $('.header_search').slideToggle();
    });
    //Tabs
    $('#myTab a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    //Owl Slider
     $("#product_image").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]

        });
});
