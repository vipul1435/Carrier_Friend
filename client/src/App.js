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
function App() {
  const dispatch = useDispatch();
  dispatch(setUser({name:"sahil"}))
  const val =  useSelector((state) => state.global.user.name);
  console.log(val);
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <NavControl>
      <Navbar/>
      </NavControl>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/opportunities" element={<Opportunities/>}/>
        <Route path="/codegroup" element={<Code/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/room/:id' element={<Room/>}/>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
