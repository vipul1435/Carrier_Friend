import { ThemeProvider } from "@mui/material";
import {theme} from 'theme';
import { BrowserRouter, Route , Routes } from "react-router-dom";
import Navbar from "components/navbar/Navbar"
import Home from "scenes/home";
import Opportunities from "scenes/opportunities";
import About from "scenes/about";
import Code from "scenes/code";
import Auth from "scenes/auth";
import Room from "scenes/room";
import NavControl from "components/navbar/NavControl";
import { useDispatch} from "react-redux";
import { setUser } from "store";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import JobShare from 'scenes/jobShare';
import { useVerifyUserQuery } from "store/api";
import Admin from "scenes/admin";
import Rejected from "scenes/admin/dashboard/rejected";
import Verified from "scenes/admin/dashboard/verified";
import Pending from "scenes/admin/dashboard/pending";
import Statics from "scenes/admin/dashboard/statics";

function App() {
  const dispatch = useDispatch();
  const {data,isLoading} = useVerifyUserQuery();
  if(data && !isLoading){
    dispatch(setUser(data));
  }
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <NavControl>
      <Navbar/>
      </NavControl>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/opportunities" element={<Opportunities/>}/>
        <Route path="/codegroup" element={<Code/>}/>
        <Route path="/aboutus" element={<About/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/room/:RoomId' element={<Room/>}/>
        <Route path='/jobshare' element={<JobShare/>}/>
        <Route path='/admin' element={<Admin/>}>
          <Route path="verified" element={<Verified/>}/>
          <Route path="pending" element={<Pending/>}/>
          <Route path="rejected" element={<Rejected/>}/>
          <Route path="statics" element={<Statics/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
