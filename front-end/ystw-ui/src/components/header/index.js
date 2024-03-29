import React from 'react'
import './index.css'
function Header() {
  return (
    <nav className="navbar navbar-color" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <p class="is-size-5 is-family-sans-serif">Youtube Speech to Text Downloader</p>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start is-family-monospace">
                </div>

                <div className="navbar-end">
                <a href="#howtouse" className="navbar-item is-family-monospace">
                            How To Use
                        </a>              
                        <a href="#app" className="navbar-item is-family-monospace">
                            Try It Out
                        </a>              
                        <a href="#status" className="navbar-item is-family-monospace">
                            Get Request Status
                        </a>                                
                </div>
            </div>
        </nav>
  )
}

export default Header