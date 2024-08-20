function SidebarButton({title, event, icon}){
    return(
        <button className="bg-primary text-white w-full flex flex-row justify-start px-8 py-4 items-center hover:bg-highlight" onClick={event}>
                <div className="h-6 w-6 mr-4">
                    <img className="object-fill h-full w-full" src={icon}></img>
                </div>
                <div>{title}</div>
        </button>
    )
}
export default SidebarButton;