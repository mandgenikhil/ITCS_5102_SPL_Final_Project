import React , { Fragment }from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import './index.css'


function HowToRun() {
  return (
    <Fragment>
      
      <section id="home" className="hero is-large is-link">
                <div className="hero-body">
                <p className="title is-size-2 is-family-sans-serif">
                    How to Run this Tool!
                </p>
                <br />
                <p className="subtitle is-size-3 is-family-sans-serif">
                Step 1 :- Go To Try it Out!
                </p>
                {/* <p className="subtitle is-size-5 is-family-sans-serif">
                by Pallavi Shirodkar
                </p> */}
                <p className="subtitle is-size-6 is-family-sans-serif">Using MS azure congitive service for language managed service, we have integrated Speech -to- Text in this application.</p>                
                <p className="subtitle is-size-3 is-family-sans-serif">
                Step 1 :- Paste Youtube URL!
                </p>
                {/* <p className="subtitle is-size-5 is-family-sans-serif">
                by Pallavi Shirodkar
                </p> */}
                <p className="subtitle is-size-6 is-family-sans-serif">Using MS azure congitive service for language managed service, we have integrated Speech -to- Text in this application.</p>                
            </div>
        </section> 
        <Footer/>
    </Fragment>
  )
}

export default HowToRun