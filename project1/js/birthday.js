// JavaScript source code
$(document).ready(function () {
    //xử lí birthday-flowers-caption
    $('#birthday-flowers-p-hide').hide();
    $('#close-more').hide();
    $('#read-more').click(function () {
        $('#birthday-flowers-p-hide').show();
        $('#close-more').show();
        $('#read-more').hide();
    });
    $('#close-more').click(function () {
        $('#birthday-flowers-p-hide').hide();
        $('#close-more').hide();
        $('#read-more').show();
    });

    //xử lý menu sort
    $('#sort-menu').hide();
    $('#sort-filter').click(function () {
        $('#sort-menu').toggle();
    });
    $('#button-sort-1').css('background-color', '#5e3987');
    $('#button-sort-1').css('color', 'white');
    var button1 = 1;
    var button2 = 0;
    var button3 = 0;
    $('#button-sort-1').click(function () {
        $('#button-sort-1').css('background-color', '#5e3987');
        $('#button-sort-1').css('color', 'white');
        $('#button-sort-2').css('background-color', 'white');
        $('#button-sort-2').css('color', 'black');
        $('#button-sort-3').css('background-color', 'white');
        $('#button-sort-3').css('color', 'black');
        button1 = 1;
        button2 = 0;
        button3 = 0;
    });
    $('#button-sort-2').click(function () {
        $('#button-sort-2').css('background-color', '#5e3987');
        $('#button-sort-2').css('color', 'white');
        $('#button-sort-1').css('background-color', 'white');
        $('#button-sort-1').css('color', 'black');
        $('#button-sort-3').css('background-color', 'white');
        $('#button-sort-3').css('color', 'black');
        button1 = 0;
        button2 = 1;
        button3 = 0;
    });
    $('#button-sort-3').click(function () {
        $('#button-sort-3').css('background-color', '#5e3987');
        $('#button-sort-3').css('color', 'white');
        $('#button-sort-2').css('background-color', 'white');
        $('#button-sort-2').css('color', 'black');
        $('#button-sort-1').css('background-color', 'white');
        $('#button-sort-1').css('color', 'black');
        button1 = 0;
        button2 = 0;
        button3 = 1;
    });
    $('#button-sort-1').mouseenter(function () {
        if (button1 == 0) {
            $('#button-sort-1').css('background-color', '#c1afd1');
            $('#button-sort-1').css('color', 'white');
        }
    });
    $('#button-sort-1').mouseleave(function () {
        if (button1 == 0) {
            $('#button-sort-1').css('background-color', 'white');
            $('#button-sort-1').css('color', 'black');
        }
    });
    $('#button-sort-2').mouseenter(function () {
        if (button2 == 0) {
            $('#button-sort-2').css('background-color', '#c1afd1');
            $('#button-sort-2').css('color', 'white');
        }
    });
    $('#button-sort-2').mouseleave(function () {
        if (button2 == 0) {
            $('#button-sort-2').css('background-color', 'white');
            $('#button-sort-2').css('color', 'black');
        }
    });
    $('#button-sort-3').mouseenter(function () {
        if (button3 == 0) {
            $('#button-sort-3').css('background-color', '#c1afd1');
            $('#button-sort-3').css('color', 'white');
        }
    });
    $('#button-sort-3').mouseleave(function () {
        if (button3 == 0) {
            $('#button-sort-3').css('background-color', 'white');
            $('#button-sort-3').css('color', 'black');
        }
    });
    var checkbox = 0;
    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            $('#submit-sort').css('color', '#5e3987');
            $('#submit-sort').css('border', 'solid 2px #5e3987');
            checkbox++;
        }
        else if ($(this).prop("checked") == false) {
            checkbox--;
            if (checkbox == 0) {
                $('#submit-sort').css('color', 'lightgray');
                $('#submit-sort').css('border', 'solid 1px lightgray');
            }
        }
    });
    //xử lý minus plus
    $('#content-1').hide();
    $('#minus1').hide();
    $('#plus1').click(function () {
        $('#content-1').show();
        $('#plus1').hide();
        $('#minus1').show();
    });
    $('#minus1').click(function () {
        $('#content-1').hide();
        $('#plus1').show();
        $('#minus1').hide();
    });

    $('#content-2').hide();
    $('#minus2').hide();
    $('#plus2').click(function () {
        $('#content-2').show();
        $('#plus2').hide();
        $('#minus2').show();
    });
    $('#minus2').click(function () {
        $('#content-2').hide();
        $('#plus2').show();
        $('#minus2').hide();
    });


    $('#content-3').hide();
    $('#minus3').hide();
    $('#plus3').click(function () {
        $('#content-3').show();
        $('#plus3').hide();
        $('#minus3').show();
    });
    $('#minus3').click(function () {
        $('#content-3').hide();
        $('#plus3').show();
        $('#minus3').hide();
    });


    $('#more-about-birthday-flowers-content-1').hide();
    $('#minus4').hide();
    $('#plus4').click(function () {
        $('#more-about-birthday-flowers-content-1').show();
        $('#plus4').hide();
        $('#minus4').show();
    });
    $('#minus4').click(function () {
        $('#more-about-birthday-flowers-content-1').hide();
        $('#plus4').show();
        $('#minus4').hide();
    });

    $('#more-about-birthday-flowers-content-2').hide();
    $('#minus').hide();
    $('#plus').click(function () {
        $('#more-about-birthday-flowers-content-2').show();
        $('#plus').hide();
        $('#minus').show();
    });
    $('#minus').click(function () {
        $('#more-about-birthday-flowers-content-2').hide();
        $('#plus').show();
        $('#minus').hide();
    });

    //sort mobile
    $('#sort-menu-mobile-container').hide();
    $('#sort-mobile').click(function () {
        $('#sort-menu-mobile-container').show();
    });
    $('#background-sort-menu-mobile').click(function () {
        $('#sort-menu-mobile').hide();
        $('#background-sort-menu-mobile').hide();
    });

    $('#button-sort-1-mobile').css('background-color', '#5e3987');
    $('#button-sort-1-mobile').css('color', 'white');
    var button1_mobile = 1;
    var button2_mobile  = 0;
    var button3_mobile  = 0;
    $('#button-sort-1-mobile').click(function () {
        $('#button-sort-1-mobile').css('background-color', '#5e3987');
        $('#button-sort-1-mobile').css('color', 'white');
        $('#button-sort-2-mobile').css('background-color', 'white');
        $('#button-sort-2-mobile').css('color', 'black');
        $('#button-sort-3-mobile').css('background-color', 'white');
        $('#button-sort-3-mobile').css('color', 'black');
        button1_mobile = 1;
        button2_mobile = 0;
        button3_mobile = 0;
    });
    $('#button-sort-2-mobile').click(function () {
        $('#button-sort-2-mobile').css('background-color', '#5e3987');
        $('#button-sort-2-mobile').css('color', 'white');
        $('#button-sort-1-mobile').css('background-color', 'white');
        $('#button-sort-1-mobile').css('color', 'black');
        $('#button-sort-3-mobile').css('background-color', 'white');
        $('#button-sort-3-mobile').css('color', 'black');
        button1_mobile = 0;
        button2_mobile = 1;
        button3_mobile = 0;
    });
    $('#button-sort-3-mobile').click(function () {
        $('#button-sort-3-mobile').css('background-color', '#5e3987');
        $('#button-sort-3-mobile').css('color', 'white');
        $('#button-sort-2-mobile').css('background-color', 'white');
        $('#button-sort-2-mobile').css('color', 'black');
        $('#button-sort-1-mobile').css('background-color', 'white');
        $('#button-sort-1-mobile').css('color', 'black');
        button1_mobile = 0;
        button2_mobile = 0;
        button3_mobile = 1;
    });
    var checkbox_mobile = 0;
    $('input[type="checkbox"]').click(function () {
        if ($(this).prop("checked") == true) {
            $('#submit-sort-mobile').css('color', '#5e3987');
            $('#submit-sort-mobile').css('border', 'solid 2px #5e3987');
            checkbox_mobile++;
        }
        else if ($(this).prop("checked") == false) {
            checkbox_mobile--;
            if (checkbox_mobile == 0) {
                $('#submit-sort-mobile').css('color', 'lightgray');
                $('#submit-sort-mobile').css('border', 'solid 1px lightgray');
            }
        }
    });
});