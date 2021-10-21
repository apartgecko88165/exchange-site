const joinPath = "../html/join.html";
const viewPath = "../html/view.html";

// call functions to change element href to correct location
$("#join-exchange").click(
() => {
    $("#join-exchange").css("background-color", "lightgray");
    location.href = joinPath;
});
$("#view-exchanges").click(
() => {
    $("#view-exchanges").css("background-color", "lightgray");
    location.href = viewPath;
});
$("#join-text-button").click(
() => {
    $("#join-exchange").css("background-color", "lightgray");
    location.href = joinPath;
});
$("#view-text-button").click(
() => {
    $("#view-exchanges").css("background-color", "lightgray"); 
    location.href = viewPath;
});