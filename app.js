$(document).ready(function () {
    $('.arrow-button, .arrow-button-sm').click(function () {
        $(this).toggleClass('open');
    });

    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
    })
})