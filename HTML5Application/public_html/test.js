var bookModel = require('./book');
var assert = require('chai').assert;


describe('book tests', function () {
  describe('t tests', function () {
      var book=bookModel.create();
     book.title="pepe";
     book.isbn=123456;
     book.condition="regalar";
     
      
      it(' should  getCategory', function() {
       assert.equal(book.getCategory(), "general");
   
      });
      it(' should  getTitle', function() {
       assert.equal(book.getTitle(), "pepe");
   
      });
      it(' should  isbn', function() {
       assert.equal(book.getIsbn(), 123456);
   
      });
       it(' should  contition', function() {
       assert.equal(book.getCondition(), "regalar");
   
      });
      it(' should  compareContition', function() {
       assert.equal(book.compareCondition(), 0);
   
      });
     

    
  });
});


