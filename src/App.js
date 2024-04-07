
import React  from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Home1 from './components/AW/Home1.js';
import Demo from './components/AW/Demo';
import Post from './components/AW/Post';
import Workshop from './components/AW/Workshop';
import Profile  from './pages/Profile.jsx';
// import Election from './pages/Election/Election.jsx';
import Notification from './pages/Notification.jsx';
import Home from "./components/USER/Home.js"
import Vote  from "./components/USER/Vote.js"
import ViewResult from "./components/USER/ViewResult.jsx"
import TotalVote from "./components/USER/TotalVote.js"
import Online from './components/AW/Online.jsx';
import Ofline  from './components/AW/Ofline.jsx';



import SettingsPage from './components/Setting/SettingsPage.js';
import Landing from './components/Yaswant/HomeComponents/Landing.js';
import UserLogin from './components/Yaswant/UserLogin/UserLogin.js';
import UserRegister from './components/Yaswant/UserLogin/UserRegister.js';
import AdminLogin from './components/Yaswant/AdminLogin/AdminLogin.js';
import AdminSidebar from './components/Admin/adminSidebar/AdminSidebar.js';




function App() {
  return (
    <div className='hom'>
    
    <BrowserRouter>
      
    <Routes>
      <Route path ="/"element={<Landing/>}/>
      <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/userRegister" element={<UserRegister />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
           
      <Route path ="/dashboard"element={<Dashboard/>}/>
        <Route path ="/notification"element={<Notification/>}/>
      
      <Route path ="/profile"element={<Profile/>}/>

      {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/home" element={<Home />} />
        
        <Route exact path="/vote" element={<Vote />} />
        <Route exact path="/viewresult" element={<ViewResult />} />
        <Route exact path="/totalvote" element={<TotalVote />} />
        
        
        <Route exact path="/home1" element={<Home1 />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/ofline" element={<Ofline />} />
        <Route exact path="/online" element={<Online />} />
        <Route exact path="/settingsPage" element={<SettingsPage />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
        <Route exact path="/adminsidebar" element={<AdminSidebar/>}></Route>

        

    </Routes>
   
    </BrowserRouter>
    </div>
    
  );
}

export default App;





