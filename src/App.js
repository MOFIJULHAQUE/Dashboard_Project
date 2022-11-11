import LeftSection from "./components/leftSection/LeftSection";

import "./App.css";
import Router from "./routes/Router";

function App() {
  return (
    <>
      <div className="App">
        <div className="main-content">
          <LeftSection />
          <Router />
        </div>
      </div>
    </>
  );
}

export default App;
