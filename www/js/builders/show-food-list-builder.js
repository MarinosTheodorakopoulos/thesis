



// var elementData = null;




function buildFoodShowList(data) {
    // console.log('hhshshsshhs');

    var html_text = '';

    data.forEach(element => {

        var item = {};

        item = {
            _lon: element[7],
            _lat: element[8],
            _fid: element[10],
            _address: element[9]
        };

        // console.log(item);

        // });
        html_text += "<div class=\"row\" style=\"height: 2px;\"></div>" +
            "    <div class=\"d-lg-flex\" style=\"padding: 5;padding-top: 5;padding-bottom: 5;background-color: #d7d7d7;\">" +
            "        <div class=\"container flex-nowrap\" id=\"history_list_div\">" +
            "            <div " +
            // " id= \"food_" + element[10] + "\"" +
            " onclick=\" buildPortionForm(" + item._lon + "," + item._lat + ",'" + item._address + "'," + item._fid + ")\"" +
            "    class=\"row text-nowrap text-left d-flex flex-row justify-content-center align-items-center flex-nowrap justify-content-sm-start\"" +
            "                style=\"margin: 0 0;\">" +
            "                <div class=\"col-md-12\">" +
            "                    <div class=\"row\">" +
            "                        <div class=\"col-md-12 text-center\"><span><span class=\"badge badge-primary\"" +
            "                            style=\"background-color: rgb(18,139,37);\">" + element[12] + "</span>&nbsp;Μερίδες</span>" +
            "                        </div>" +
            "                    </div>" +
            "                    <div" +
            "                        class=\"row text-nowrap text-left d-flex flex-row justify-content-start align-items-start flex-nowrap justify-content-sm-start\">" +
            "                        <div class=\"col-md-3 d-inline\"><span>" + element[13] + "-" + element[14] + "</span></div>" +
            "                        <div class=\"col-md-3 d-inline\"><span>" + element[9] + "</span></div>" +
            "                    </div>" +
            "                </div>" +
            "                <div class=\"col-md-12 text-center d-flex justify-content-center align-items-center\"><span" +
            "                    class=\"badge badge-primary\"><i class=\"icon ion-ios-arrow-right\"></i></span></div>" +
            "            </div>" +
            "        </div>" +
            "    </div>";




    });
    $("#foodList").html(html_text);
}



















