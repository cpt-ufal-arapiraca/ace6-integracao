import PageSelectorButton from "./page-button";

function PageSelector({pageCount}){


    return <div className="h-12 absolute bottom-8 left-1/2 flex flex-row gap-4">
        
        
        <PageSelectorButton
            index="1"
            selected={true}
        />
    </div>
}
export default PageSelector;