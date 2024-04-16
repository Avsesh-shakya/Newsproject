import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {

  render() {
    return (
      <div className='conatiner'>
        <Navbar/>
        <News/>

      </div>
    )
  }
}

export default App
