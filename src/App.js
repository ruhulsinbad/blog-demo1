import Announcement from "./components/Announcement/Announcement";
import TopMiddle from "./components/layouts/middle/TopMiddle";
import Sidebar from "./components/layouts/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <div className=" mx-4 lg:flex lg:justify-between lg:mx-12 xl:mx-48">
        <TopMiddle />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
