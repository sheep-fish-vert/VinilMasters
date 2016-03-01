try{
    function mainSliderBig(){
        $('.slider-main').slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true
        });
    }

    function mainSliderLittle(){
        $('.little-slider-main').slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        });
    }

    function filterSelect(){
      $('.form-filter select').styler();
    }

    $(document).ready(function(){
        mainSliderBig();
        mainSliderLittle();
        filterSelect();
    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_4.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}