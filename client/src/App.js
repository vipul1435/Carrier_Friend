import { ThemeProvider } from "@mui/material";
import {theme} from 'theme';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Navbar from "components/Navbar"
import Home from "scenes/home";
import Opportunities from "scenes/opportunities";
import About from "scenes/about";
import Code from "scenes/code";
import Auth from "scenes/auth";
import Room from "scenes/room";
import NavControl from "components/NavControl";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "store";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch();
  dispatch(setUser({name:"sahil"}))
  const val =  useSelector((state) => state.global.user.name);
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <NavControl>
      <Navbar/>
      </NavControl>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/opportunities" element={<Opportunities/>}/>
        <Route path="/codegroup" element={<Code/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/room/:RoomId' element={<Room/>}/>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
