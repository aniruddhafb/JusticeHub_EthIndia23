import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import BtnModal from './components/BtnModal'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="hero_area">
      <Head>
        <title>JusticeHub - Navigate Justice Effortlessly </title>
        <meta
          name="description"
          content="JusticeHub - Navigate Justice Effortlessly "
        />
      </Head>

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

      {/* main  */}
      <section className="slider_section long_section">
        <div id="customCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container ">
                <div className="row">
                  <div className="col-md-5">
                    <div className="detail-box">
                      <h1>
                        Navigate Justice Effortlessly with JusticeHub !!
                      </h1>
                      <p>
                        File complaints, view fir public records, view challans, consult advocates and many more things in one place 😎
                      </p>
                      <div className="btn-box">
                        <Link href="/about" className="btn1">
                          About
                        </Link>
                        <Link href="/features" className="btn2">
                          Features
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="img-box">
                      <img src="/law.jpg" alt="" style={{ height: "560px" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_section layout_padding long_section" style={{ marginTop: "25px" }}>
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
                  Justicehub is a platform where users can file public and personal complaints, incentivize the system for priority, view  other complains with evidences stored on blockchain, can consult advocates, and many more at one place.
                  Building the impossible 💪
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="furniture_section layout_padding">
        <div className="container">
          <div className="heading_container" style={{ display: "flex", alignItems: "center" }}>
            <h2>
              Supported Chains
            </h2>
            <p>
              We are deployed on the following chains
            </p>
          </div>
          <div className="row" style={{ justifyContent: "center", textAlign: "center" }}>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="base.jpeg" alt="" style={{ borderRadius: "50%" }} />
                </div>
                <div className="detail-box">
                  <h5>
                    Base Blockchain
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="celo.jpeg" alt="" style={{ borderRadius: "50%" }} />
                </div>
                <div className="detail-box">
                  <h5>
                    Celo Blockchain
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="furniture_section layout_padding">
        <div className="container">
          <div className="heading_container" style={{ display: "flex", alignItems: "center" }}>
            <h2>
              Integrated Technologies
            </h2>
            <p>
              We have integrated the following technologies on our platform
            </p>
          </div>
          <div className="row" style={{ justifyContent: "center", textAlign: "center" }}>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="anon.png" alt="" style={{ borderRadius: "50%" }} />
                </div>
                <div className="detail-box">
                  <h5>
                    Anon Adhaar
                  </h5>
                  <p>We are using anon-adhaar SDK for verifying the citizenship of our users, only verified users can login and enter the dashboard</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="box">
                <div className="img-box">
                  <img src="push.jpeg" alt="" style={{ borderRadius: "50%" }} />
                </div>
                <div className="detail-box">
                  <h5>
                    Push Protocol
                  </h5>
                  <p>We are using push protocol for sending important notifications, we have also integrated push chat to have conversation with advocates</p>
                </div>
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
                <img src="/jud.png" style={{ height: "250px", width: "70%" }} />
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
                  File a complaint on justicehub and get peoples support on public complaints, also file your personal complaints easily, view other complaints with full details and evidences secured on blockchain, incentivize the system to get your complaints prioritized 💪
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
                  Raised complaints are filed as FIR's if acknowledged by the respected police authorities, view other fir records and their status as well
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
                  Consult advocates for your cases via video calls, incentivize advocates to figure out your case, etc.
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
            &copy; <span id="displayYear"></span> 2023 JusticeHub - Built during <a href="https://ethindia2023.devfolio.co/" target='_blank' style={{ color: "gray" }}>Ethindia 2023 Hackathon</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
