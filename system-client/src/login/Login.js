import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Input } from "@nextui-org/react";


const LoginScreen = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
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
    //   if (localStorage.item !== undefined) return navigate('/');


    return (
        <form >
            <div className='form-group'>
                <Input labelPlaceholder="Email" />
            </div>
            <div className='form-group'>
                <Input.Password labelPlaceholder="Password" initialValue={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <p onClick={handleSubmit} className='button' >
                Login
            </p>
        </form>
    )
} 
export default LoginScreen