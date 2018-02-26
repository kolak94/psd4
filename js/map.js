
$('#openMap').gmap3({
    map: {
        options: {
            center: [52.272095, 20.974805],
            zoom: 18,
            panControl: false,
            zoomControl: false
        }
    },
    marker: {
        values:[{
            latLng: [52.272095, 20.974805],
            data: 'Sowackiego 52/54' 
        }],
				options: {
					icon: new google.maps.MarkerImage('img/mapMarker.png', new google.maps.Size(48, 64, "px", "px"))
				},
        events:{
            click: function(marker, event, context) {
                var map = $(this).gmap3('get'),
                    infowindow = $(this).gmap3({get:{name:'infowindow'}});
                if (infowindow) {
                    infowindow.open(map, marker);
                    $('#myModal').modal('show');
                } else {
                    $(this).gmap3({
                        infowindow: {
                            anchor: marker,
                            options: {content: context.data}
                        }
                    });
                }
            }
        }
    }
	
});

