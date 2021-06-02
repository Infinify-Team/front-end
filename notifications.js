const notifbox = document.querySelector(".notifdiv");
const notifbox1 = document.querySelector(".div1");
const notifbox2 = document.querySelector(".div2");
const notifbox3 = document.querySelector(".div3");

function showNotifs() {
    const nbox = document.querySelector(".notifications");
    const notifs = document.querySelector(".fa-bell");

    nbox.style.opacity = "1";
    setTimeout(function() {
        nbox.style.height = "20em"
        notifs.setAttribute("onclick", "hideNotifs()");
        setTimeout(function() {
            notifbox.style.transform = "translateX(0%)";
        }, 100)
        setTimeout(function() {
            notifbox1.style.transform = "translateX(0%)";
        }, 150)
        setTimeout(function() {
            notifbox2.style.transform = "translateX(0%)";
        }, 200)
        setTimeout(function() {
            notifbox3.style.transform = "translateX(0%)";
        }, 250)
    }, 300);
}

function hideNotifs() {
    const nbox = document.querySelector(".notifications");
    const notifs = document.querySelector(".fa-bell");
    notifs.setAttribute("onclick", "showNotifs()");
    setTimeout(function() {
        notifbox.style.transform = "translateX(-100%)";
    }, 100)
    setTimeout(function() {
        notifbox1.style.transform = "translateX(-100%)";
    }, 150)
    setTimeout(function() {
        notifbox2.style.transform = "translateX(-100%)";
    }, 200)
    setTimeout(function() {
        notifbox3.style.transform = "translateX(-100%)";
    }, 250)
    setTimeout(function() {
        nbox.style.height = "0em"
        setTimeout(function() {
            nbox.style.opacity = "0";
        }, 400)
    }, 400)
}
