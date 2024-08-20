import SidebarButton from "./sidebar-button";
import Separator from "./sidebar-separator";
import logout from "../../assets/icons/logout.svg"

function SidebarFooter(){
    return(
        <div className="w-full flex flex-col items-center absolute bottom-0">
            <Separator/>
            <SidebarButton
                icon={logout}
                title="Sair"
            />
        </div>
    )
}
export default SidebarFooter;