import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BtnModal from './components/BtnModal'

const about = () => {
    return (
        <>
            {/* navbar  */}
            <header className="header_section long_section px-0">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <Link className="navbar-brand" href="/">
                        <img src='/logosm.png' style={{ height: "70%", width: "70%" }} />
                    </Link>
                    <button className="navbar-toggler" type="button">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <Link className="nav-link" href="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/features">Features</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="quote_btn-container">
                            <BtnModal />
                        </div>
                        <div>
                        </div>
                    </div>
                </nav>
            </header>

            <section className="about_section layout_padding long_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="/jud.png" style={{height:"250px", width:"70%"}} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        File a complaint
                                    </h2>
                                </div>
                                <p>
                                    File a complaint on justicehub and get peoples support on public complaints, also file your personal complaints easily 💪
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_section layout_padding long_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        View FIR's
                                    </h2>
                                </div>
                                <p>
                                Raised complaints are filed as FIR's if accepted by the respected police authorities,  view other peoples fir records and their status aswell
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="/about-img.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_section layout_padding long_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="/adv.png" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        Consult Advocates
                                    </h2>
                                </div>
                                <p>
                                    Consult advocates for your cases, incentivize advocates to figure out your case, etc.
                                </p>
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