import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <spanLink className="navbar-toggler-icon"></spanLink>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item" ><a class="nav-link" href="/general">General</a></li>
                <li className="nav-item" ><a class="nav-link" href="/business">Business</a></li>
                <li className="nav-item" ><a class="nav-link" href="/entertainment">Entertainment</a></li>
                <li className="nav-item" ><a class="nav-link" href="/health">Health</a></li>
                <li className="nav-item" ><a class="nav-link" href="/science">Science</a></li>
                <li className="nav-item" ><a class="nav-link" href="/technology">Technology</a></li>
                <li className="nav-item" ><a class="nav-link" href="/sports">Sports</a></li>


              </ul>

            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
