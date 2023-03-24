import './Login.css'

function Login() {
    return (
        <section class="ContainerLogin">
            <section>
                <img src="img/Logo.png" alt="" />
                <section>
                    <h3>Usuario:</h3>
                    <input type="text" placeholder="Ingrese el usuario..." />
                    <h3>Contraseña:</h3>
                    <input type="password" placeholder="Ingrese la contraseña..." />
                    <p>haz olvidado tu contrasena?, haz click <a href="">aqui</a>.</p>
                    <button class="BtnLogin">Login</button>
                </section>
            </section>
            <section>
                Carousel
            </section>
        </section>
    )
}

export default Login

