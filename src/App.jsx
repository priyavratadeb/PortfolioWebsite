import { Home } from "./pages/Home";

// CHANGE #2: removed React Router and the Toaster.
// The site is a single scrolling page, so a router only caused 404 errors
// on GitHub Pages. The fake contact-form toast system was also removed (#15, #18).
function App() {
  return <Home />;
}

export default App;
