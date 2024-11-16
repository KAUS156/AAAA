
import React  from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
// import Dashboard from './pages/Dashboard';
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
import DT from './components/USER/DT.js';
import ViewResult from "./components/USER/ViewResult.jsx"
import TotalVote from "./components/USER/TotalVote.js"
import Online from './components/AW/Online.jsx';
import Ofline  from './components/AW/Ofline.jsx';

import Workshop1  from './components/AdminComponents/components/Workshop/Workshop1.js';
import SettingsPage from './components/Setting/SettingsPage.js';
import Landing from './components/Yaswant/HomeComponents/Landing.js';
import UserLogin from './components/Yaswant/UserLogin/UserLogin.js';
import UserRegister from './components/Yaswant/UserLogin/UserRegister.js';
import AdminLogin from './components/Yaswant/AdminLogin/AdminLogin.js';
import AdminSidebar from './components/AdminComponents/components/AdminDashboard/Adminsidebar/AdminSidebar.jsx';
import Adminhome from './components/AdminComponents/components/AdminDashboard/ADMINelection/Adminhome.js';
import AdminWorkshopHome from './components/AdminComponents/components/AdminWorkshop/AdminWorkshopHome.js';
import AddCandidate from './components/AdminComponents/components/AdminDashboard/ADMINelection/AddCandidate.js';
import DeclearResult from './components/AdminComponents/components/AdminDashboard/ADMINelection/DeclearResult.js';
import AdminOflineMetting from './components/AdminComponents/components/AdminWorkshop/AdminOflineMetting.jsx';
import Postss from './components/AdminComponents/components/AdminWorkshop/Posts/Postss.js'
import Dashboard from './pages/Dashboard';





function App() {
  return (
    <div className='hom'>
    
    <BrowserRouter>
      
    <Routes>
      <Route path ="/"element={<Landing/>}/>
      <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/userRegister" element={<UserRegister />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
           
      {/* <Route path ="/dashboard"element={<Dashboard/>}/> */}
        <Route path ="/notification"element={<Notification/>}/>
      
      <Route path ="/profile"element={<Profile/>}/>

      {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/dt" element={< DT/>} />
        <Route exact path="/vote" element={<Vote />} />
        <Route exact path="/viewresult" element={<ViewResult />} />
        <Route exact path="/totalvote" element={<TotalVote />} />
        
        
        <Route exact path="/home1" element={<Home1 />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/workshop" element={<Workshop />} />
        <Route exact path="/workshop1" element={<Workshop1 />} />
        <Route exact path="/ofline" element={<Ofline />} />
        <Route exact path="/online" element={<Online />} />
        <Route exact path="/settingsPage" element={<SettingsPage />} />
        <Route exact path="/sidebar" element={<Sidebar />} />
        <Route exact path="/adminsidebar" element={<AdminSidebar/>}></Route>
        <Route exact path="/adminhome" element={<Adminhome/>}></Route>
        <Route exact path="/AdminWorkshopHome" element={<AdminWorkshopHome/>}></Route>
        <Route exact path="/AddCandidate" element={<AddCandidate/>}></Route>      
          <Route exact path="/DeclearResult" element={<DeclearResult/>}></Route>

          <Route exact path="/AdminOflineMetting" element={<AdminOflineMetting/>}></Route>
          <Route exact path="/AdminPosts" element={<Postss/>}></Route>
          <Route exact path="/admindashboard" element={<Dashboard/>}></Route>



          


          



        

    </Routes>
   
    </BrowserRouter>
    </div>
    
  );
}

export default App;





