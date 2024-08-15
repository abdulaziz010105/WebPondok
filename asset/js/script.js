(function($){

$(document).ready(function ($) {

     jQuery('#map').CustomMap();


     ////------- Testimonials Carousel
    
    var testimonial = $(".testimonial-wrapper");
    testimonial.owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 1000,
        stopOnHover: true,
        autoPlay: 3000,
        singleItem: true,
        transitionStyle : "fade",
        navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
    });
    
    /*----------------------------------------------------*/
	/*	Nav Menu & Search
	/*----------------------------------------------------*/
	
	$(".nav > li:has(ul)").addClass("drop");
	$(".nav > li.drop > ul").addClass("dropdown");
	$(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
    
    
    
    
    
    /*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/
    $(document).ready(function($) {
	"use strict";

    
    
        $('.skill-shortcode').appear(function() {
            $('.progress').each(function(){ 
                $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
            });
        },{accY: -100});
        
        
    });    
    
    /*--------------------------------------------------*/
    /* Counter*/
    /*--------------------------------------------------*/ 
    $('.timer').countTo();

    $('.counter-item').appear(function() {
        $('.timer').countTo();
    },{accY: -100});
    
    
});

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.image-scroll-container');
    const wrapper = document.querySelector('.image-scroll-wrapper');
    const teamMembers = document.querySelectorAll('.team-member');
    let isDown = false;
    let startX;
    let scrollLeft;
    let animationTimeout;

    const stopAnimation = () => {
        wrapper.style.animationPlayState = 'paused'; // Hentikan animasi
    };

    const startAnimation = () => {
        wrapper.style.animationPlayState = 'running'; // Mulai kembali animasi
    };

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.classList.add('grabbing');
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.classList.remove('grabbing');
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.classList.remove('grabbing');
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2; // Jumlah penggeseran lebih responsif
        container.scrollLeft = scrollLeft - walk;
    });

    // Tambahkan touch event untuk mobile devices
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('touchend', () => {
        isDown = false;
    });

    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });

    // Menangani klik pada anggota tim
    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            stopAnimation();

            // Hentikan animasi selama 3 detik (3000 ms)
            clearTimeout(animationTimeout);
            animationTimeout = setTimeout(() => {
                startAnimation();
            }, 3000);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    const text = typingText.getAttribute('data-text');
    let index = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting && index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 50); // Kecepatan mengetik
        } else if (isDeleting && index > 0) {
            typingText.innerHTML = text.substring(0, index - 1);
            index--;
            setTimeout(type, 50); // Kecepatan menghapus
        } else if (index === text.length) {
            setTimeout(() => {
                isDeleting = true;
                setTimeout(type, 500); // Jeda sebelum mulai menghapus
            }, 2000); // Jeda sebelum mulai menghapus teks
        } else if (index === 0) {
            isDeleting = false;
            setTimeout(type, 500); // Jeda sebelum mulai mengetik ulang
        }
    }

    type();
});

}(jQuery));

