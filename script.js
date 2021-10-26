let nav = false;

function toggleNav() {
    if (!nav) {
        document.querySelector(".sideNav").style.width = "200px";
        document.querySelector(".sideBtn").style.left = "200px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.2)"
        nav = true;
    } else {
        document.querySelector(".sideNav").style.width = "0";
        document.querySelector(".sideBtn").style.left = "0";
        document.body.style.backgroundColor = "white"
        nav = false;
    }
}