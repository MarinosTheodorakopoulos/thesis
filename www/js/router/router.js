

var pages = new Array('profile.html', 'transaction.html', 'profil.html', 'profil.html');

function toggleMenu() {
    document.getElementsByClassName('wrapper')[0].classList.toggle('menu-open');
}

function goToPage(page) {
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
    console.log(pages[page]);
    // wrapper.classList.add('page-' + pages[page]);
    document.getElementById('page_' + page).src = pages[page];
    // $("#page1").on("click", function (e) {
    //     console.log(e);

    //     $("#profil").load("profile.html");
    // });

    // document.getElementById("profil").innerHTML = loadHome();
    // document.getElementById("transaction").innerHTML = loadTransaction();
}














