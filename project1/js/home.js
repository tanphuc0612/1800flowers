// JavaScript source code
$(document).ready(function () {
    //xử lí detail ẩn hiện
    $('.list-trending').mouseenter(function () {
        $(this).find('.view-detail').css('background-color','#5e3987');
    });
    $('.list-trending').mouseleave(function () {
        $(this).find('.view-detail').css('background-color', 'white');
    });
    //xử lí submit email
    $('#email-submit').find('img').click(function () {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!filter.test($('#email-submit').find('input').val())) {
            alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
            return false;
        }
        else {
            alert('OK roi day, Email nay hop le.');
        }
    });
    //xử lí get date tự động
    var date = new Date;
    var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var maxDate = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saruday"]
    var dayName = "";
    var stt = date.getDate();
    var j = 0;
    for (var i = 0; i < 7; i++) {
        dayName = "<option>" + day[(date.getDay() + i) % 7] + " " + month[date.getMonth() + j] + " " + stt++ + "th</option>";
        $('#date').append(dayName);
        $('#date-2').append(dayName);
        if (maxDate[date.getMonth()] < stt) { j++; stt = 1;}
    }
    //xử lí feedback
    $('#feedback').slideToggle(0);
    $('#feedback-button').click(function () {
        $('#feedback').slideToggle(500);
    });
    //xử lí dropdown-first
    $('#flag-menu').hide();
    $('#header-first-menu').find('.dropdown-toggle').click(function () {
        if (screen.availWidth > 1000) { $('#flag-menu').toggle(); } 
    });
    $('#header-first-menu').find('.dropdown-toggle').blur(function () {
        $('#flag-menu').hide();
    });
    //xử lí dropdown mega
    $('#spring').hide();
    $('#spring-menu').mouseenter(function () {
        $('#spring').show();
    });
    $('#spring-menu').mouseleave(function () {
        $('#spring').hide(50);
        $('#spring').mouseenter(function () {
            $('#spring').stop();
            $('#spring').show();
        });
        $('#spring').mouseleave(function () {
            $('#spring').hide();
        });
    });

    $('#easter').hide();
    $('#easter-menu').mouseenter(function () {
        $('#easter').show();
    });
    $('#easter-menu').mouseleave(function () {
        $('#easter').hide(50);
        $('#easter').mouseenter(function () {
            $('#easter').stop();
            $('#easter').show();
        });
        $('#easter').mouseleave(function () {
            $('#easter').hide();
        });
    });


    $('#birthday').hide();
    $('#birthday-menu').mouseenter(function () {
        $('#birthday').show();
    });
    $('#birthday-menu').mouseleave(function () {
        $('#birthday').hide(50);
        $('#birthday').mouseenter(function () {
            $('#birthday').stop();
            $('#birthday').show();
        });
        $('#birthday').mouseleave(function () {
            $('#birthday').hide();
        });
    });

    $('#sympathy').hide();
    $('#sympathy-menu').mouseenter(function () {
        $('#sympathy').show();
    });
    $('#sympathy-menu').mouseleave(function () {
        $('#sympathy').hide(50);
        $('#sympathy').mouseenter(function () {
            $('#sympathy').stop();
            $('#sympathy').show();
        });
        $('#sympathy').mouseleave(function () {
            $('#sympathy').hide();
        });
    });

    $('#occasions').hide();
    $('#occasions-menu').mouseenter(function () {
        $('#occasions').show();
    });
    $('#occasions-menu').mouseleave(function () {
        $('#occasions').hide(50);
        $('#occasions').mouseenter(function () {
            $('#occasions').stop();
            $('#occasions').show();
        });
        $('#occasions').mouseleave(function () {
            $('#occasions').hide();
        });
    });

    $('#flowers').hide();
    $('#flowers-menu').mouseenter(function () {
        $('#flowers').show();
    });
    $('#flowers-menu').mouseleave(function () {
        $('#flowers').hide(50);
        $('#flowers').mouseenter(function () {
            $('#flowers').stop();
            $('#flowers').show();
        });
        $('#flowers').mouseleave(function () {
            $('#flowers').hide();
        });
    });

    $('#plants').hide();
    $('#plants-menu').mouseenter(function () {
        $('#plants').show();
    });
    $('#plants-menu').mouseleave(function () {
        $('#plants').hide(50);
        $('#plants').mouseenter(function () {
            $('#plants').stop();
            $('#plants').show();
        });
        $('#plants').mouseleave(function () {
            $('#plants').hide();
        });
    });

    $('#gift').hide();
    $('#gift-menu').mouseenter(function () {
        $('#gift').show();
    });
    $('#gift-menu').mouseleave(function () {
        $('#gift').hide(50);
        $('#gift').mouseenter(function () {
            $('#gift').stop();
            $('#gift').show();
        });
        $('#gift').mouseleave(function () {
            $('#gift').hide();
        });
    });

    $('#same-day').hide();
    $('#same-day-menu').mouseenter(function () {
        $('#same-day').show();
    });
    $('#same-day-menu').mouseleave(function () {
        $('#same-day').hide(50);
        $('#same-day').mouseenter(function () {
            $('#same-day').stop();
            $('#same-day').show();
        });
        $('#same-day').mouseleave(function () {
            $('#same-day').hide();
        });
    });

    $('#sale').hide();
    $('#sale-menu').mouseenter(function () {
        $('#sale').show();
    });
    $('#sale-menu').mouseleave(function () {
        $('#sale').hide(50);
        $('#sale').mouseenter(function () {
            $('#sale').stop();
            $('#sale').show();
        });
        $('#sale').mouseleave(function () {
            $('#sale').hide();
        });
    });
    //xử lý reponsive menu
    $('#reponsive-menu-container').hide();
    $('#reponsive-header-bars').click(function () {
        $('#reponsive-menu-container').show();
    });
    $('#reponsive-menu-1-close').click(function () {
        $('#reponsive-menu-container').hide();
    });
    //back-next
    $('#reponsive-menu-main-birthday').hide();
    $('#next-birthday').click(function () {
        $('#reponsive-menu-main-home').hide();
        $('#reponsive-menu-main-birthday').show();
    });
    $('.back-home').click(function () {
        $('#reponsive-menu-main-birthday').hide();
        $('#reponsive-menu-main-home').show();
    });

    $('#reponsive-menu-main-sympathy').hide();
    $('#next-sympathy').click(function () {
        $('#reponsive-menu-main-home').hide();
        $('#reponsive-menu-main-sympathy').show();
    });
    $('.back-home').click(function () {
        $('#reponsive-menu-main-sympathy').hide();
        $('#reponsive-menu-main-home').show();
    });

    $('#reponsive-menu-main-occasions').hide();
    $('#next-occasions').click(function () {
        $('#reponsive-menu-main-home').hide();
        $('#reponsive-menu-main-occasions').show();
    });
    $('.back-home').click(function () {
        $('#reponsive-menu-main-occasions').hide();
        $('#reponsive-menu-main-home').show();
    });

    $('#reponsive-menu-main-flowers').hide();
    $('#next-flowers').click(function () {
        $('#reponsive-menu-main-home').hide();
        $('#reponsive-menu-main-flowers').show();
    });
    $('.back-home').click(function () {
        $('#reponsive-menu-main-flowers').hide();
        $('#reponsive-menu-main-home').show();
    });

    $('#reponsive-menu-main-plants').hide();
    $('#next-plants').click(function () {
        $('#reponsive-menu-main-home').hide();
        $('#reponsive-menu-main-plants').show();
    });
    $('.back-home').click(function () {
        $('#reponsive-menu-main-plants').hide();
        $('#reponsive-menu-main-home').show();
    });

    $('#reponsive-menu-main-gift').hide();
    $('#next-gift').click(function () {
        $('#reponsive-menu-main-home').hide();
        $('#reponsive-menu-main-gift').show();
    });
    $('.back-home').click(function () {
        $('#reponsive-menu-main-gift').hide();
        $('#reponsive-menu-main-home').show();
    });

    $('#reponsive-menu-main-same-day').hide();
    $('#next-same-day').click(function () {
        $('#reponsive-menu-main-home').hide();
        $('#reponsive-menu-main-same-day').show();
    });
    $('.back-home').click(function () {
        $('#reponsive-menu-main-same-day').hide();
        $('#reponsive-menu-main-home').show();
    });

    $('#reponsive-menu-main-sale').hide();
    $('#next-sale').click(function () {
        $('#reponsive-menu-main-home').hide();
        $('#reponsive-menu-main-sale').show();
    });
    $('.back-home').click(function () {
        $('#reponsive-menu-main-sale').hide();
        $('#reponsive-menu-main-home').show();
    });
    //feedback  
    var check = 0;
    $('#feedback-button').click(function () {
        if (check == 0) {
            $('#feedback-button').animate({ bottom:'326px'},500);
            check = 1;
        }
        else {
            $('#feedback-button').animate({ bottom: '30px' }, 500);
            check = 0;
        }
    });
    //xử lý exclusive list
    $('.exclusive-image').mouseenter(function () {
        $(this).animate({
            width: '190px',
            height:'220px'
        },300);
    });
    $('.exclusive-image').mouseleave(function () {
        $(this).animate({
            width: '180px',
            height: '200px'
        }, 300);
    });
});
