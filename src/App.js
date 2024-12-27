import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main.jsx";
import Aboutsus from "./pages/Aboutus";
import CommonLayout from "./pages/CommonLayout.jsx";
import Contactus from "./pages/Contactus";
import Events from "./pages/Event";
import Services from "./pages/Services";
import Works from "./pages/Works";

const App = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route index element={<Main />} />
        <Route path="/works" element={<Works />} />
        <Route path="/services" element={<Services />} />
        <Route path="/event" element={<Events />} />
        <Route path="/aboutus" element={<Aboutsus />} />
        <Route path="/contactus" element={<Contactus />} />
      </Route>
    </Routes>
  );
};

export default App;
