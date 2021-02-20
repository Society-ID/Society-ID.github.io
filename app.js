$(document).ready(function () {
    $('.arrow-button, .arrow-button-sm').click(function () {
        $(this).toggleClass('open');
    });

    $('.menu-item').click(function () {
        $('#cbToggler').prop('checked', false)
    })

    $('#fullpage').fullpage({
        anchors: ['anchor0', 'anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
        navigation: true,
        navigationPosition: 'left',
    })
})