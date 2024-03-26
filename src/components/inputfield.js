function InputField({id, title, type = 'text'}){
    return(
        <div>
            <label for={id}>{title}</label>
            <input type={type} id={id}></input>
        </div>
    )
}
export default InputField;