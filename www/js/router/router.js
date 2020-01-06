

var pages =
    new Array(
        new Array('profile.html', 'insertPortion.html', 'profil.html', 'profil.html'),
        new Array('profile.html', 'portionsList.html', 'historyList.html', 'profil.html'));



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


$(document).ready(function () {
    console.log('check auth...');
    checkAuth();
});














