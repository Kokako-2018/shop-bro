import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Home = () => {
    return (
      <div>
        <section className="hero is-small is-primary" >
            {/* <!-- Hero head: will stick at the top --> */}
            <div className="hero-head" id="navbar-background">
                <nav className="navbar">
                    <div className="container">
                    <div className="navbar-brand">
                        <div className="container">

                            <h1 className="title is-2" id="title-font">
                                Shop-Bro
                            </h1>
                        </div>
                        <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active">
                            Settings
                        </a>
                        <a className="navbar-item">
                            Savings
                        </a>
                        <a className="navbar-item">
                            Feedback
                        </a>
                    </div>
                    </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Hero content: will be in the middle --> */}
            {/* <hr /> */}
            <div className="hero-body">
                <div className="container has-text-centered">
                <h2 className="subtitle">
                Making sure you stick to your shopping budget so you can smash your savings goals!
                </h2>
                </div>
            </div>
        </section>
      </div>
    )
}

export default Home
