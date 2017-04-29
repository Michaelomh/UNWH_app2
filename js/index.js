$(document).ready(function () {
    console.log("ready up");
    setTimeout(setupTimeOut, 1000);
});

$(".login-submit").click(function () {
    $(".login-submit").html("<img src=\"img/loading.gif\" style=\"height:100%; margin: 0px auto;\" class=\"img-responsive\" />");

    setTimeout(loginSlideUp, 2000);
});

function loginSlideUp() {
    $(".cont").slideUp(1000);
}

function setupTimeOut() {
    console.log("setup");
    $("#card-1").click(function () {
        console.log("clicked modal");
        $('#myModal').modal('toggle');
    });
}
