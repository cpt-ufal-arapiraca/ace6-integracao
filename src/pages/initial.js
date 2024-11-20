import Sidebar from "../components/sidebar/sidebar";
import UserInfo from "../components/sidebar/user-info";
import SystemArea from "../components/systems/system-area";
import SystemPage from "../components/systems/system-page";
import AccessManager from "./access-manager";
import SidebarButton from '../components/sidebar/sidebar-button';
import home from "../assets/icons/home.svg"
import settings from "../assets/icons/settings.svg"
import notifications from "../assets/icons/notifications.svg"
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Routes,
} from "react-router-dom"
import TableView from "../components/tableview";
import NewUser from "./new-user";

const router = createBrowserRouter([
    {
        path: "/",
        element: (<SystemPage/>),
    },
    {
        path: "/settings",
        element: <AccessManager/>
    }
])
function Initial(){
    return(
        <div className="w-full flex flex-row">
            <div className="w-1/5">
            <Sidebar>
                <SidebarButton
                icon={home}
                title={"Início"}
                link={"/"}
                />
                <SidebarButton
                icon={settings}
                title={"Configurações"}
                link={"settings"}
                />
                <SidebarButton
                icon={notifications}
                title={"Notificações"}
                link={"notifications"}
                />
            </Sidebar>
            </div>
            <div className="w-4/5">
                <Routes>
                    <Route path="/" element={<SystemArea/>}></Route>
                    <Route path="settings" element={<AccessManager/>}></Route>
                    <Route path="settings/new-user" element={<NewUser/>}></Route>
                </Routes>
            </div>
        </div>
    )
}
export default Initial;