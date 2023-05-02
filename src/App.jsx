import './styles/App.css'
import './styles/login.scss'
import React from 'react'
import LoggedIn from './components/LoggedIn';
import Single from './components/filter/Single';

function App() {
  return (
    <React.Fragment>
    <div className='app'>
    <Single/>
    <LoggedIn/>
    </div>
    </React.Fragment>
  )
}

export default App;
