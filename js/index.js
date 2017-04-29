$(document).ready(function () {
    console.log("ready up");
    setTimeout(setupTimeOut, 1000);
});

function loginSlideUp() {
    $(".cont").slideUp(1000);
}

function setupTimeOut() {
    $("#card-1").click(function () {
        $('#myModal').modal('toggle');
    });
    
    $("#propose-chat-button").click(function () {
        $('#proposeModal').modal('toggle');
    });

    $(".login-submit").click(function () {
        $(".login-submit").html("<img src=\"img/loading.gif\" style=\"height:100%; margin: 0px auto;\" class=\"img-responsive\" />");

        setTimeout(loginSlideUp, 2000);
    });
    
    $(".nav-newproject").click(function () {
        console.log("go to new project");
    });

    $(".nav-project").click(function () {
        console.log("go to existing project");
    });

    $(".nav-findmentors").click(function () {
        window.location.href = 'findmentor.html';
    });

}

$("#send-message-button").click(function() {
    console.log("send message");
});

    