function SystemCard({title, description, image, locked}){
    return (
        <div className="w-full h-full cursor-pointer">
            <div className="w-full h-60 rounded-lg shadow-lg hover:scale-105 hover:border-2 border-primary ease-in-out duration-200">
            <div className="w-full h-1/2 bg-primary rounded-t-lg">
                <img className="object-cover w-full h-full rounded-t-lg opacity-50 bg-blend-overlay" src={image}></img>
            </div>
            <div className=" h-1/2 flex flex-col justify-center items-center p-8 text-center">
                <h2 className="text-2xl font-bold pb-1 text-primary">
                    {title}
                </h2>
                <h5 className="text-sm font-thin">
                    {description}
                </h5>
            </div>
        </div>
        </div>
        
    )
}
export default SystemCard;