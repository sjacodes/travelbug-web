import React, { Component } from 'react'
import './App.css'
import TravelBug from './components/TravelBug'
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './ScrollToTop';



class App extends Component {
  render () {
    return (
        <BrowserRouter>
          <ScrollToTop>
            <TravelBug />
         </ScrollToTop>
       </BrowserRouter>
    )
  }
}

export default App
