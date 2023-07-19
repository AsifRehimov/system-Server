import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { RegistrDiv } from "./Registr.styled";
import logo from "../photo/logo.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Registr = () => {

    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')
    const handleSubmit = () => {
        if (fullName.length < 5) {

            toast.error('Ad və Soyadınız 5 xarakterdən az ola bilməz.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (userName.length < 5) {
            toast.error('İstifadəçi adınız 5 xarakterdən az ola bilməz.', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else if (email.length < 5) {
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

        } else if (bio.length === 0) {
            toast.error('Zəhmət olmasa məşğuliyyət əlavə edin. Məsələn "məktəbli"', {
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
            axios.post('/registr',
                {
                    fullName: fullName,
                    username: userName,
                    email: email,
                    password: password,
                    bio: bio,
                }).then(res => {
                    return (
                        res.status === 201 ?
                            (navigate('/login'),
                                localStorage.setItem("item", res.data))
                            : alert("ad soyad sehvdir")
                    )
                }).catch(err => alert(err))
        }
    }
    //   if (localStorage.item !== undefined) return navigate('/');


    return (
        <RegistrDiv>
            <ToastContainer />
            <div className="logo_div">
                <img src={logo} alt="logo" className="logo" />
                <p>Chemistry</p>
            </div>
            <form className="form">
                <p className="form_title">Qeydiyyat</p>
                <div className='form-group'>
                    <Input className="input" color="error" labelPlaceholder="Ad, Soyad" onChange={(e) => setFullName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <Input className="input" color="error" labelPlaceholder="İstifadəçi adı" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <Input className="input" color="error" labelPlaceholder="Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <Input.Password className="input" color="error" labelPlaceholder="Parol" initialValue={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <Input className="input" color="error" labelPlaceholder="Məşğuliyyət" onChange={(e) => setBio(e.target.value)} />
                </div>
                <Button className="inputButton" auto color="primary" rounded onPress={handleSubmit}>
                    Qeydiyyatdan keç
                </Button>
                <p className="passTo">Hesabınız var? O zaman yubanmadan <a className="link" href="/login">Daxil ol</a></p>
            </form>
        </RegistrDiv>
    )
}
export default Registr;