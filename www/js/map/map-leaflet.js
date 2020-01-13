



function mapLoad(lon, lat) {
    /*
        console.log('something for map..');
    
        // document.getElementById('add_map_id').innerHTML = 'some text..';
    
    
        // var lat, lon
        var startlat = lat;
        var startlon = lon;
    
        var options = {
            center: [startlat, startlon],
            zoom: 9
        }
    
        // document.getElementById('lat').value = startlat;
        // document.getElementById('lon').value = startlon;
    
        var mymap = L.map('map', options);
        var nzoom = 12;
    
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { attribution: 'OSM' }).addTo(map);
    
        var myMarker = L.marker([startlat, startlon], { title: "Coordinates", alt: "Coordinates", draggable: true }).addTo(map).on('dragend', function () {
            var lat = myMarker.getLatLng().lat.toFixed(8);
            var lon = myMarker.getLatLng().lng.toFixed(8);
            var czoom = map.getZoom();
            if (czoom < 18) { nzoom = czoom + 2; }
            if (nzoom > 18) { nzoom = 18; }
            if (czoom != 18) { map.setView([lat, lon], nzoom); } else { map.setView([lat, lon]); }
            document.getElementById('lat').value = lat;
            document.getElementById('lon').value = lon;
            myMarker.bindPopup("Lat " + lat + "<br />Lon " + lon).openPopup();
        });
    
        function chooseAddr(lat1, lng1) {
            myMarker.closePopup();
            map.setView([lat1, lng1], 18);
            myMarker.setLatLng([lat1, lng1]);
            lat = lat1.toFixed(8);
            lon = lng1.toFixed(8);
            document.getElementById('lat').value = lat;
            document.getElementById('lon').value = lon;
            myMarker.bindPopup("Lat " + lat + "<br />Lon " + lon).openPopup();
        }
    
        // function myFunction(arr) {
        //     var out = "<br />";
        //     var i;
    
        //     if (arr.length > 0) {
        //         for (i = 0; i < arr.length; i++) {
        //             out += "<div class='address' title='Show Location and Coordinates' onclick='chooseAddr(" + arr[i].lat + ", " + arr[i].lon + ");return false;'>" + arr[i].display_name + "</div>";
        //         }
        //         document.getElementById('results').innerHTML = out;
        //     }
        //     else {
        //         document.getElementById('results').innerHTML = "Sorry, no results...";
        //     }
    
        // }
        var marker = L.marker([lat, lon]).addTo(mymap);
    
    
        // function addr_search() {
        //     var inp = document.getElementById("addr");
        //     var xmlhttp = new XMLHttpRequest();
        //     var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + inp.value;
        //     xmlhttp.onreadystatechange = function () {
        //         if (this.readyState == 4 && this.status == 200) {
        //             var myArr = JSON.parse(this.responseText);
        //             myFunction(myArr);
        //         }
        //     };
        //     xmlhttp.open("GET", url, true);
        //     xmlhttp.send();
        // }
    
        // (function ($) {
        //     "use strict";
        //     $(document).ready(function () {
        //         console.log("ready!");
        //         $.ajax({
        //             type: 'POST',
        //             url: 'http://127.0.0.1:5000/foodMap',
        //             headers: { "Authorization": 'Bearer ' + '' + localStorage.getItem('token') },
        //             crossDomain: true,
        //             dataType: 'json',
        //             contentType: 'application/json; charset=utf-8',
        //             success: function (response) {
        //                 lat = response[0];
        //                 lon = response[1];
        //             },
        //             error: function (xhr, status) {
        //                 if (xhr.status == 401) {
        //                     window.location.replace("index.html");
        //                 }
        //             }
        //         });
        //     });
    
        // })(jQuery);*/


    // Create the map and set the view and some properties
    var myMap = L.map('add_map_id').setView([lat, lon], 12);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        // maxZoom: 5,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets'
    }).addTo(myMap);

    var dataset = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "stemburo": "",
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        lat,
                        lon
                    ]
                }
            }
        ]
    };

    // map over the dataset features, create a marker for each and link a popup.
    dataset.features.map(function (feature) {
        const location = feature.geometry.coordinates;
        let partijen = Object
            .keys(feature.properties)
            .filter(item => !['stemburo', 'lat', 'lng'].includes(item));

        const popupContent =
            '<h2>' +
            feature.properties.stemburo +
            '</h2>' +
            partijen.map((naam) => '<p><strong>' + naam + '</strong>: ' + feature.properties[naam] + '</p>').join('');

        // add the marker and popup to the map.
        L.marker(location).addTo(myMap).bindPopup(popupContent);
    });

}




