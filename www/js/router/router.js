

var pages =
    new Array(
        new Array('profile.html', 'insertPortion.html', 'profil.html', 'logout.html'),
        new Array('profile.html', 'portionsList.html', 'historyList.html', 'logout.html'));



function toggleMenu() {
    document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
}

function goToPage(page, usertype) {
    console.log(page);
    var wrapper = document.getElementsByClassName('wrapper')[0];
    var sections = document.getElementsByTagName('section');
    for (i = 0; i < sections.length; i++) {
        sections[i].classList.remove('before', 'after');
        if (i > page) {
            sections[i].classList.add('after');
        }
    }
    wrapper.classList.remove('menu-open', 'page-one', 'page-two');
    console.log(pages[usertype][page]);
    // wrapper.classList.add('page-' + pages[page]);
    document.getElementById('page_' + page).src = pages[usertype][page];
    // $("#page1").on("click", function (e) {
    //     console.log(e);

    //     $("#profil").load("profile.html");
    // });

    // document.getElementById("profil").innerHTML = loadHome();
    // document.getElementById("transaction").innerHTML = loadTransaction();
}

var k_trid;
function loadVoteScreen(trid) {

    $('#page-history').html('<iframe id="hist-frame" style="height:100%; width:100%;" class="inner-iframe" onload="getUrlValue()"></iframe>');
    document.getElementById('hist-frame').src = 'transaction.html';
    window.trid = trid;
}


function goToSelectPortionPage(item) {
    console.log(item);

    // var page = buildPortionForm(element);
    // $('#foodList').html('<div id="p-form" style="height:100%; width:100%;" class="inner-iframe"></div>');
    // document.getElementById('p-form').html(page);
}


















