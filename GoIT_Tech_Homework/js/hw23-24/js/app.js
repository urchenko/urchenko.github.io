requirejs.config({
  paths: {
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery'
  },
  shim: {
    'jquery': {
      exports: 'jQuery',
    }
  }
})
require(
    [
      'jquery',
      'tmpl',
      'model',
      'view',
      'controller'
    ],
    function ($, tmpl, Model, View, Controller) {
        var firstToDoList = ['homework 24', 'finalExam', 'findJob'];
        var model = new Model(firstToDoList);
        var view = new View(model);
        var controller = new Controller(model, view);
    }
  );