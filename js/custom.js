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
      placeholder: 'Describe your question in more details...',
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
  
  
  //-- Lightbox Gallery
  if ($('.lightbox-gallery').length != 0)
  { 
    $('.lightbox-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });
  }
  
  
  //-- Resources list / tiles view
  $('.btn-list').on('click', function(e){
    e.preventDefault();
    
    $('.feed--resources').removeClass('tileview');
    $('.btn-tiles').removeClass('active');
    $(this).addClass('active');
  });
  
  $('.btn-tiles').on('click', function(e){
    e.preventDefault();
    
    $('.feed--resources').addClass('tileview');
    $('.btn-list').removeClass('active');
    $(this).addClass('active');
  });
  

  
});