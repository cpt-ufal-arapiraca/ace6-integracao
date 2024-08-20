import DateInfo from "../date-info";
import HelpButton from "../help-button";
import SystemArea from "./system-area";

function SystemPage(){
    return(
        <div className="w-full h-screen relative">
            <DateInfo/>
            <SystemArea/>
            <HelpButton/>
        </div>
    )
}
export default SystemPage;
