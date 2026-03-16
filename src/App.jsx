import Body from "../src/components/Body";
import "./App.css";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
const env = import.meta.env;

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
