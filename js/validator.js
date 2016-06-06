function dateValidator(date) {
    var date_format = /^(0[1-9]{1}|[12]{1}|3[01])-(0[1-9]\d{1}|1[0-2])-(\d{4})$/;
    return date_format.test(date);
}

module.exports = dateValidator;