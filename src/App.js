import GlobalState from "./globalState/GlobalState"
import MainScreen from  "./screens/MainScreen/MainScreen"

const App = () => {
  return (
    <GlobalState>
      <MainScreen/>
    </GlobalState>
  );
}

export default App;
