import CountDown from "react-native-countdown-component";

const Timer = () => {
  return (
    <CountDown
      until={10}
      onFinish={() => alert("finished")}
      onPress={() => alert("hello")}
      size={20}
    />
  );
};

export default Timer;