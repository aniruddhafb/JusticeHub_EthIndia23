import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import BtnModal from './components/BtnModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="hero_area">

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
                        <Link href="/dashboard" className="btn2">
                          Get Started
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="img-box">
                      <img src="/police.png" alt="" style={{height:"560px"}} />
                    </div>
                  </div>
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
    </div>
  )
}
