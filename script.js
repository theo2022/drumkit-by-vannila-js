function playsound(e){
  const audio= document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key= document.querySelector(`.key[data-key="${e.keyCode}"]`)
 

 if(!audio)return;  
 audio.currentTime=0;//rewind the audio
   
    audio.play();
    key.classList.add("playing");//play the audio
  }


function removetransttion(e){
if(e.propertyName !== "transform")return; //skip it its not a transform
this.classList.remove("playing");
}
const keys= document.querySelectorAll(".key");
window.addEventListener("keydown",playsound);
keys.forEach(keys=>keys.addEventListener("transitionend",removetransttion));

