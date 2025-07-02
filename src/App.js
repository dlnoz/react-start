import ArrowRight from "./assets/icons"
import Logo from "./assets/images/logo-img.png"
import Bro from "./assets/images/hero.img.png"
import HeroIcon1 from "./assets/images/hero.icon1.png"
import HeroIcon2 from "./assets/images/hero.icon2.png"
import HeroIcon3 from "./assets/images/hero.icon3.png"
import HeroIcon4 from "./assets/images/hero.icon4.png"

function App() {
  return(
    <>
      <header className="site-header">
        <div className="containers header">
          <a className="header-logo-link" href="#">
            <img src={Logo} alt="Site Logo" width={195} height={19}/>
          </a>
          <nav className="navbar">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Blog</a>
            <a href="#">
              Book a call
              <ArrowRight/>
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="containers hero">
            <div className="hero-content-wrapper">
              <h1><span>I design products</span>that delight and inspire people.</h1>
              <p>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
              <div className="hero-content-btn-wrapper">
                <button>Book a call</button>
                <a href="#">Download CV
                  <ArrowRight/>
                </a>
              </div>
            </div>
            <img src={Bro} alt="Bro img" width={500} height={595}/>
          </div>
        </section>

        <section>
          <div className="containers second-hero">
            <p className="hero-content">Trusted by</p>
            <div className="hero-images-wrapper">
              <img src={HeroIcon1} alt="Hero Icons" width={141} height={32}/>
              <img src={HeroIcon2} alt="Hero Icons" width={141} height={32} />
              <img src={HeroIcon3} alt="Hero Icons" width={141} height={32}/>
              <img src={HeroIcon4} alt="Hero Icons" width={141} height={32}/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App;
