$(document).ready(function () {
    const overlay = $('#page-transition');
    const navItems = $('.nav-item'); 
    const mobileNavItems = $('#mobile_nav_list .nav-item'); 
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';

    // ---------- MENU MOBILE ----------
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-x');
    });

    // ---------- FADE-IN / FADE-OUT AO CARREGAR ----------
    setTimeout(function () {
        overlay.removeClass('active');

        // ---------- MENU ATIVO ----------
        navItems.removeClass('active');
        mobileNavItems.removeClass('active');

        if (currentPage === 'index.html') {
            navItems.find('a[href="index.html"]').parent().addClass('active');
            mobileNavItems.find('a[href="index.html"]').parent().addClass('active');
        } else {
            navItems.find('a').each(function () {
                if ($(this).attr('href') === currentPage) $(this).parent().addClass('active');
            });
            mobileNavItems.find('a').each(function () {
                if ($(this).attr('href') === currentPage) $(this).parent().addClass('active');
            });
        }
    }, 50);

    // ---------- SCROLLREVEAL ----------
    ScrollReveal().reveal('#cta', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('.burger', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('#testimonial_chef', { origin: 'left', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('.feedback', { origin: 'right', duration: 2000, distance: '20%' });
    ScrollReveal().reveal('#faq-container', { origin: 'left', duration: 2000, distance: '20%' });
    
    // Anima cada item do conteiner
    ScrollReveal().reveal('.faq-item', { 
        origin: 'left', 
        duration: 2000, 
        distance: '20%',
        interval: 200,
        beforeReveal: function (domEl) {
            $(domEl).css('opacity', 1); // Garante que o item ficará visível após a animação
        }
    });

    ScrollReveal().reveal('.feedback', { 
        origin: 'right', 
        duration: 2000, 
        distance: '20%',
        interval: 200,
        beforeReveal: function (domEl) {
            $(domEl).css('opacity', 1); // Garante que o item ficará visível após a animação
        }
    });

    // ---------- FAQ ACCORDION ----------
    $('.faq-question').on('click', function () {
        const answer = $(this).next('.faq-answer');
        const arrow = $(this).find('.arrow');

        $('.faq-answer').not(answer).css('max-height', '');
        $('.faq-question').not(this).find('.arrow').css('transform', 'rotate(0deg)');

        if (answer.css('max-height') !== '0px' && answer.css('max-height') !== 'none') {
            answer.css('max-height', '');
            arrow.css('transform', 'rotate(0deg)');
        } else {
            answer.css('max-height', answer.prop('scrollHeight') + 'px');
            arrow.css('transform', 'rotate(180deg)');
        }
    });

});



