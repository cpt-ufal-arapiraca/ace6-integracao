import SidebarButton from "./sidebar-button";
import Separator from "./sidebar-separator";
import logout from "../../assets/icons/logout.svg"

function SidebarFooter(){
    return(
        <div className="flex flex-col w-1/5 absolute bottom-8">
            <Separator color={"bg-light-blue"}/>
            <SidebarButton
                icon={logout}
                title="Sair"
            />
        </div>
    )
}
export default SidebarFooter;