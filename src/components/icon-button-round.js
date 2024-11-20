function IconRoundButton({event, icon}){
    return (
        <button onClick={event} className="bg-primary w-10 h-10 rounded-full flex flex-row items-center justify-center">
            {icon}
        </button>
    )
}
export default IconRoundButton;