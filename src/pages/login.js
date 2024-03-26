import Button from "../components/button"
import InputField from "../components/inputfield"
import sideImage from '../assets/images/login.png'
import logo from '../assets/images/logo.png'

function Login() {
    return (
        <div class="flex flex-row w-full">  
        <div class="w-1/3 relative">
            <img class="object-cover h-full absolute" src={sideImage}></img>
            <div class="bg-gradient-to-b from-primary to-transparent absolute w-full h-full"></div>
            <img class="w-2/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute" src={logo}></img>

            

        </div>
        <div class="h-screen flex items-center justify-center w-2/3">
        <div class="flex flex-col w-1/3 gap-8">
            <div class="pb-20">
                <h1 class="font-bold text-6xl text-gray2">Login</h1>

            </div>
            <InputField title="Nome de Usuário" id="username"></InputField>
            <InputField title="Senha" id="password" type="password"></InputField>
            <Button title="Entrar"></Button>
        </div>
        </div>

        </div>

    )
}
export default Login