document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');


  });
function toggleModal(){
    var instances = M.Modal.init(elems, options);
    instances.open();
}
