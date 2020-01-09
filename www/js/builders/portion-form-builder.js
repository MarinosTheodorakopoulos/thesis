

function buildPortionForm(lon, lat, address, fid) {

    console.log('eeeeeeeeeeeeeeeerr..')

    var page = " <div class=\"row\" style=\"height: 2px;\"></div>" +
        "    <div class=\"row\" style=\"height: 2px;\"></div>" +
        "    <div class=\"d-lg-flex\" style=\"background-color: #a8d372;margin: 10;padding: 10;\">" +
        "        <div class=\"row text-nowrap text-center d-flex flex-row justify-content-center align-items-center flex-nowrap justify-content-sm-start\" style=\"margin: 2;height: 50px;background-color: #d7d7d7;\">" +
        "            <div class=\"col-md-12 text-center\">" +
        "                <div class=\"row\">" +
        "                    <div class=\"col text-right\"><span style=\"font-size: 24px;\">&nbsp;Μερίδες</span></div>" +
        "                    <div class=\"col text-left d-flex justify-content-start align-items-center\"><input type=\"text\" style=\"background-color: rgba(255,255,255,0.47);width: 37px;\"></div>" +
        "                </div>" +
        "            </div>" +
        "        </div>" +
        "    </div>" +
        "    <div class=\"row\" style=\"height: 2px;\"></div>" +
        "    <div class=\"d-lg-flex\" style=\"background-color: #d7d7d7;margin: 10;padding: 10;\">" +
        "        <div class=\"row text-nowrap text-left d-flex flex-row justify-content-center align-items-center flex-nowrap justify-content-sm-start\" style=\"margin: 2;height: 50px;\">" +
        "            <div class=\"col-md-12 text-center\"><span style=\"font-size: 22px;\"><i class=\"fa fa-map-o\"></i>&nbsp;Χαρτης</span></div>" +
        "        </div>" +
        "    </div>" +
        "    <div class=\"row\" style=\"height: 2px;\"></div>" +
        "    <div class=\"d-lg-flex\" style=\"background-color: #a8d372;\">" +
        "        <div class=\"row text-nowrap text-left d-flex flex-row justify-content-center align-items-center flex-nowrap justify-content-sm-start\" style=\"margin: 0 1;height: 50px;\">" +
        "            <div class=\"col-md-12 text-center\"><span style=\"font-size: 22px;\"><i class=\"far fa-check-circle\"></i>&nbsp;Επιβεβαίωση&nbsp;</span></div>" +
        "        </div>" +
        "    </div>" +
        "    <div class=\"row\" style=\"height: 2px;\"></div>"

    $("#foodList").html(page);

    // return page;

}














