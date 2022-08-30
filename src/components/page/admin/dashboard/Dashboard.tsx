import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
    const [ admin, setAdmin ] = useState()
    const history = useHistory()

    useEffect(() => {
      axios({
        method: 'get',
        url: 'auth/admin/dashboard',
        headers: {
          token: localStorage.getItem('token') || ''
        }
      }).then(res => {
        if (res.data.loggedIn === true) {
          setAdmin(res.data.data.username)
        }
      }).catch (err => {
        if (err) {
          history.push('/')
        }
      })
    })
    return (
    <div>
        <h1>Welcome {admin}</h1>
        <button>Logout</button>
    </div>
  )
}

export default Dashboard