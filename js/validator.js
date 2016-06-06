function dateValidator(date) {
    var date_format = /^(0\d{1}|[12]\d{1}|3[01])-(0\d{1}|1[0-2])-(\d{4})$/;
    return date_format.test(date);
}