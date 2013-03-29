$(document).ready(function(){
  $('.loader').hide();

// Drag and Drop
  function handleFileSelect(e) {
      e.stopPropagation();
      e.preventDefault();

      var files = e.dataTransfer.files; // FileList object.
      // files is a FileList of File objects. List some properties.
      var output = [];
      for (var i = 0, f; f = files[i]; i++) {
        
        output.push(
          '<li id="main"><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                    f.size, ' bytes',
                    '</li>'
                    );
      }
      document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';

      $('#drop_zone').removeClass('over');

  // File Upload

    var data = files

    // $('form').submit(function(e){
    //   e.preventDefault();
    //   console.log(data);
    //   $.ajax({
    //     url: '/',
    //     method: 'post',
    //     data: {photo: files}
    //   }).done(function(){
    //     $('.loader').show();
    //     $('#drop_zone').css("opacity", '0.3');
    //   }).fail(function(){
    //     console.log("FAIL");
    //   })
    // });

  }

  function handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function handleDragEnter(e) {
  this.classList.add('over');
  }

  function handleDragLeave(e) {
  this.classList.remove('over');
  }
  
  function handleDragEnd(e) {
  $('#drop_zone').removeClass('over');
  }

  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('drop', handleFileSelect, false);
  dropZone.addEventListener('dragenter', handleDragEnter, false);
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('dragleave', handleDragEnd, false);
  dropZone.addEventListener('dropon', handleDragEnd, false);

});
