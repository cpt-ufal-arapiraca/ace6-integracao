import { DataGrid } from "@mui/x-data-grid";
import TableView from "../components/tableview";
import SearchBar from "../components/search-bar";
import IconRoundButton from "../components/icon-button-round";
import { Add } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function createData(num, username, useremail, roles, access) {
  return { num, username, useremail, roles, access };
}

const rows = [
  createData(1, "Jonh Doe", "jonhdoe@gmail.com", ["Admin", "Gerente"], ["LECC", "Geinfra"]),
  createData(2, "Jonh Doe", "jonhdoe@gmail.com", ["Gerente"], ["LECC", "Geinfra"]),
  createData(3, "Jonh Doe", "jonhdoe@gmail.com", [], ["LECC", "Geinfra"]),
  createData(4, "Jonh Doe", "jonhdoe@gmail.com", [], ["LECC", "Geinfra"]),
  createData(5, "Jonh Doe", "jonhdoe@gmail.com", [], ["LECC", "Geinfra"]),
];

function AccessManager(){
    return <div className="w-full h-screen flex flex-col p-8">
        <h2 className="text-lg font-medium text-gray2">Gerenciamento de Acesso</h2>
        <div className="w-1/2 flex flex-row justify-end gap-4 self-end py-4">
          <div className="w-2/3">
            <SearchBar placeholder={"Pesquise um usuário"}/>
          </div>
          <NavLink to="new-user">
            <IconRoundButton icon={<Add style={{color: 'white'}}/>}/>
          </NavLink>
        </div>
        <TableView
            rows={rows}
        />
    </div>
}
export default AccessManager;