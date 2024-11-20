import {NavLink } from "react-router-dom";

function SidebarButton({title, icon, active, link}){
    return(
        <NavLink to={link}>
        <li className={`relative flex items-center py-2 px-3 my-1 font-medium text-white cursor-pointer transition-colors ${active ? "bg-highlight" : "bg-primary"} hover:bg-highlight ease-in-out duration-200`}>
            <div className="h-6 w-6 mr-4">
                <img className="object-fill h-full w-full" src={icon}></img>
            </div>
            
            <div>{title}</div>
        </li>
        </NavLink>

    )
}
export default SidebarButton;