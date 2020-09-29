$('.menu-toggle').on('click', function() {
    $(this).toggleClass('open');
    $('.nav').toggleClass('open');
    $('.bar-start').toggleClass('open');
    $('.bar-mid').toggleClass('open');
    $('.bar-end').toggleClass('open');
    $('body').toggleClass('open');
});
$('.nav-link').on('click', function() {
    $('.nav').toggleClass('open');
    $('.bar-start').toggleClass('open');
    $('.bar-mid').toggleClass('open');
    $('.bar-end').toggleClass('open');
    $('body').toggleClass('open');
})