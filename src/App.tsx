import { ExampleSection } from "./components/ExampleSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";

export const App = () => (
  <div>
    <Header />
    <main>
      <VideoPlayer src="public/9206132-uhd_3840_2160_25fps.mp4" />
      <ExampleSection />
    </main>
    <Footer />
  </div>
);
