import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Login } from "./Login.styled";
import logo from "../photo/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginScreen = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        if (email.length < 5) {
            toast.error('Emailiniz 5 xarakterdən az ola bilməz.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (password.length < 7) {
            toast.error('Şifrəniz minimum 8 xarakter olmalıdır.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        } else {
            axios.post('/login',
                {
                    email: email,
                    password: password
                }).then(res => {
                    return (
                        res.status === 200 ?
                            (navigate('/'),
                                localStorage.setItem("item", res.data))
                            : alert("ad soyad sehvdir")
                    )
                }).catch(err => alert(err))
        }
    }
    //   if (localStorage.item !== undefined) return navigate('/');


    return (
        <Login>
            <ToastContainer />
            <div className="logo_div">
                <img src={logo} alt="logo" className="logo" />
                <p>Chemistry</p>
            </div>
            <form className="form">
                <p className="form_title">Login</p>
                <div className='form-group'>
                    <Input className="input" labelPlaceholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <Input.Password className="input" labelPlaceholder="Parol" initialValue={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <Button className="inputButton" auto color="primary" rounded onClick={handleSubmit}>
                    Daxil ol
                </Button>
                <p className="passTo">Hələdə hesabınız yoxdur? o zaman <a className="link" href="/registration"> Qeydiyyatdan keç</a></p>
            </form>
        </Login>
    )
}
export default LoginScreen