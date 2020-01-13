

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



function loadHistory() {
    //checkAuth();

    $.ajax({
        type: 'GET',
        url: baseUrl + 'history',
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
                buildHistoryList(xhr);
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






function submitFood(fid) {

    var data = {
        fid: fid,
        portions: document.getElementById('portions_num').value
    };
    var Form = this;


    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:5000/takeportions',
        headers: { "Authorization": 'Bearer' + ' ' + localStorage.getItem('token') },
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        context: Form,
        success: function (callback) {
            alert('You get food!');
            window.location.replace("home2.html");
        },
        error: function () {
            $(this).html("error!");
        }
    });
}



function submitBan() {

    console.log('ban')
    console.log(window.trid);

    var data = {
        trid: 1,
        rate: document.getElementById('star-field').value,
        quality: document.getElementsByName('quality')[0].value,
        text: document.getElementById('vote-text').value
    };

    console.log();

    // var Form = this;


    // $.ajax({
    //     type: 'POST',
    //     url: 'http://127.0.0.1:5000/takeportions',
    //     headers: { "Authorization": 'Bearer' + ' ' + localStorage.getItem('token') },
    //     dataType: 'json',
    //     contentType: 'application/json; charset=utf-8',
    //     data: JSON.stringify(data),
    //     context: Form,
    //     success: function (callback) {
    //         alert('You get food!');
    //         window.location.replace("home2.html");
    //     },
    //     error: function () {
    //         $(this).html("error!");
    //     }
    // });


}


/*


function submitBan() {


    var data = {
        star: document.getElementById('star-field').value,
        quality: document.getElementsByName('quality')[0].value,
        text: document.getElementById('vote-text').value
    };

    var Form = this;


    $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:5000/takeportions',
        headers: { "Authorization": 'Bearer' + ' ' + localStorage.getItem('token') },
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(data),
        context: Form,
        success: function (callback) {
            alert('You get food!');
            window.location.replace("home2.html");
        },
        error: function () {
            $(this).html("error!");
        }
    });


}*/