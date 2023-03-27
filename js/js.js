// Timer
isSail = false
$(window).on('load', function() {
  setTimeout(function(){
    lastDay = 29
    setInterval(function(){
      time = $('#Moscow_z71d span:first-child').html();
      date = $('#Moscow_z71d span:last-child').html();


      let arrayOfTime = time.split(':');

      secsMsk = arrayOfTime[2]
      minsMSk = arrayOfTime[1]
      hoursMsk = arrayOfTime[0]

      
      let arrayOfDate = date.split('-');
      dayMsk = arrayOfDate[2]
      monthMsk = arrayOfDate[1]
      yearMsk = arrayOfDate[0]

  
      
      
      currentTime = new Date(dayMsk, monthMsk, yearMsk, hoursMsk, minsMSk, secsMsk, 0) // Время по Москве
      deadline = new Date(2023, 03, lastDay-1, 0, 0, 0, 0); // Время окончания скидки
      dayToday = dayMsk

      if(dayToday == lastDay) {
        isSail = false
        return false;
 
        
       
        
        

      } else if(dayToday < lastDay) {
        isSail = true;
        let timer = deadline - currentTime;
        
        // Перевод в часы, с учетом остатка деления на 24
        let toHours = (Math.floor(timer / 1000 / 60 / 60) % 48);
        // Перевод в минуты, с учетом остатка деления на 60
        let toMinutes = (Math.floor(timer / 1000 / 60) % 60);
        // Перевод в секунды, с учетом остатка деления на 60
        let toSeconds = (Math.floor(timer / 1000) % 60);   
        
        $('#timer').text(('00' + toHours).slice(-2) +":"+ ('00' + toMinutes).slice(-2) +":"+ ('00' + toSeconds).slice(-2))

    } else {
      lastDay +=2
    }
    },1000); 
  }, 1000);


});


// tg button
$(window).on('load resize', function() {
  if ($(this).width() < 577) {
      $('.tg-btn').html("<i class='icon-tg'></i>");
  } else {
    $('.tg-btn').html("Telegram chanel");
  }
});

// Offer video

const video = $('video')[0]
$('#offerVideoPlay').on('click', function() {
  
  if ( $('.video').hasClass('_playing')) {
    
    $('#offerVideoPlay').css('opacity', '1')
    $('.video').removeClass('_playing')
    video.pause();

    $('.video__btn').css('opaciy', '0')
  } else {
    $('#offerVideoPlay').css('opacity', '0')
    video.play();
    $('.video').addClass('_playing');

    $('.video__btn').css('display', 'block')
  }

  
});
  // Offer btn
$('.offer__btn').text('How it works?')
$('.offer__btn').ready(function() {
  $('#offer__btn').click(function() {
    $('html, body').animate({
      scrollTop: $('#advantages').offset().top
    }, 1000); // Change the duration (in milliseconds) as desired
  });
});
  


// Partners slider

const swiper = new Swiper('.sample-slider', {
  centeredSlides:true,
  infinite:true,
  width: 150,
  spaceBetween: 36,
    loop: true,
    speed: 6000,
    slidesPerView: 5,      
    autoplay: {
        delay: 0,
    },
})


// Team slider
$('.team-slider').slick({
  infinite: false,
  cssEase: 'linear',
  prevArrow: "<i id='btn' class='icon-arrow prev'></i>",
  nextArrow: "<i class='icon-arrow next'></i>",
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        arrows:false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 992,
      settings: {
        arrows:false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows:false,
        arrows:false,
        slidesToShow: 1,
        // centerMode:true,
        // infinite:true,
      }
    },
  ]
  
});

function jumpBack() {
  setTimeout(function() {
    $('.team-slider').slick("slickGoTo", 0);
  }, 0);
}


