import { Link } from "react-router-dom"

const LoginPage = () => {
    return(
        <div>
            <h2>Login</h2>

            <p>
                Or <Link to= '/register' >register</Link>
            </p>
        </div>
    )
}

export default LoginPage