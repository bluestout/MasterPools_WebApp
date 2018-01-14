// JavaScript Document
$(document).ready(function($) {
  
  //-- Search
  $('.btn-search').on('click', function(e){
    e.preventDefault();

    $('body').addClass('showsearch'); 
    
    setTimeout(function(){
      $('.from--search').focus();
    }, 300);
  });
  
  $('.btn-close-search, .overlay').on('click', function(e){
    e.preventDefault();

    $('body').removeClass('showsearch'); 
  });


  //-- Initialize New Question editor
  if ($('.editor--newquestion').length != 0)
  {
    var richeditor = new Quill('#editor-newquestion', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'image']
        ]
      },
      placeholder: 'Start typing your question...',
      theme: 'snow'
    });
  }
  
  //-- Initialize Article answer editor
  if ($('.editor--answer').length != 0)
  {
    var richeditor = new Quill('#editor-answer', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['link', 'image']
        ]
      },
      placeholder: 'Start typing your reply...',
      theme: 'snow'
    });
  }
  
  
  //-- Open Answer editor
  $('.btn-writearticleanswer').on('click', function(e){
    e.preventDefault();

    $('.editor-container--article').slideDown();
    smoothScroll($('.editor-container--article'));
    
  });
  
  
  //-- Smooth scroll
    function smoothScroll(target) 
  {
    if (target.length) {
      $('.page-content').animate({
        scrollTop: target.offset().top + $('.page-content').scrollTop() - $('.page-header').height()
      }, 1000);
      return false;
    }
  }
  
  
  //-- Smooth scroll for .smooth class
  $(function() {
    $('.smooth').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('.page-content').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  
});