$('.team-slider').on('afterChange', function(event, slick,currentSlide) {
  console.log(currentSlide)
  if ( currentSlide=== 0) {
    $(".prev").prop('disabled', true).css('visibility', 'hidden');
  } else {
    $(".prev").prop('disabled', false).css('visibility', 'visible');
  }
  if ((currentSlide === 8 && $(window).width() > 769 &&  $(window).width() < 992)||  currentSlide === 6 ||  (currentSlide === 7 && $(window).width() > 992 &&  $(window).width() < 1250)) {
    $(".next").prop('disabled', true).css('visibility', 'hidden');
      jumpBack();
  }
  // else if(currentSlide === 9){
  //   setTimeout(function() {
  //     $('.team-slider').slick("slickGoTo", 0);
  //   }, 0);
  // }
  else{
    $(".next").prop('disabled', false).css('visibility', 'visible');
  }
});









// Students
$('.students-slider').slick({
  infinite:false,
  initialSlide: 1, // set starting slide index to 1 (second slide)
cssEase: 'linear',
// arrows:false,
prevArrow: "<i class='icon-arrow prev'></i>",
nextArrow: "<i class='icon-arrow next'></i>",

slidesToShow: 1,
slidesToScroll: 1,
responsive: [
  {
    breakpoint: 992,
    settings: {
      arrows: false,
      }
  }
],
});

$('.students-slider').on('afterChange', function(event, slick,currentSlide) {
  // Get the total number of slides
  
  console.log(currentSlide)
  if ( currentSlide=== 0) {
    $(".prev").prop('disabled', true).css('visibility', 'hidden');
  } else {
    $(".prev").prop('disabled', false).css('visibility', 'visible');
  }
  if (currentSlide === 2  ) {
    $(".next").prop('disabled', true).css('visibility', 'hidden');
  }
  else if(currentSlide === 9){
    setTimeout(function() {
      $('.team-slider').slick("slickGoTo", 0);
    }, 0);
  }
  else{
    $(".next").prop('disabled', false).css('visibility', 'visible');
  }
});




$('.student__btn').on('click', function(){
  if($(this).hasClass('student__btn_active')) {
    $(this).removeClass('student__btn_active')
    $(this).text('more')
    $(this).removeClass('student__btn_active')
    $(this).parent().removeClass('student__content_active')


  } else {
    $(this).addClass('student__btn_active')
    $(this).text('hide')
    $(this).parent().addClass('student__content_active')
  }
  
});

$(window).on('afterChange', function() {  
  if($('.student__btn').hasClass('student__btn_active')){
    $('.student__btn').removeClass('student__btn_active')
  $('.student__btn').text('read more')
  $('.student__btn').parent().removeClass('student__content_active')
  }
  // Remove the added classes from the elements when sliding the slider
  
})

$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.askbtn').css('transform', 'scale(0.7)');
  } else {
    $('.askbtn').css('transform', 'none');
  }
});



// Prices

