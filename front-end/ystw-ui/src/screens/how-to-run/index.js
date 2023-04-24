import React , { Fragment }from 'react'
import './index.css'


function HowToRun() {
  return (
    <Fragment>
      {/* <nav className="navbar navbar-color" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <p class="is-size-5 is-family-sans-serif">Youtube Speech to Text Downloader</p>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start is-family-monospace">
                </div>
            </div>
        </nav> */}
        <section id="howtouse" className="hero is-large is-link">
        <figure className="image is-5by3 m-5">
        <iframe className="has-ratio" width="400" height="360" src="https://www.youtube.com/embed/3KNn2nSa-TM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</figure>
        </section>
      
      <section id="howtorun" className="hero is-large is-link">
                <div className="hero-body is-medium">
                
                <p className="title is-size-2 is-family-sans-serif">
                    How to Run this Tool!
                </p>
                <br />
                <p className="subtitle is-size-3 is-family-sans-serif">
                Step 1 :- Go To Try it Out!
                </p>
                <p className="subtitle is-size-5 is-family-sans-serif">
                i. From the Home page, click on "Try it Out" option and provide the requied inputs.
                </p>

                <p className="subtitle is-size-3 is-family-sans-serif">
                Step 2 :- Paste Youtube URL!
                </p>
                <p className="subtitle is-size-5 is-family-sans-serif">
                i. Provide valid input youtube URL.
                <br />
                ii. Provide Input lanague
                <br />
                iii. Submit the request
                <br />
                </p>
                <p className="subtitle is-size-3 is-family-sans-serif">
                Step 3 :- Check request status!
                </p>
                <p className="subtitle is-size-5 is-family-sans-serif">
                i. From the Home page, click on "Try it Out" option and provide the requied inputs.
                </p>
            </div>
        </section> 
        {/* <Footer/> */}
    </Fragment>
  )
}

export default HowToRun