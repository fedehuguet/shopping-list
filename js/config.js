$(document).ready(function(){

    $('#btnAdd').on('click',function(e){
        e.preventDefault();
        var item_name = $('#item-name').val();
        $('#item-name').val('');
        var strItem = "<li style='margin:10px;'><div style='border: 1px solid gray; padding:20px;'>" 
        + "<div style='padding-botom:20px;'>" + item_name + "</div>"
        +"<button type='submit' class='btnCheck confirm'>Check</button>"
        +"<button type='submit' class='btnDelete cancel'>Delete</button>"
        +"</div></li>";
        $('#item-list').append(strItem);
    });
  
  });
$(document).on("click", ".btnCheck", function() {
    var item = $(this).closest('li');
    if($(item).css('text-decoration') == 'none solid rgb(0, 0, 0)')
        $(item).css('text-decoration', 'line-through');
    else $(item).css('text-decoration', 'none');
});
$(document).on("click", ".btnDelete", function() {
    $(this).closest('li').remove();
});