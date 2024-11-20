import { Edit, Cancel } from "@mui/icons-material";
import { IconButton } from "@mui/material";

function ActionButtons(){
    return <div className="flex flex-row gap-1">
        <IconButton><Edit/></IconButton>
        <IconButton><Cancel/></IconButton>
    </div>
}
export default ActionButtons;