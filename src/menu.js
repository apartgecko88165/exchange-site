const joinPath = "../html/join.html";
const viewPath = "../html/view.html";

// call functions to change element href to correct location
document.getElementById("join-exchange").onclick =
() => {
    $("#join-exchange").css("background-color", "lightgray");
    location.href = joinPath;
};
document.getElementById("view-exchanges").onclick =
() => {
    $("#view-exchanges").css("background-color", "lightgray");
    location.href = viewPath;
};
document.getElementById("join-text-button").onclick =
() => {
    $("#join-exchange").css("background-color", "lightgray");
    location.href = joinPath;
};
document.getElementById("view-text-button").onclick =
() => {
    $("#view-exchanges").css("background-color", "lightgray");
    location.href = viewPath;
};