$(document).ready(function () {
    $('.loader-container').show()
    $('#fullpage').hide()

    $(window).on('load', function() {
        $('.loader-container').fadeOut(1000)

        $('#fullpage').delay(1000).fadeIn(1000).fullpage({
            navigation: true,
            navigationPosition: 'left',
        })
    })
})