// $('.tariffs').slick({
//   infinite: false,
//   cssEase: 'linear',
//   arrows:false,
//   // prevArrow: "<i id='btn' class='icon-arrow prev'></i>",
//   // nextArrow: "<i class='icon-arrow next'></i>",
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   responsive: [
//     // {
//     //   breakpoint: 992,
//     //   settings: {
//     //     slidesToShow: 2
//     //   }
//     // },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         // centerMode: true,
//         infinite:false,
 
//       }
//     },
//   ]
  
// });



$(".prices__tab-swither input").on("change", function(){
  if (($('input[name="prices-tabs"][value="2"]').is(":checked"))) {
    $('.tab-swither__bg').addClass('_bg_right')
    $('.tab-swither__bg').css('width', '180px')

    if($(window).width() < 769) {
      $('.tab-swither__bg').css('width', '75px')
      }
      $('.label_2').css('font-weight', '700')
      $('.label_1').css('font-weight', '400')
      $('#tariffs-standard').removeClass('_active');
      $('#tariffs-vip').addClass('_active');
    
      $('#tariffs-standard').fadeOut(100)
      $('#tariffs-vip').fadeIn(1000);
    } else {
      $('.tab-swither__bg').css('width', '225px')

      if($(window).width() < 769) {
        $('.tab-swither__bg').css('width', '110px')
      }
      $('.tab-swither__bg').removeClass('_bg_right')
      $('#tariffs-standard').addClass('_active')
      $('#tariffs-vip').removeClass('_active')
      $('.label_1').css('font-weight', '700')
      $('.label_2').css('font-weight', '400')
      $('#tariffs-standard').fadeIn(1000)
    $('#tariffs-vip').fadeOut(100);
    
    };
});
   

setInterval(function(){
    
  if(isSail) {
    $('.new-cost').css('display', 'inline')
    $('.cost').addClass('cost__cross')
  
    } else {
    
      $('.new-const').css('display', 'none')
      $('.cost').removeClass('cost__cross')
    }
}, 1000);


$(window).on('load', function() {

  if ($(window).width() < 767) {
    $('.label_1').text('Standard')
    
    $('.label_2').text('VIP')
  } else {
    $('.label_1').text('Standard packages')
    
    $('.label_2').text('VIP packages')
  }
});


$(window).on('load', function() {
    if ($(window).width() < 1150) {
      $('.prices__slider').slick({
        arrows: false,
        cssEase: 'ease',
        initialSlide: 1, // set starting slide index to 1 (second slide)
        slidesToShow: 3,
        infinite: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              infinite: false,
              slidesToScroll: 1,
 
            }
          }],
          });
    };
  
  
  });

setTimeout(function () {
  
  $('#tariffs-vip').delay(1000).fadeOut();
  $('input[name="prices-tabs"][value="1"]').trigger('click');
}, 2000)






// Reviews
if ($(window).width() < 768) {
  $('.cards_mob__slider').slick({
    centerMode: true,
    infinite: true,
    cssEase: 'ease',
    slidesToShow: 1,
  });
}

windowWidth = $(window).width()
$('#reviews__btn').on('click', function() {
  $('.layer0').css('transform', 'translateY(0)')
    setTimeout(function() {

      if($('#reviews__btn').hasClass('reviews__btn_active')) {
        $('#reviews__btn').text('look closer')
        $('#reviews__btn').removeClass('reviews__btn_active')
        

        if(windowWidth > 768) {
          $('.row_1').appendTo('.cards__row_1')
          $('.row_2').appendTo('.cards__row_2')
          $('.row_3').appendTo('.cards__row_3')
        } else {
          $('.cards_mob__slider').addClass('_d-none')
          $('.reviews__cards').removeClass('_d-none')
        }
          
  
      } else {
  
        
        
        $('#reviews__btn').addClass('reviews__btn_active')
  
        if(windowWidth > 768) {
          $('#reviews__btn').text('hide')
        $('.cards').addClass('cards_active')
        $('.review-card').appendTo('.cards__container')
        } else {
          $('#reviews__btn').text('back')
          $('.reviews__cards').addClass('_d-none')
          $('.cards_mob__slider').removeClass('_d-none')
        }
      } 
      $('.layer0').css('transform', 'translateY(100%)') 
    },1500);
    }),

    
   

  setTimeout(function () {
  
    $('.cards_mob__slider').delay(1000).addClass('_d-none');
  }, 2000)

$(window).on('load', function() {
  if ($(window).width() < 768) {
    
    $('#reviews__btn').on('click', function() {
      
      setTimeout(function(){
        
      }, 1000)
      
    });
      
    }
  });




  // ANIMATE 
 
    const animItems = document.querySelectorAll("._animate");

    function animate(){
      for (let index = 0; index < animItems.length; index++){
          if($(window).scrollTop() + $(window).height() > $(animItems[index]).offset().top + $(animItems[index]).height() / 2 
              & $(window).scrollTop() < $(animItems[index]).offset().top + $(animItems[index]).height() / 2){
              $(animItems[index]).addClass("_animate-Active");
          } else {
              if($(animItems[index]).hasClass("_anim-no-hide") !== true){$(animItems[index]).removeClass("_animate-Active");}
          };
        };
      
      };
    
    animate();
    $(window).on("scroll", function() {
      animate()
    });
