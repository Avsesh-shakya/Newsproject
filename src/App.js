import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {

  render() {
    return (
      <div className='conatiner'>
        <Navbar/>
        <News pageSize={6}/>
 
      </div>
    )
  }
}

export default App
