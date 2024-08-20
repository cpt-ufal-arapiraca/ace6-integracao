import DateInfo from "../date-info";
import HelpButton from "../help-button";
import PageSelectorButton from "./page-button";
import PageSelector from "./page-selector";
import SystemArea from "./system-area";

function SystemPage(){
    return(
        <div className="w-full h-screen relative">
            <DateInfo/>
            <SystemArea/>
            <PageSelector/>
            <HelpButton/>
        </div>
    )
}
export default SystemPage;
