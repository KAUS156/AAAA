import React, {useState} from 'react'
import{
    FaCommentAlt,
    FaBars,
    FaEnvelope,
    FaFolder,
    FaTh,


}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

 const Sidebar = ({children}) => {
    const[isOpen, setIsOpen]= useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/dt",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Home",
            name:"Election",
            icon:<FaEnvelope/>
        },
        {
            path:"/SettingsPage",
            name:"SettingsPage",
            icon:<FaCommentAlt/>
        },
       
        {
            path:"/Home1",
            name:"Awerness",
            icon:<FaFolder/>
        },
    ]
  return (
    <div className="container">
        <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "isOpen" : "none"}} className="bars">Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}}className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}}className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
        </div>
  )
}


export default Sidebar