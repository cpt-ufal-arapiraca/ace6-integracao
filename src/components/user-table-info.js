function UserTable({name, email, picture}){
    return (
        <div className="flex flex-row gap-2 items-center">
            <div className="w-10 h-10 rounded-full">
                <img className="object-cover rounded-full" src={picture}></img>
            </div>
            <div className="flex flex-col">
                <h3 className="text-gray2 text-md">{name}</h3>
                <h4 className="text-xs text-gray2" >{email}</h4>
            </div>
        </div>
    )
}
export default UserTable;