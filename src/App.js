import Announcement from "./components/Announcement/Announcement";
import HeroSection from "./components/layouts/HeroSection";
import TopMiddle from "./components/layouts/middle/TopMiddle";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSection />
      <div className=" mt-16 mx-4 lg:flex lg:justify-between lg:mx-12 xl:mx-48">
        <TopMiddle />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
