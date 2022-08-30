import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import FormButton from '../../../atoms/button/Button'
import style from './Login.css'

const Div = style()

const Login = () => {
    const history = useHistory()
    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()
    const [ errorMessage, setErrorMessage ] = useState('')

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const data = {
            username,
            password
        }
        axios({
            method: 'POST',
            url: 'auth/admin/signin',
            data
        }).then(res => {
            localStorage.setItem('token', res.data.token)
            history.push('/admin-dashboard');
        }).catch(err => {
          if (err) {
            setErrorMessage(err.response.data.message)
          }
        })
    }
  return (
    <Div>
        <div className='form-container'>
            <div className="left">
                <img
                    src="https://cdni.iconscout.com/illustration/premium/thumb/admin-manage-dashboard-online-with-laptop-1886524-1597935.png"
                    alt="bg_image"
                />
            </div>

            <div className="right">
                <form className="form" onSubmit={handleSubmit}>
                    <h2 className="form-header">ADMIN SIGNIN</h2>
                    <input type="text" placeholder="Username" onChange={(e: any) => setUsername(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e: any) => setPassword(e.target.value)} />
                    <div className="btn-container">
                        <FormButton
                            label="Sign in"
                            background="#6f65e7"
                            width={540}
                            color="white"
                            padding={{
                                top: 15,
                                bottom: 15,
                                left: 20,
                                right: 20
                            }}
                            fontSize={15}
                            fontWeight={600}
                        />
                        {/* <div className="finger-ptint-btn">
                            <img src="https://www.fingertec.com/biometric_data_security/images/fingerprint_ani2.gif" alt="" />
                        </div> */}
                    </div>
                    <div className="error-message">{errorMessage}</div>
                </form>
            </div>
        </div>
    </Div>
  )
}

export default Login