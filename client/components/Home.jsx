import React from 'react'


const Home = () => {
  return (
    <div>
        <section class="hero is-medium" id="hero-header">
            {/* <!-- Hero head: will stick at the top --> */}
            <div class="hero-head">
                <nav class="navbar" id="navbar-bottom">
                    <div class="container">
                    <div class="navbar-brand">
                        <div class="container">
                            <h1 class="title is-2" id="title-font">
                                Shop-Bro
                            </h1>
                        </div>
                        <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenuHeroA" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item is-active">
                            Settings
                        </a>
                        <a class="navbar-item">
                            Savings
                        </a>
                        <a class="navbar-item">
                            Feedback
                        </a>
                    </div>
                    </div>
                    </div>
                </nav>
            </div>
            {/* <!-- Hero content: will be in the middle --> */}
            {/* <hr /> */}
            <div class="hero-body">
                <div class="container has-text-centered">
                <h2 class="subtitle" id="subtitle">
                Making sure you stick to your shopping budget so you can smash your savings goals!
                </h2>
                </div>
            </div>
        </section>
    </div>
  )    
}


export default Home 