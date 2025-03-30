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
      <div style={{ margin: "auto" }}>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
          style={{
            backgroundColor: "transparent",
            border: "2px solid black",
            marginTop: "50px",
            marginRight: "20px",
            textAlign: "center",
            color: "black",
            width: "100px",
            fontSize: "50px",
            borderRadius: "10px",
            paddingBottom: "5px",
            paddingTop: "5px",
          }}
        />
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          style={{
            backgroundColor: "transparent",
            border: "2px solid black",
            marginRight: "20px",
            textAlign: "center",
            color: "black",
            width: "100px",
            fontSize: "50px",
            borderRadius: "10px",
            paddingBottom: "5px",
            paddingTop: "5px",
          }}
        />
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
          style={{
            backgroundColor: "transparent",
            border: "2px solid black",
            textAlign: "center",
            width: "100px",
            color: "black",
            fontSize: "50px",
            borderRadius: "10px",
            paddingBottom: "5px",
            paddingTop: "5px",
          }}
        />
      </div>

      {!isPlaying && (
        <button
          onClick={handleStartTimer}
          style={{
            marginTop: "75px",
            backgroundColor: "transparent",
            fontSize: "35px",
            border: "1px solid white",
          }}
        >
          sTaRT TimEr
        </button>
      )}

      {timerDuration > 0 && isPlaying && (
        <div
          style={{
            marginTop: "50px",
            marginLeft: "25%",
            textAlign: "center",
            width: "100%",
          }}
        >
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={timerDuration}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[
              timerDuration,
              timerDuration - 2,
              timerDuration - 5,
              0,
            ]}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
      )}
    </>
  );
}

export default App;
