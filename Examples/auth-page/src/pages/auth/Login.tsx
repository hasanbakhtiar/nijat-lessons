import axios from "axios";
import { useRef } from "react"
import { Container } from "react-bootstrap"
import Cookies from 'universal-cookie';


const Login = () => {
    const cookies = new Cookies(null, { path: '/' });

    const usernameRef = useRef<HTMLInputElement | null>(null);
    const passRef = useRef<HTMLInputElement | null>(null);

    const loginFormHandle = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('https://dummyjson.com/auth/login', {
            username: usernameRef.current?.value,
            password: passRef.current?.value

        }).then(res => {

            if (res.status == 200) {
                console.log(res.data)
                cookies.set("token", res.data.accessToken)
            } else {
                alert("Email or pass is wrong");

            }
        })
            .catch(err => {
                alert("Email or pass is wrong");

                console.log(err)
            })
    }


    return (
        <Container>
            <div className="d-flex align-items-center justify-content-center">
                <form onSubmit={loginFormHandle} className="col-5 mt-5">
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input ref={usernameRef} type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input ref={passRef} type="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-warning">Login</button>
                </form>
            </div>


        </Container>
    )
}

export default Login