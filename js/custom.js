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


  if ($('.editor').length != 0)
  {
    var richeditor = new Quill('#editor', {
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
  
});