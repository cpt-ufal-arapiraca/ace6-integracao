function Button({title, event}){
    return(
        <button class="bg-primary font-bold text-md text-white p-6 rounded-md w-full" onClick={event}>{title}</button>
    )
}
export default Button;