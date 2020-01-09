var pages = new Array('profile.html', 'leaflet.html', 'profil.html', 'profil.html');

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

// $(function () {
//   $("#page1").click(function () {
//     $("#profil").load("profile.html");
//     //$("#import").load("css/profile.css");
//   });
// });

// $(document).ready(function () {
//     console.log("ok");
//     $("#page1").on("click", function (e) {
//         console.log(e);
//         $("#profil").load("profile.html");
//     });
// });


    // $(function () {
    //   $("#page2").click(function () {
    //     $("#transaction").load("transaction.html");
    //     $("#import").load("css/transaction.css");
    //   });
    // });
    // async function fetchHtmlAsText(url) {
    //   return await (await fetch(url)).text();
    // }

    // // // this is your `load_home() function`
    // async function loadHome() {
    //   const contentDiv = document.getElementById("profil");
    //   var a = await fetchHtmlAsText("profile.html");
    //   alert(a);
    //   contentDiv.innerHTML = await fetchHtmlAsText("profile.html");
    // }

    // async function loadTransaction() {
    //   const contentDiv = document.getElementById("insertFood");
    //   contentDiv.innerHTML = await fetchHtmlAsText("transaction.html");
    // }