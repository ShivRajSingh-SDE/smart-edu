import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Playlist from "./pages/Playlist";
import Teachprof from "./pages/Teachprof";
import Teacher from "./pages/Teacher";
import Updateprof from "./pages/Updateprof";
import Video from "./pages/Video";
import Login from "./Auth/Login";
import Reg from "./Auth/Reg";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Contact />
      <Courses />
      <Login />
      <Playlist />
      <Profile />
      <Reg />
      <Teachprof />
      <Teacher />
      <Updateprof />
      <Video />
    </div>
  );
}

export default App;
