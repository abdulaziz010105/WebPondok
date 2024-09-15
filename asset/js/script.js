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
    var $tickerWrapper = $(".tickerwrapper");
    var $list = $tickerWrapper.find(".image-scroll-wrapper");
    var listWidth = 0;

    // Menghitung lebar total dari semua .team-member
    $list.find(".team-member").each(function() {
        listWidth += $(this).outerWidth(true);
    });

    // Mengkloning elemen untuk membuat efek loop
    $list.append($list.html());

    // Mengatur lebar list yang dikloning
    $list.css({
        "width": listWidth * 2 + "px"
    });

    // GSAP TimelineMax setup untuk loop tanpa jeda
    var time = 30; // Durasi total dalam detik untuk seluruh scroll
    gsap.timeline({ repeat: -1, defaults: { ease: "none" } })
        .fromTo($list, 
            { x: 0 }, 
            { x: -listWidth, duration: time }
        );

    // Pause/Play on hover
    $tickerWrapper.on("mouseenter", function(){
        gsap.globalTimeline.pause();
    }).on("mouseleave", function(){
        gsap.globalTimeline.play();
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

// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk link anchor
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Validasi formulir kontak
    const form = document.querySelector('.formulir-kontak');
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
          alert('Pesan Anda telah terkirim!');
          form.reset();
        }
      });
    }
  
    function validateForm() {
      let isValid = true;
      const inputs = form.querySelectorAll('input, textarea');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
        } else {
          input.classList.remove('error');
        }
      });
  
      return isValid;
    }
  
    // Animasi pada scroll
    const animatedElements = document.querySelectorAll('.kartu-kontak, .formulir-kontak');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });
  
    animatedElements.forEach(el => observer.observe(el));
  });
  
// Menggabungkan event onscroll untuk tombol gulir ke atas dan sticky navbar
window.onscroll = function() {
  // Bagian untuk tombol gulir ke atas
  let scrollButton = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollButton.style.display = "block"; // Tampilkan tombol
  } else {
      scrollButton.style.display = "none"; // Sembunyikan tombol
  }

  // Bagian untuk sticky navbar
  stickyNavbar();
};

// Fungsi sticky navbar
var navbar = document.querySelector('.navbar-top');
var sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Ketika tombol scroll-to-top diklik, gulir kembali ke atas
document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
  e.preventDefault(); // Mencegah tindakan default dari tag <a>
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Gulir ke atas dengan smooth
});

$(document).ready(function() {
  // Smooth scroll with offset for "Santri Putra" and "Santri Putri"
  $('a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      // Get the target ID
      var target = this.hash;
      var $target = $(target);

      // Calculate the offset (height of the fixed header)
      var headerHeight = $('#main-header').outerHeight();

      // Scroll the page with offset
      $('html, body').animate({
          scrollTop: $target.offset().top - headerHeight // Adjust scroll position
      }, 800); // 800ms for smooth scroll
  });
});

}(jQuery));

