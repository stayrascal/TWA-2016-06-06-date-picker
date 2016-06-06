$(function () {

    $( "#date" ).datepicker({"dateFormat":"dd-mm-yy" });

    $('#validate-date').click(validateDate);
});

function validateDate(){
    var date = $('#date');
    var errorMessage = $('.error-message');
    if (!dateValidator(date.val().trim())){
        errorMessage.removeClass('hidden');
        date.removeClass('date-green');
    }else {
        errorMessage.addClass('hidden');
        date.addClass('date-green');

    }
}