import React from 'react';
import NavBar from './components/NavBar'
import './App.css'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import SignUp from './components/screens/Signup'
import SignIn from './components/screens/Login'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" >
        <Home />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
    </BrowserRouter>
  );
}

export default App;
