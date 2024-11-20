import SidebarButton from "./sidebar-button";
import Separator from "./sidebar-separator";
import UserInfo from "./user-info";
import home from "../../assets/icons/home.svg"
import settings from "../../assets/icons/settings.svg"
import notifications from "../../assets/icons/notifications.svg"
import SidebarFooter from "./sidebar-footer";

function Sidebar({ children }){
    return(
        <aside className="h-screen w-full">
            <nav className="h-full flex flex-col bg-primary shadow-sm w-full">
                <div className="p-4 pb-2 flex justify-between items-center">
                <UserInfo
                    name="Jonh doe"
                    picture="{picture}"></UserInfo>
                </div>
                <ul className="flex-1 border-b">{ children }</ul>

                <SidebarFooter/>        
            </nav>
        </aside>
    )
}   
export default Sidebar;