const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  var i = 0;
}
var body = document.querySelector('body');
body.addEventListener('keydown', function(e){
const key = e.key;
if (key === codes[i]){
  i++;
  if (i === codes.length){
    alert('me');
  }
}
else{
 // alert('anything')
  init()
}
})




 
