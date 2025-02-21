import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UseContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Sugam Bohara | React with Vite</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
