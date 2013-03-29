$(document).ready(function(){

  function handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();

      var files = evt.dataTransfer.files; // FileList object.

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
    }

  function handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  function handleDragEnter(e) {
  // this / e.target is the current hover target.
  this.classList.add('over');
  }

  function handleDragLeave(e) {
  this.classList.remove('over');  // this / e.target is previous target element.
  }
  
  function handleDragEnd(e) {
  // this/e.target is the source node.
  $('#drop_zone').removeClass('over');
  }

  var dropZone = document.getElementById('drop_zone');
  dropZone.addEventListener('drop', handleFileSelect, false);
  dropZone.addEventListener('dragenter', handleDragEnter, false);
  dropZone.addEventListener('dragover', handleDragOver, false);
  dropZone.addEventListener('dragleave', handleDragEnd, false);
  dropZone.addEventListener('dropon', handleDragEnd, false);

});
