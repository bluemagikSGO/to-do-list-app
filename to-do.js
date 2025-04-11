$('.btn').click(function () {
  let input = $('#task-input');
  let inputValue = input.val()
  let li = $("<li>");
  li.text(inputValue);
  li.css('font-size','20px')

  if (input.val() === "") return;

  const deleteBtn = $("<button>");
  deleteBtn.text("X");
  deleteBtn.css('marginLeft', "90px").css('marginTop', "5px");
  deleteBtn.click(function () {
    li.hide();
  });

  const checkbox = $('<input type="checkbox">');
  checkbox.css('marginRight', "10px");
  checkbox.change(function() {
    if (this.checked) {
      li.css('font-size', '25px').css('color','green'); 
    } else{
      li.css('font-size', '20px').css('color','black');
    }
  });

  // Append the checkbox and delete button to the list item
  li.prepend(checkbox).append(deleteBtn); // Prepend checkbox to put it at the beginning
  $('#result').append(li);
  li.css('listStyle', "none").css('marginTop',"5px");
  input.val("");
}
);