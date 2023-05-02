import './styles/App.css'
import './styles/login.scss'
import React from 'react'
import LoggedIn from './components/LoggedIn';
import Single from './components/filter/Single';
import Todo from './components/todo/Todo';

function App() {
  return (
    <React.Fragment>
    <div className='container'>
    <Single/>
    <LoggedIn/>
    </div>
    <Todo/>
    </React.Fragment>
  )
}

export default App;
