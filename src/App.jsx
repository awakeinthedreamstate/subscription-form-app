import DesktopView from "./desktop/DesktopView";
import MobileView from "./mobile/MobileView";

function App() {
  return (
    <div id="App" className="bg-magnolia overflow-hidden">
      {/* <MobileView /> */}
      <DesktopView />
    </div>
  );
}

export default App;
