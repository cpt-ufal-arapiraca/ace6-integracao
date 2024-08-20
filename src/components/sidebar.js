import UserInfo from "./user-info";

function Sidebar(){
    return(
        <div className="w-1/5 h-screen bg-primary rounded-r-xl flex flex-col items-center drop-shadow-xl">
            <UserInfo
            name="Jonh doe"
            picture="{picture}"></UserInfo>
        </div>
    )
}   
export default Sidebar;