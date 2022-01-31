import "./App.scss";
import Header from "./containers/Header/Header";
import CreateEvent from "./containers/CreateEvent/CreateEvent";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
     <Router>
      <Header/>
        {/* <Nav /> */}
        <CreateEvent/>
      </Router>
      </div>
  );
};

export default App;