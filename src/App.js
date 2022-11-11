import LeftSection from "./components/leftSection/LeftSection";
import Router from "./routes/Router";

import "./App.css";

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
