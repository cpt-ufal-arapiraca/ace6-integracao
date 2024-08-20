import Sidebar from "../components/sidebar/sidebar";
import UserInfo from "../components/sidebar/user-info";
import SystemArea from "../components/systems/system-area";


function Initial(){
    return(
        <div className="flex flex-row">
            <Sidebar/>
            <SystemArea/>
        </div>

    )
}
export default Initial;