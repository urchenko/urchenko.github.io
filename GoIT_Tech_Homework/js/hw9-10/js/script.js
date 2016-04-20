$(function() {
/*-----jCarousel-----*/
  $('.jcarousel').jcarousel({
    wrap: 'circular'
  })
  .jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
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
  $('.jcarousel-pagination')
  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
  .on('click', function(e) {
      e.preventDefault();
  })
  .jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

  $('.jcarousel')
  .on('jcarousel:create jcarousel:reload', function() {
    var element = $(this),
    width = element.innerWidth();
    element.jcarousel('items').css('width', width + 'px');
  })
  .jcarousel({  });

/*------Select-------*/
  $("#country_id").selectbox();

/*------dropdown menu jQuery------*/
  $( '.dropdown' ).hover(
    function(){
      $(this).children('.submenu').slideDown(300, function () {
        $(this).animate({
          backgroundColor: 'rgb(255,75,75)'
        }, 400);
      });
    },
    function(){
      $(this).children('.submenu').slideUp(300, function () {
        $(this).animate({
          backgroundColor: 'rgb(255,100,100)'
        }, 400);
      });
    }
  );

});

/*------Checkbox-----*/
var $jq132 = jQuery.noConflict(true);

(function($) {
  // use jQuery 1.3.2
  $jq132(document).ready(function(){

    $jq132(".niceCheck").each(
    /* при загрузке страницы меняем обычные на стильные checkbox */
      function() {

        changeCheckStart($jq132(this));

    });

});


function changeCheck(el)
/* 
  функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, который отвечает за новый вид)
  el - span контейнер для обычного чекбокса
  input - чекбокс
*/
{

  var el = el,
    input = el.find("input").eq(0);

  if(el.attr("class").indexOf("niceCheckDisabled")==-1)
  { 
      if(!input.attr("checked")) {
      el.addClass("niceChecked");
      input.attr("checked", true);
    } else {
      el.removeClass("niceChecked");
      input.attr("checked", false).focus();
    }
  }

    return true;
}

function changeVisualCheck(input)
{
/*
  меняем вид чекбокса при смене значения
*/
var wrapInput = input.parent();
  if(!input.attr("checked")) {
    wrapInput.removeClass("niceChecked");
  }
  else
  {
    wrapInput.addClass("niceChecked");
  }
}

function changeCheckStart(el)
/* 
  новый чекбокс выглядит так <span class="niceCheck"><input type="checkbox" name="[name check]" id="[id check]" [checked="checked"] /></span>
  новый чекбокс получает теже name, id и другие атрибуты что и были у обычного
*/
{

try
{
var el = el,
  checkName = el.attr("name"),
  checkId = el.attr("id"),
  checkChecked = el.attr("checked"),
  checkDisabled = el.attr("disabled"),
  checkTab = el.attr("tabindex"),
    checkValue = el.attr("value");
  if(checkChecked)
    el.after("<span class='niceCheck niceChecked'>"+
      "<input type='checkbox'"+
      "name='"+checkName+"'"+
      "id='"+checkId+"'"+
      "checked='"+checkChecked+"'"+
            "value='"+checkValue+"'"+
      "tabindex='"+checkTab+"' /></span>");
  else
    el.after("<span class='niceCheck'>"+
      "<input type='checkbox'"+
      "name='"+checkName+"'"+
      "id='"+checkId+"'"+
             "value='"+checkValue+"'"+
      "tabindex='"+checkTab+"' /></span>");

  /* если checkbox disabled - добавляем соотвсмтвующи класс для нужного вида и добавляем атрибут disabled для вложенного chekcbox */    
  if(checkDisabled)
  {
    el.next().addClass("niceCheckDisabled");
    el.next().find("input").eq(0).attr("disabled","disabled");
  }

  /* цепляем обработчики стилизированным checkbox */    
  el.next().bind("mousedown", function(e) { changeCheck($jq132(this)) });
  el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck($jq132(this)) });
  if($jq132.browser.msie)
  {
    el.next().find("input").eq(0).bind("click", function(e) { changeVisualCheck($jq132(this)) }); 
  }
  el.remove();
}
catch(e)
{
  // если ошибка, ничего не делаем
}

    return true;
}

}($jq132));