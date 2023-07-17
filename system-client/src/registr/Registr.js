import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { RegistrDiv } from "./Registr.styled";
import logo from "../photo/logo.png";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const Registr = () => {

    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [bio, setBio] = useState('')

    const handleSubmit = () => {
        if (fullName.length < 5) {
            MySwal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Ad və Soyadınız 5 xarakterdən az ola bilməz.',
                showConfirmButton: false,
                timer: 1500
              })
        } else if (userName.length < 5) {
            MySwal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'İstifadəçi adınız 5 xarakterdən az ola bilməz.',
                showConfirmButton: false,
                timer: 1500
              })
        } else if (email.length < 5) {
            MySwal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Emailiniz 5 xarakterdən az ola bilməz.',
                showConfirmButton: false,
                timer: 1500
              })
        } else if (password.length < 7) {
            MySwal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Şifrəniz minimum 8 xarakter olmalıdır.',
                showConfirmButton: false,
                timer: 1500
              })
        } else if (bio.length === 0) {
            MySwal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Zəhmət olmasa məşğuliyyət əlavə edin. Məsələn "məktəbli"',
                showConfirmButton: false,
                timer: 1500
              })
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
                <Button className="inputButton" auto color="primary" rounded onClick={handleSubmit}>
                    Daxil ol
                </Button>
                <p className="passTo">Hesabınəz var? O zaman yubanmadan daxil ol. {<Link className="link" to={"/login"}>Daxil ol</Link>}</p>
            </form>
        </RegistrDiv>
    )
}
export default Registr;