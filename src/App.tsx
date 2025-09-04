import { ExampleSection } from "./components/ExampleSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { VideoPlayer } from "./components/VideoPlayer";

export const App = () => (
  <div>
    <Header />
    <main>
      <VideoPlayer />
      <ExampleSection />
    </main>
    <Footer />
  </div>
);
