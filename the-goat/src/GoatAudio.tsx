import sound from "./assets/goat-sounds.mp3";

function GoatAudio() {
  let goatAudio = new Audio(sound);
  goatAudio.play();

  return null;
}

export default GoatAudio;
