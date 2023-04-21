import './Login.css'

function Login() {
    return (
        <section className="ContainerLogin">
            <section>
                <img src="./src/assets/imgs/Logo.png" alt="" />
                <section>
                    <h3>Usuario:</h3>
                    <input type="text" placeholder="Ingrese el usuario..." />
                    <h3>Contraseña:</h3>
                    <input type="password" placeholder="Ingrese la contraseña..." />
                    <p>haz olvidado tu contrasena?, haz click <a href="">aqui</a>.</p>
                    <button className="BtnLogin">Login</button>
                </section>
            </section>
            <section>
                Carousel
            </section>
        </section>
    )
}

export default Login