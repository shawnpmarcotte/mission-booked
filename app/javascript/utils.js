const autoComplete = function($field) {
  if (!($field instanceof $)) {
    $field = $($field);
  }
  $field
    .autocomplete({
      source: $field.data("values"),
      minLength: 0,
      select: function(_e, ui) {
        $field.val(ui.item.label);
        $field.trigger("change");
      }
    })
    .focus(function() {
      $(this)
        .data("uiAutocomplete")
        .search($(this).val());
    });
};
