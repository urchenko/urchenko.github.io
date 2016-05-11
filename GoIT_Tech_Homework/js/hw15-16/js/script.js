  $(function() {
    'use strict';
    var searchData;
    var html;
    var content;

    $('.b_searchboxSubmit').click( function (e) {
      e.preventDefault();
      var serchVal = $('.b_searchbox').val();
      request(serchVal);
    });


    Worker.prototype = new Human();
    Student.prototype = new Human();

    var newWorker = new Worker();
    var newStudent = new Student();
    var newWorker1 = new Worker();
    var newStudent1 = new Student();

    console.log(newWorker);
    console.log(newStudent);
    console.log('age: ',newWorker1.age);
    console.log('name: ',newStudent1.name);
  });

  function request(serch) {
    var params = {
      // Request parameters
      q: serch,
      count: "10",
      offset: "0",
      mkt: "en-us",
      safesearch: "Moderate"
    };

    $.ajax({
      url: "https://bingapis.azure-api.net/api/v5/search/?" + $.param(params),
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","75a3172f29674920af1bea85d3f93900");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
      searchData = data.webPages;
      html = $('.block-content').html();
      content = tmpl(html, searchData);

      $('#b_content').remove();
      $('body').append(content);
    })
    .fail(function() {
      alert("Error, try again please!");
    });
  }

  function Human () {
    this.name = 'Vasya';
    this.age = '22';
    this.sex = 'male';
    this.growth = '186cm';
    this.weight = '86kg';
  }
  function Worker () {
    this.workingPlace = 'Microsoft';
    this.salary = '3000$';
    this.toWork = function () {
      console.log('Let`s work!');
    };
  }
  function Student () {
    this.studyPlace = 'KNU';
    this.scholarship = '100$';
    this.toWatch = function () {
      console.log('Let`s watch!');
    };
  }