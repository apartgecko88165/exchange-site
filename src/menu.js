const joinPath = "../html/join.html";
const viewPath = "../html/view.html";

// call functions to change element href to correct location
document.getElementById("join-exchange").onclick =
() => { location.href = joinPath; };
document.getElementById("view-exchanges").onclick =
() => { location.href = viewPath; };
document.getElementById("join-text-button").onclick =
() => { location.href = joinPath; };
document.getElementById("view-text-button").onclick =
() => { location.href = viewPath; };
