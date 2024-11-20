import AccessSelector from "../components/access-selector";
import Button from "../components/button";
import InputField from "../components/inputfield";
import Separator from "../components/sidebar/sidebar-separator";

function NewUser(){
    return (
        <div className="w-full h-screen flex flex-col p-8 gap-4">
            <h2 className="text-lg font-medium text-gray2">Registro de Acesso</h2>
            <h2 className="text-xl font-thin text-gray4">Perfil</h2>
            <Separator color={"bg-gray3"}/>
            <div className="w-2/3 flex flex-row gap-4 justify-start">
                <InputField title={"Nome"} placeholder={"Jonh Doe"} />
                <InputField title={"Matrícula"} placeholder={"123345678"} />
            </div>
            <div className="w-2/3 flex flex-row gap-4 justify-start">
                <InputField title={"E-mail"} placeholder={"jonhdoe@arapiraca.ufal.br"} />
                <InputField title={"CPF"} placeholder={"000.000.000-00"} />
            </div>
            <h2 className="text-xl font-thin text-gray4">Acessos</h2>
            <Separator color={"bg-gray3"}/>
            <AccessSelector/>
            <div className="w-full flex flex-row justify-end pr-8">
                <div className="w-1/5">
                    <Button title={"Cadastrar"}/>
                </div>
            </div>
        </div>
    )
}
export default NewUser;