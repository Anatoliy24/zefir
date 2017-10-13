/**
 * Created by v on 09.04.2017.
 */
jQuery(document).ready(function ($) {
  $('.slide').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  });

  // Scroll navigation
  $('.top a, .sidebar-link_mobile').on('click', '', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1000);
  });



  $('.logo').on('click', '', function (event) {
    event.preventDefault();

    $('body,html').animate({scrollTop: 0}, 1000);
  });

  $('.play').on('click', '', function (event) {
    event.preventDefault();

    var modal = $(this).data("target"),
      videoSRC = $(this).attr("href");

      //videoSRC += videoSRC.indexOf('?')===-1 ?  '?' : '&';

    var videoSRCauto = videoSRC + "modestbranding=1&rel=0&controls=1&showinfo=0&html5=1&autoplay=1";

    //$(modal).find('iframe').attr('src', videoSRCauto);
    //$(modal).find('video').attr('src', videoSRC);
    var video = document.getElementById("video-file");
    if (video.paused) {
      video.play();
    }

  });

  $('#youtube').on('hide.bs.modal','',function(event) {
    //$(this).find('iframe').attr('src', '');
    var video = document.getElementById("video-file");
    if (video.played) {
      video.pause();
    }
    //$('#video-file').stop();
    //$(this).find('video').stop();
  });

  $('form').on('submit','',function(event) {
    event.preventDefault();

    var validate = true,
      form = $(this),
      inputs = form.find('input'),
      type = typeof form.attr('method') !== 'undefined' && form.attr('method')!='' ? form.attr('method') : 'post';

    $.each(inputs,function() {
      if(typeof $(this).val() === 'undefined' || $(this).val()==''){
        validate = false;
        $(this).parents('.input-group').addClass('no-valid');
      }
      else
      {
        $(this).parents('.input-group').removeClass('no-valid');
      }
    });
    if(validate) {
      $.ajax({
        url: form.attr('action'),
        type: type,
        data: form.serialize(),
        //dataType: 'json',
        success: function(res){
          alert('Спасибо');
        }
      });
    }

  });


  $(".header__mobile-icon").on('click', function () {       // Функция для отображения/скрытия,  по клику на иконку, выпадающего меню (мобильная версия)
      $(".sidebar_mobile").toggleClass("sidebar_mobile_active");          // изменить класс, и меняем его при кликена противоположный
    }
  );
  $(".sidebar__list-item_mobile").on('click', function () {       // Функция для отображения/скрытия,  по клику на иконку, выпадающего меню (мобильная версия)
      $(".sidebar_mobile").removeClass("sidebar_mobile_active");          // изменить класс, и меняем его при кликена противоположный
    }
  );



});

