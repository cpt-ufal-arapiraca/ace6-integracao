function PageSelectorButton({index, selected}){


    return <div className={`relative -left-1/2 w-10 h-10  flex justify-center ${selected ? "bg-primary" : "bg-white border-2 border-gray3"}  items-center rounded cursor-pointer hover:bg-light-blue hover:border-0 ease-in-out duration-200`}>
        <span className={`${selected ? "text-white": "text-gray3"} font-medium`}>{index}</span>
    </div>
}
export default PageSelectorButton;