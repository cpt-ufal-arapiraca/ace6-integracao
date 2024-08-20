function SidebarButton({title, event, icon}){
    return(
        <button onClick={event}>
                {title}
        </button>
    )
}
export default SidebarButton;