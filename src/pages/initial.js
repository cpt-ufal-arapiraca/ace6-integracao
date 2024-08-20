import Sidebar from "../components/sidebar/sidebar";
import UserInfo from "../components/sidebar/user-info";
import SystemArea from "../components/systems/system-area";
import SystemPage from "../components/systems/system-page";


function Initial(){
    return(
        <div className="flex flex-row">
            <Sidebar/>
            <SystemPage/>
        </div>

    )
}
export default Initial;