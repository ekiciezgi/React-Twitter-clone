import React, { useState} from 'react';
import SideLink from '../components/SideLink'
import UserBox from '../components/UserBox'
import {TwLogo,HomeIcon,ExploreIcon,MessageIcon,NotificationsIcon,BookmarkstIcon,ListsIcon,ProfileIcon,MoreIcon} from "../icons/icon"
const sideLinks=[
    {
        name: "Home",
        icon: HomeIcon,
    },
    {
        name:" Explore",
        icon: ExploreIcon
    },
    {
        name:  "Notifications",
        icon: NotificationsIcon
    },
    {
        name:"Message" ,
        icon: MessageIcon
    },
    {
        name: "Bookmarks",
        icon: BookmarkstIcon
    },
    {
        name: "Lists",
        icon:ListsIcon
    },
    {
        name: "Profile",
        icon: ProfileIcon
    },
    {
        name: "More",
        icon: MoreIcon
    },

]
const Sidebar = () => {
    const [active, setActive] = useState("Home");
  
    const handleMenuItem =(name)=>{
        setActive(name)
    }
    return (
        <div className=" h-screen flex flex-col sticky top-0  justify-between w-72 px-2 ">
           <div >
            <div className="mt-1 mb-4 ml-1 flex items-center w-12 h-12 rounded-full justify-center hover:bg-gray-lightest transform transition-colors duration-100">
            <TwLogo></TwLogo>
            </div>
         
           <nav className="mb-4">
               <ul>
                   {sideLinks.map(({name,icon})=>(
                       <SideLink key={name} name={name} active={active} onMenuItemClick={handleMenuItem} Icon={icon}/>
                   ))}
               </ul>
           </nav>
<button className="bg-primary-base    hover:bg-primary-dark  w-11/12 text-white shadow-lg rounded-full py-3 px-8 transform transition-colors duration-100">Tweet</button>
           </div>


           <div><UserBox></UserBox></div>

        </div>
    )
}

export default Sidebar
