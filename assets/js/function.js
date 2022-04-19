// smooth scroll

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $(".scroll-up").fadeIn("slow");
    } else {
        $(".scroll-up").fadeOut("slow");
    }
});

// navbar shadow

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $(".is-navbar").css("box-shadow", "0 2px 6px #dfdfdf");
    } else {
        $(".is-navbar").css("box-shadow", "none");
    }
});

// side menu

function openSideMenu() {
    document.getElementById("mySidenav").style.right = "0";
    $('.extra-space-navbar').css('display', 'block');
}

function closeSideMenu() {
    document.getElementById("mySidenav").style.right = "-250px";
    $('.extra-space-navbar').css('display', 'none');
}

// owl carousel items center

var $owl = $(".owl-carousel");

$owl.children().each(function (index) {
    $(this).attr("data-position", index);
});

$(document).on("click", ".owl-item>div", function () {
    $owl.trigger("to.owl.carousel", $(this).data("position"));
});

// input label on focus

$(".input-area input , .input-area select , .input-area textarea")
    .focus(function () {
        $(this).parents(".input-area").children("label").css("color", "#f28020");
    })
    .focusout(function () {
        $(this).parents(".input-area").children("label").css("color", "#595959");
    });

// show hide password

// show hide icon toggle

$(".hide").hide();

$(".show, .hide").on("click", function () {
    $(this).parent().children(".show, .hide").toggle();
});

$(".details-toggle").on("click", function () {
    $(this).parents('.employee-details').toggleClass("active");
    $(this).parents('.department-details').toggleClass("active");
});

$(".show-hide").click(function () {
    if ("password" === $(this).parent().find("input").attr("type")) {
        $(this).parent().find("input").prop("type", "text");
    } else {
        $(this).parent().find("input").prop("type", "password");
    }
});

// expand content expand

$(".expanded-topic").click(function () {
    if ($(this).parent().hasClass("active")) {
        $(".expanded").removeClass("active");
    } else {
        $(".expanded").removeClass("active");
        $(this).parent().addClass("active");
        $(this).closest(".expanded").addClass("active");
    }
});

// expand switch

$(".expanded-details a").click(function () {
    $(".expanded").removeClass("active");
    $(`.${$(this).attr("href").substring(1)}`).toggleClass("active");
});

// form validation

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^((01){1}[3-9]{1}\d{8})$/;
    return re.test(String(phone));
}

function validatePassword(password) {
    const re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return re.test(String(password));
}

function validateInput(field) {
    if ($(field).attr('type') === 'email') {
        if (validateEmail($(field).val())) {
            $(field).addClass("is-valid");
            $(field).removeClass("is-invalid");
        }
        else {
            $(field).addClass("is-invalid");
            $(field).removeClass("is-valid");
        }
    }
    if ($(field).attr('type') === 'tel') {
        if (validatePhone($(field).val())) {
            $(field).addClass("is-valid");
            $(field).removeClass("is-invalid");
        }
        else {
            $(field).addClass("is-invalid");
            $(field).removeClass("is-valid");
        }
    }
    // if ($(field).val().length === 0) {
    // 	$(field).addClass("is-invalid");
    // 	$(field).removeClass("is-valid");
    // 	return false;
    // } else {
    // 	$(field).addClass("is-valid");
    // 	$(field).removeClass("is-invalid");
    // 	return true;
    // }
}

$(document).ready(function () {
    $("form input , form textarea , form select").on("input", function () {
        validateInput($(this));
    });
    $(".submit-click").on("click", function (event) {
        var validated = true;
        $(".validationCheck").each(function () {
            validateInput($(this));
            if (!validateInput($(this))) {
                validated = false;
            }
        });
        if (!validated) {
            event.preventDefault();
        }
    });
});

// b2b dashboard menu

$(window).ready(function () {
    if ($(this).width() < 768) {
        $('.b2b-dashboard').css('marginLeft', '0');
    }
    else {
        $('.b2b-dashboard').css('marginLeft', '250px');
    }
});

$(window).resize(function () {
    if ($(this).width() < 768) {
        $('.b2b-dashboard').css('marginLeft', '0');
    }
    else {
        $('.b2b-dashboard').css('marginLeft', '250px');
    }
});


$('.dashboard-menu').on('click', function () {
    var width = $(".dash-nav").width();
    var windowLength = $(window).width();
    if (windowLength <= 767) {
        if (width === 250) {
            $('.dash-nav').css('width', '0');
            $('.b2b-dashboard').css('marginLeft', '0');
        }
        else {
            $('.dash-nav').css('width', '250px');
            $('.b2b-dashboard').css('marginLeft', '0');
        }
    }
    else {
        if (width === 250) {
            $('.dash-nav').css('width', '0');
            $('.b2b-dashboard').css('marginLeft', '0');
        }
        else {
            $('.dash-nav').css('width', '250px');
            $('.b2b-dashboard').css('marginLeft', '250px');
        }
    }
})

//
$('.details-action').on('click', function () {
    $('.details-action img').toggle();
})
