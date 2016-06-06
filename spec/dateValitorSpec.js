describe('Date Format Validate', function(){
    var dateValidator = require('../js/validator.js');

   it('Should be valid when date is 01-12-2015', function(){
       expect(dateValidator('01-12-2015')).toBeTruthy();
   });

    it('Should be invalid when date is 01-13-2015', function(){
        expect(dateValidator('01-13-2015')).toBeFalsy();
    });

    it('Should be valid when date is 01-00-2015', function(){
        expect(dateValidator('01-00-2015')).toBeFalsy();
    });

    it('Should be valid when date is 00-12-2015', function(){
        expect(dateValidator('00-12-2015')).toBeFalsy();
    });

    it('Should be valid when date is 32-12-2015', function(){
        expect(dateValidator('32-12-2015')).toBeFalsy();
    });

    it('Should be valid when date is 1q-12-2015', function(){
        expect(dateValidator('1q-12-2015')).toBeFalsy();
    });
});