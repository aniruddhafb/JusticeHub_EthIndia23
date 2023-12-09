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

            <section className="furniture_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Features
                        </h2>
                        <p>
                            Here are all the features and functionalities which JusticeHub offers to its users.
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
                                        File Complaints
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
                                        View Complaints
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