const navigation = document.querySelector('.navigation');

document.querySelector('.toggle').ondblclick = function() {
  // on double click = ondblclick;
  this.classList.toggle('active');
  navigation.classList.toggle('active');
}

$( function() {
  $( ".navigation" ).draggable();
} );