import Button from "../components/button"
import InputField from "../components/inputfield"
import sideImage from '../assets/images/login.png'

function Login() {
    return (
        <div class="flex flex-row w-full">  
        <div class="w-1/3">
            <img class="object-cover h-full" src={sideImage}></img>
        </div>
        <div class="h-screen flex items-center justify-center w-2/3">
        <div class="flex flex-col w-1/3">
            <InputField title="Nome de Usuário" id="username"></InputField>
            <InputField title="Senha" id="password" type="password"></InputField>
            <Button title="Entrar"></Button>
        </div>
        </div>

        </div>

    )
}
export default Login