import RouteNavigation from "./routes";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App() {
  return (
    <div className="App">
      <SpeedInsights />
      <RouteNavigation />
    </div>
  );
}

export default App;
