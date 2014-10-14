
'use strict';

function Book(title,author,edition,isbn,category, status,condition,description){
  this.title=title;
  this.author=author;
  this.edition=edition;
  this.isbn=isbn;
  this.category=category || "general";
  this.status=status;
  this.condition=condition;
  this.description=description || "";
  
   this.getTitle = function() {
    return this.title;
  };
  
  this.getAuthor = function() {
    return this.author;
  };
  
  this.getEdition = function() {
    return this.edition;
  };
  
  this.getIsbn = function(){
    return this.isbn;
  };
  
  this.getCategory = function() {
    return this.category;
  };
 
  this.getStatus = function() {
    return this.status;
  };
  
  this.getCondition = function(){
    return this.condition;
  };
  
  this.getDescription = function(){
    return this.descrption;
  };
  
 
   this.setTitle = function(title) {
    return this.title;
  };
  
    this.getAuthor = function() {
    return this.author;
  };
  
  this.getEdition = function() {
    return this.edition;
  };
  
  this.setIsbn = function(isbn){
    this.isbn = isbn;
  };
  
  this.setCategory = function(category) {
    return this.category;
  };
  
  this.getStatus = function() {
    return this.status;
  };
  
  this.getCondition = function(){
    return this.condition;
  };
  
  this.getDescription = function(){
    return this.descrption;
  };
  
  
  
  };
module.exports = {
  create: function() {
    return new Book();
  }
  };



