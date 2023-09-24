import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherComponent from './components/WeatherComponent/WeatherComponent'

function App() {
  return (
   <React.Fragment>
    <WeatherComponent></WeatherComponent>
   </React.Fragment>
  )
}

export default App
