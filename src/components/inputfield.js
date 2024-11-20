function InputField({id, title, type = 'text', placeholder}){
    return(
        <div class="flex flex-col w-full">
            <label class="font-bold text-lg text-gray2" for={id}>{title}</label>
            <input class="bg-white outline-none border-solid border-2 border-gray4 p-4 font-md text-gray2 rounded text-bold focus:border-primary  " placeholder={placeholder} type={type} id={id}></input>
        </div>
    )
}
export default InputField;