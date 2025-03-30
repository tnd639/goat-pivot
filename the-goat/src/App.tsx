import { useState } from "react";
import "./App.css";
import GoatAudio from "./GoatAudio.tsx";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <GoatAudio></GoatAudio>
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
  const [count, setCount] = useState(0);

  return (
    <>
      <CountdownCircleTimer
      isPlaying
      duration={7}
      colors={['#004777', '#F7B801', '#A30000', '#A30000']}
      colorsTime={[7, 5, 2, 0]}
      >
        {renderTime}

      </CountdownCircleTimer>
    </>
  );
}

export default App;
