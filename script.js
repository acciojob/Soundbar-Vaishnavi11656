//your JS code here. If required.

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong", "stop"];
const container = document.querySelector(".container");

// Loop through the array to create Audio tags and Buttons
sounds.forEach(sound => {
    // 1. Create the <audio> tag (for everything except the 'stop' button)
    // This fixes the Cypress error: "Expected to find element: audio"
    if(sound !== "stop") {
        const audio = document.createElement("audio");
        audio.src = `sounds/${sound}.mp3`;
        audio.id = sound; // We will use this ID to find it later
        document.body.appendChild(audio);
    }

    // 2. Create the Button
    const btn = document.createElement("button");
    btn.classList.add("btn");
    btn.innerText = sound;

    // 3. Add Event Listeners
    if (sound === "stop") {
        btn.classList.add("stop"); // Add specific class for styling
        btn.addEventListener("click", stopSongs);
    } else {
        btn.addEventListener("click", () => {
            stopSongs(); // Stop others first
            document.getElementById(sound).play(); // Play the specific audio tag
        });
    }

    // 4. Add button to the container
    container.appendChild(btn);
});

function stopSongs() {
    sounds.forEach(sound => {
        // Skip the "stop" string, only look for audio elements
        if (sound !== "stop") {
            const song = document.getElementById(sound);
            // Pause and reset time
            song.pause();
            song.currentTime = 0;
        }
    });
}