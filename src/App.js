import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import DescriptionSection from "./components/descriptionSection";
import ExamplesSection from "./components/examplesSection";
import SubscribeSection from "./components/subscribeSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <DescriptionSection />
      <ExamplesSection />
      <SubscribeSection />
      <Navbar />
    </div>
  );
}

export default App;
