//import React, { useEffect, useState } from 'react';
import './App.css';
import Dashboard from './components/page/admin/dashboard/Dashboard';
import AdminLogin from './components/page/admin/login/Login'
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'
function App() {
  // console.log(isLogedIn)
  // const [feedsState, setFeedsState] = useState([])
  // const getFeeds = async () => {
  //   try {
  //     const feeds = await fetch('http://127.0.0.1:5002/api/v1/feeds', {
  //       method: 'GET',
  //       headers: {'Content-Type': 'application/json'},
  //       mode: 'cors',
  //       cache: 'default'
  //     }).then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok')
  //       }
  //       return response.json()
  //     })
  //     setFeedsState(feeds?.data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // useEffect(() => {
  //   getFeeds();
  // }, [])

  return (
      <Router>
        <div className="App">
          <Switch>
              <Route exact path='/'>
                <AdminLogin />
              </Route>
              <Route path='/admin-dashboard'>
                <Dashboard />
              </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
