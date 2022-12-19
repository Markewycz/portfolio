const mask = document.getElementById('mask');
const photoMe = document.getElementById('photo-of-me');


function hideMask() {
  mask.style.removeProperty('filter');
  mask.style.removeProperty('-moz-filter');
  mask.style.removeProperty('-webkit-filter');
  photoMe.style.removeProperty("opacity");
}
