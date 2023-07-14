import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

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
                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    className='form-input'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    className='form-input'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>
            <p onClick={handleSubmit} className='button' >
                Login
            </p>
        </form>
    )
}
export default LoginScreen