define(
  'controller',
  [
    'jquery',
    'tmpl',
    'model',
    'view'
  ],
  function () {
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

    return Controller;
  }
);