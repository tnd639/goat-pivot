import sound from "./assets/goat-sounds.mp3";
import { useEffect } from "react";

function GoatAudio() {
  let goatAudio = new Audio(sound);
  goatAudio.play();

  return null;
}

export default GoatAudio;
