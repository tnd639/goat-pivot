import Button from "./Button";
import sound from "./assets/goat-sounds.mp3";

function GoatAudio() {
  let goatAudio = new Audio(sound);
  return <Button onClick={() => goatAudio.play()}>Button</Button>;
}

export default GoatAudio;
