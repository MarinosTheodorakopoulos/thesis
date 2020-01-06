

var baseUrl = 'http://127.0.0.1:5000/';
var headersJWT = { "Authorization": 'Bearer ' + '' + localStorage.getItem('token') };




function checkAuth() {
    console.log("ready!");
    var status = null;
    $.ajax({
        type: 'POST',
        url: baseUrl + 'checkAuth',
        headers: headersJWT,
        crossDomain: true,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',

        success: function (xhr, status) {
            if (xhr.status == 200) {
                console.log("ok");
                return 'ok';
            }
        },
        error: function (xhr, status) {
            console.log(xhr.status);
            console.log('error...');
            if (xhr.status == 401) {
                window.location.replace("index.html");
            }
        }
    });
}



function getPortionsList() {
    //checkAuth();

    $.ajax({
        type: 'GET',
        url: baseUrl + 'showFood',
        headers: headersJWT,
        crossDomain: true,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',

        success: function (xhr, status) {
            console.log(xhr);
            console.log(status);
            if (status == 'success') {
                console.log("ok");
                // xhr.forEach(element => {
                buildFoodShowList(xhr);
                // });

                return 'ok';

            }
        },
        error: function (xhr, status) {
            console.log(xhr.status);
            console.log('error...');
            if (xhr.status == 401) {
                window.location.replace("index.html");
            }
        }
    });


}



