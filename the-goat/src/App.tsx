import { useState } from "react";
import "./App.css";
import GoatAudio from "./GoatAudio.tsx";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface Props {
  remainingTime: number;
}

const convertToSeconds = (hours: number, minutes: number, seconds: number) => {
  return hours * 3600 + minutes * 60 + seconds;
};

const renderTime = ({ remainingTime }: Props) => {
  if (remainingTime === 0) {
    return <GoatAudio />;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function App() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerDuration, setTimerDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStartTimer = () => {
    const totalSeconds = convertToSeconds(hours, minutes, seconds);
    setTimerDuration(totalSeconds);
    setIsPlaying(true);
  };

  return (
    <>
      <input
        type="number"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        placeholder="Hours"
      />
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(Number(e.target.value))}
        placeholder="Minutes"
      />
      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))}
        placeholder="Seconds"
      />

      <button onClick={handleStartTimer}>Start Timer</button>

      {timerDuration > 0 && isPlaying && (
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={timerDuration}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[timerDuration, timerDuration - 2, timerDuration - 5, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
    </>
  );
}

export default App;
