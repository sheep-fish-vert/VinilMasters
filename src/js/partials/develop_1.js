try{

    // contact map init

    function contactsMapInit(mapWrap){
            if($('#'+mapWrap).length){
                function initialize() {
                    var myLatlng = new google.maps.LatLng(cordX,cordY);
                    var myOptions = {
                        zoom: 16,
                        center: myLatlng,
                        disableDefaultUI: true,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                        zoomControlOptions: {
                           position: google.maps.ControlPosition.LEFT_BOTTOM
                        }
                    }
                    var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

                    var image = 'images/contact-map-point.png';   // иконка картинкой

                    var marker = new google.maps.Marker({
                        position: myLatlng,
                        map: map,
                        animation: google.maps.Animation.DROP, // анимация при загрузке карты
                        icon: image //  иконка картинкой
                    });

                }

                initialize();
            }

        };

    // /contact map init


    $(document).ready(function(){

        contactsMapInit('contact-map');

    });

    $(window).load(function(){

    });

    $(window).resize(function(){

    });

}
catch(e){

    console.log('develop_1.js \n Error! '+e.name+':'+e.message+'\n'+e.stack);

}