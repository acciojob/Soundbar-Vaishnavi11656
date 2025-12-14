//your JS code here. If required.

const sounds = ["applause","boo","gasp","tada","victory","wrong","stop"];
const tempDom = document.createDocumentFragment();
const container = document.querySelector(".container");

for(let i = 0; i<sounds.length;i++){
	createButton(sounds[i]);
}
container.appendChild(tempDom)

function createButton(btnName) {
	const btn = document.createElement("button")
	btn.innerText = btnName;
	btn.id = btnName;
	// btn.className = "btn"
	if(btnName == "stop"){
		btn.className = "stop"
		btn.addEventListener("click",stopAudio)
	}else{
		btn.className = "btn"
		btn.addEventListener("click",() => playsound(btn))
	}

	tempDom.appendChild(btn)
}

let playlist = {}

function playsound(btn){
	if(btn.id == "stop") return;
	stopAudio();

	 const audio = new Audio(`sounds/${btn.id}.mp3`)

	playlist[btn.id] = audio

	audio.play()

	console.log(audio,'trying to create audio tag');
}

function stopAudio(){
	for(let key in playlist){
		
		// console.log(playlist[key])
		const audio = playlist[key];
		if(audio){
			audio.pause();
			audio.currentTime = 0;
		}
		
	}
}