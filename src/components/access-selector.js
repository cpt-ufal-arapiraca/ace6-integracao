import { Label } from "@mui/icons-material";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

function AccessSelector(){
    return (
        <div className="w-1/2  flex flex-col border rouded p-6">
            <FormGroup>
                <FormControlLabel style={{color: "#4F4F4F"}} control={<Checkbox/>} label="LECC"></FormControlLabel>
                <FormControlLabel style={{color: "#4F4F4F"}} control={<Checkbox/>} label="Almoxarifado"></FormControlLabel>
                <FormControlLabel style={{color: "#4F4F4F"}} control={<Checkbox/>} label="Geinfra"></FormControlLabel>
            </FormGroup>
        </div>

    )
}
export default AccessSelector;