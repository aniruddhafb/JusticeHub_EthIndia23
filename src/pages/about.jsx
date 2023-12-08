import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const about = () => {
    return (
        <>
            {/* navbar  */}
            <header className="header_section long_section px-0">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" href="/">
                        <span>
                            JusticeHub
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/features">Features</a>
                                </li>
                            </ul>
                        </div>
                        <div className="quote_btn-container">
                            <Link href="/dashboard">
                                <span>
                                    Signup
                                </span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="about_section layout_padding long_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="/about-img.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Us
                                    </h2>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="furniture_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Supported Chains
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum obcaecati aliquid magni sint dicta maxime laborum consequatur! Deserunt minus nostrum excepturi eligendi voluptatum laboriosam cupiditate.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    {/* <img src="images/f1.png" alt=""/> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Polygon
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="box">
                                <div className="img-box">
                                    {/* <img src="images/f2.png" alt=""> */}
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Base
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* footer  */}
            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> 2023 JusticeHub - Built during <a href="https://ethindia2023.devfolio.co/" target='_blank'>Ethindia 2023 Hackathon</a>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default about