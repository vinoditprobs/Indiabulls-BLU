$(function () {

  var indiaBullspage = new fullpage('#IndiabullsBLU', {
    scrollOverflow: true,
    scrollingSpeed: 1400,
    offsetSections: true,
    normalScrollElements: '.menu, .menu nav, .content_grid, .section_details',
    fixedElements: '.navigation_bar, .section_title_component .next_section_cta.fixed, .grid_area_img_left, .footer_band, .loader',
    sectionSelector: '.section_component',
    slideSelector: '.slide_component',
    //  slidesNavigation: true,
    lazyLoading: true,
    css3: true,
    licenseKey: 'E1851CCE-D35340C1-A6FD3C81-D6C2F972',
    onLeave: function (origin, destination, direction) {

      $('.section_component.active').addClass('prev_active');

      /*Section_video_Pause*/
      /*      function ifSectionVidFindENd() {
              var secVidPause = $('.section_component.active').find('video').get(0).pause();
              secVidPause.get(0).pause();
              return secVidPause;
            }
      		ifSectionVidFindENd();*/

      /*Section_video_Pause*/

      /* $('.section_title').slideUp();
	  setTimeout(function () {
		  var myEm = $('.title_component.active').attr('data-section_title');
		  $('.section_title[data-section_title = ' + myEm + ']').slideDown();
	  }, 600);*/
    },

    afterLoad: function (origin, destination, direction) {
      if ($(".slider_section_component").hasClass("active")) {
        slideTimeout = setInterval(function (event) {
          indiaBullspage.moveSlideRight();
        }, 6000);

        $('.fp-controlArrow').click(function () {
          //console.log(slideTimeout);
          clearInterval(slideTimeout);
        });
      }


      $('.section_component.active').addClass('active_anim');
      $('.section_component').removeClass('prev_active');

      /*Section_video_Play*/
      $('.section_component.active').find('.video_toggle').removeClass('pause');
      $('.section_component.active').find('.video_toggle').addClass('play');

      /*function ifSectionVidFindPlay() {
        var secVidPlay = $('.section_component.active').find('video')
		alert();
        secVidPlay.get(0).play();
        return secVidPlay;
      }*/
      //ifSectionVidFindPlay();

      //$('.section_component.active').find('video').get(0).pause()

      setTimeout(function () {
        //alert();
        $('.section_component.active').find('video').get(0).load()
        $('.section_component.active').find('video').get(0).play()

      }, 3000);

      /*Section_video_Play*/

      // indiaBullspage.setRecordHistory(true);

      if ($(".section_end").hasClass("active")) {
        $('.next_section_cta').addClass('go_up');
        $('.next_section_cta').removeClass('go_down');
      }

      if ($(".section_start").hasClass("active")) {
        $('.next_section_cta').removeClass('go_up');
        $('.next_section_cta').addClass('go_down');
      }
    },

  });

  //
  $('.hamburger').on('click', function () {
    $('body').toggleClass('open_menu');
    $('.overlay').fadeToggle('slow');


    if ($('body').hasClass('open_menu')) {
      //   alert();
      indiaBullspage.setAllowScrolling(false)

    } else {

      indiaBullspage.setAllowScrolling(true)
    }

  });

  $('.overlay, .menu_title').on('click', function () {
    $('body').removeClass('open_menu');
    $('.overlay').fadeOut('slow');
    indiaBullspage.setAllowScrolling(true)
  });

  $('.next_section_cta').click(function () {


    if ($(this).hasClass('go_down')) {

      indiaBullspage.moveSectionDown();

    } else {

      indiaBullspage.moveSectionUp();
    }
  });

  $('.video_toggle').click(function () {
    if ($(this).hasClass('play')) {
      $(this).removeClass("play");
      $(this).addClass("pause");
      $('.section_component.active').find('video').get(0).pause();
    } else {
      //console.log("playing");
      $(this).removeClass("pause");
      $(this).addClass("play");
      $('.section_component.active').find('video').get(0).play();
    }
  });

  $('.accord_title').on('click', function () {
    $('.accord_content').slideUp();
    $('.accord_title').removeClass('active');
    $(this).addClass('active');
    $(this).siblings('.accord_content').slideDown();
  });

  if ($('body').hasClass('homepage')) {
    $(".homepage").addClass("active");
  }

});
