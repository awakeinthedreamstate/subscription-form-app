import DesktopView from "./desktop/DesktopView";
import MobileView from "./mobile/MobileView";
import { useState, useEffect } from "react";

function App() {
  //initialise screen size bool
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  //set app view depending on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="App" className="overflow-hidden bg-magnolia">
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}

export default App;
