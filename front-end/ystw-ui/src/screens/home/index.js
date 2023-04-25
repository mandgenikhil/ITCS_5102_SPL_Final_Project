import React, { Fragment } from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'
import AppBody from '../../components/app-body'
import RequestStatus from '../../components/request-status'
import HowToUse from '../how-to-run'
import './index.css'

function Home() {
  return (
    <Fragment>
      <Header/>
      <section id="home" className="hero is-large is-link">
                <div className="hero-body">
                <p className="title is-size-2 is-family-sans-serif">
                    Youtube Speech to Text Downloader<span ></span><text className='ml-1 is-size-6'></text>
                </p>
                <p className="subtitle is-size-5 is-family-sans-serif">
                by Pallavi Shirodkar
                </p>
                <p className="subtitle is-size-6 is-family-sans-serif">Using MS azure congitive service for language managed service, we have integrated Speech -to- Text in this application.</p>                
            </div>
        </section>     
        <AppBody />   
        <RequestStatus />
        <HowToUse />
        <Footer/>
    </Fragment>
  )
}

export default Home