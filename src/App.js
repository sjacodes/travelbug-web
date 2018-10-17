import React, { Component } from 'react'
import './App.css'
import TravelBug from './components/TravelBug'
import { BrowserRouter } from "react-router-dom";


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <TravelBug />
     </BrowserRouter>

    )
  }
}

export default App
