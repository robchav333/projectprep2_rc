const button1 =document.getElementById('button1');
let audio1 = new Audio();
audio1.src = 'CHANT.wav'

button1.addEventListener('click', function(){
  audio1.play();

})

const button2 =document.getElementById('button2');
let audio2 = new Audio();
audio2.src = 'sample.wav  '

button2.addEventListener('click', function(){
  audio2.play();

})
