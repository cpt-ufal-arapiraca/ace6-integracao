function UserInfo({name, picture}){
    return(
        <div className="w-full  flex flex-col justify-center items-center p-8 pt-20">
            <div className="w-20 h-20 rounded-full">
                    <img className="object-cover rounded-full" src="https://placehold.co/600x600"></img>
            </div>
            <div className="text-xl text-white font-bold pt-2">
                <h3>Olá, <span className="font-thin">{name}</span></h3>
            </div>
        </div>
    )
}
export default UserInfo;