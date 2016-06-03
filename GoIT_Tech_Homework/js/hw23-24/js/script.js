'use strict';

function Model (data) {
  var self = this;

  self.data = data;

  self.addItem = function (item) {
    if (item.length === 0) {
      return;
    }

    self.data.push(item);

    return self.data;
  };

  self.removeItem = function (item) {
    var index = self.data.indexOf(item);

    if (index === -1) {
      return;
    }

    self.data.splice(index, 1);

    return self.data;
  };

  self.editItem = function(index, editedItem) {
    self.data[index] = editedItem;

    if (editedItem.length === 0){
        return self.data.splice(index, 1);
    }
    if (editedItem.indexOf(' ') === 0) {
        return self.data.splice(index, 1);
    }

    return self.data;
  };
}

function View (model) {
  var self = this;

  function init () {
    var wrapper = tmpl($('#wrapper-template').html());

    $('body').append(wrapper);
    self.elements = {
      input: $('.item-value'),
      addBtn: $('.item-add'),
      listContainer : $('.item-list')
    };
    self.renderList(model.data);
  }


  self.renderList = function (data) {
    var list = tmpl($('#list-template').html(), {data: data});
    self.elements.listContainer.html(list);
  };

  init();
}

function Controller (model, view) {
  var self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.input.on('keydown', function (e) {
    if (e.which == 13) {
      addItem();
    }
  });
  view.elements.listContainer.on('click', '.item-delete', removeItem);
  view.elements.listContainer.on('dblclick', '.item-label', editItem);

  function addItem () {
    var newItem = view.elements.input.val();

    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  }

  function removeItem () {
    var item = $(this).attr('data-value');

    model.removeItem(item);
    view.renderList(model.data);
  }

  function editItem (e) {
    var target = $(event.target);
    var value = $(this).text();
    var newItemValue = $(this).siblings('.item-new-value');
    var itemText = newItemValue.val(value);
    var index = model.data.indexOf(target.attr('data-value'));

    newItemValue.focus();
    target.parent().addClass('editing');

    newItemValue.on('keydown', function (e) {
      var editedItem = itemText.val();

      if (e.which == 13) {
        model.editItem(index, editedItem);
        view.renderList(model.data);
        target.parent().removeClass('editing');
      }
    });

    newItemValue.blur( function (e) {
      var editedItem = itemText.val();

      model.editItem(index, editedItem);
      view.renderList(model.data);
      target.parent().removeClass('editing');
    });
  }

}

$(function () {
  var firstToDoList = ['homework 24', 'finalExam', 'findJob'];
  var model = new Model(firstToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);
});