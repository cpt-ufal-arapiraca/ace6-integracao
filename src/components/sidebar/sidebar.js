import SidebarButton from "./sidebar-button";
import Separator from "./sidebar-separator";
import UserInfo from "./user-info";
import home from "../../assets/icons/home.svg"
import settings from "../../assets/icons/settings.svg"
import notifications from "../../assets/icons/notifications.svg"

function Sidebar(){
    return(
        <div className="w-1/5 h-screen bg-primary rounded-r-xl flex flex-col items-center shadow-lg">
            <UserInfo
            name="Jonh doe"
            picture="{picture}"></UserInfo>
            
            <SidebarButton
                title="Início"
                icon={home}
            />
            <SidebarButton
                title="Configurações"
                icon={settings}
            />
            <Separator/>
            <SidebarButton
                title="Notificações"
                icon={notifications}
            />
        </div>
    )
}   
export default Sidebar;