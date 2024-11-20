import InputField from "./inputfield";
import search from "../assets/icons/search.svg"
function SearchBar({id, placeholder, title}){
    return (
        <div class="flex flex-col relative w-full">
            <label class="font-bold text-lg text-gray2" for={id}>{title}</label>
            <input class="bg-white outline-none border-solid border-2 border-gray4 p-2 font-md text-gray2 rounded text-bold focus:border-primary" type="text" id={id} placeholder={placeholder}></input>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <img src={search}/>
                </div>
        </div>
    )
}
export default SearchBar;