
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
    this.title = title;
  };
  
    this.setAuthor = function(author) {
    this.author = author;
  };
  
  this.setEdition = function(edition) {
    this.edition = edition;
  };
  
  this.setIsbn = function(isbn){
    this.isbn = isbn;
  };
  
  this.setCategory = function(category) {
    this.category = category;
  };
  
  this.setStatus = function(status) {
    this.status = status;
  };
  
  this.setCondition = function(condition){
    this.condition = condition;
  };
  
  this.setDescription = function(description){
    this.description = description;
  };
  
  
  
  };
module.exports = {
  create: function() {
    return new Book();
  }
  };



