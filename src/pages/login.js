import InputField from "../components/inputfield"

function Login() {
    return (
        <div>
            <InputField title="Nome de Usuário" id="username"></InputField>
            <InputField title="Senha" id="password" type="password"></InputField>
        </div>
    )
}
export default Login