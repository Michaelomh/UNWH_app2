var counter = 0;

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

    $(".modal-chat-button").click(function () {
        $('#myModal').modal('toggle');
        setTimeout(moveToChat, 500);
    });

    $("#e-comm-filter").click(function () {
        $("#find-mentor-bottom").animate({
            opacity: "hide"
        }, 500, function () {
            duration: "slow"
        });
        $("#find-mentor-disappear").animate({
            opacity: "hide"
        }, 500, function () {
            duration: "slow"
        });
    });

    $("#send-message-button").click(function () {
        if (counter == 0) {
            $("#send1").animate({
                opacity: "show"
            }, 500, function () {
                duration: "slow"
            });
            setTimeout(responseMsg1, 4000);
            counter++;
        } else {
            $("#send2").animate({
                opacity: "show"
            }, 500, function () {
                duration: "slow"
            });
        }


    });

    $(".nav-error").click(function () {
        toastr.warning('Feature not yet implemented');
    });

    $(".propose-btn").click(function () {
        $('#proposeModal').modal('toggle');
        setTimeout(moveToMilestones, 500);
    });

    $("#mile-1").click(function () {
        $(".formTeam").hide();
        $(".pitch").show();
        $(".funds").hide();
        $(".opsExit").hide();

        $("#completed-panel").animate({
            opacity: "show"
        }, 500, function () {
            duration: "slow"
        });
    });

    $("#mile-2").click(function () {
        $(".formTeam").show();
        $(".pitch").hide();
        $(".funds").hide();
        $(".opsExit").hide();

        $("#completed-panel").animate({
            opacity: "hide"
        }, 500, function () {
            duration: "slow"
        });
    });

    $("#mile-3").click(function () {
        $(".formTeam").hide();
        $(".pitch").hide();
        $(".funds").show();
        $(".opsExit").hide();

        $("#completed-panel").animate({
            opacity: "hide"
        }, 500, function () {
            duration: "slow"
        });
    });

    $("#mile-4").click(function () {
        $(".formTeam").hide();
        $(".pitch").hide();
        $(".funds").hide();
        $(".opsExit").show();

        $("#completed-panel").animate({
            opacity: "hide"
        }, 500, function () {
            duration: "slow"
        });
    });


    $("#comment-pitch").click(function () {
        $(".pitch-edit").toggle();
        $(".pitch").toggle();
        $("#pitch-edit-div").toggle();
    });
}

var moveToChat = function () {
    window.location.href = 'chatmentor.html';
};

var moveToMilestones = function () {
    window.location.href = 'milestones.html';
};

var responseMsg1 = function () {
    $("#response1").animate({
        opacity: "show"
    }, 500, function () {
        duration: "slow"
    });
};

var responseMsg2 = function () {
    $("#response2").animate({
        opacity: "show"
    }, 500, function () {
        duration: "slow"
    });
};
