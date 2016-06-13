$(function() {
/*-----jCarousel-----*/
  var $jcarousel = $('.jcarousel');

  $jcarousel.jcarousel({
    wrap: 'circular'
  })
  .on('jcarousel:create jcarousel:reload', function() {
    var element = $(this),
      width = element.innerWidth();
      element.jcarousel('items').css('width', width + 'px');
    })
  .jcarousel({  });
  $('.jcarousel-prev').jcarouselControl({
    target: '-=1'
  });
  $('.jcarousel-next').jcarouselControl({
    target: '+=1'
  });

  $jcarousel
  .on('jcarousel:create jcarousel:reload', function() {
    var element = $(this),
    width = element.innerWidth();
    element.jcarousel('items').css('width', width + 'px');
  })
  .jcarousel({  });
/*galery*/
    var serchVal = 'holiday interests';
    var html;
    var content;

    request(serchVal);

    $('.gallery__form').submit( function (e) {
      e.preventDefault();
      serchVal = $.trim( $('.gallery__input').val() );
      if (!serchVal) {
        alert('empty request');
      }
      else {
        request(serchVal);
      }
    });

    function request(serchVal) {
    var API_KEY = '2738550-47a27c5290a83d0f1fa92834d';
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(serchVal) + "&order=latest&image_type=photo&callback=?";
    $.getJSON(URL, function(data) {
      if (parseInt(data.totalHits) > 6) {
        html = $('.template').html();
        content = tmpl(html, data);
        $('.gallery__pictures').empty().append(content);
        $('.grid').masonry({
          itemSelector: '.grid__item',
        });
      }
      else
        alert('No hits:( Enter smthng else...');
    }).error(function (jqXHR, textStatus, errorThrown) {
      alert(errorThrown);
    });
  }

});