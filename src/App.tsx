import { useState } from 'react'
import SelectedWork from './SelectedWork'

const capabilities = [
  ['Design', 'SolidWorks, Fusion 360, CAD/CAM, GD&T, DFM/DFA'],
  ['Build', 'CNC and manual machining, MIG/TIG, sheet metal, additive'],
  ['Integrate', 'Steppers, servos, sensors, limit switches, wiring'],
  ['Testing', 'Metrology, mechanical testing, diagnostics, metallography'],
  ['Programming', 'Python (working knowledge), Arduino, MATLAB, G-code, UGS'],
]

function Arrow() {
  return <span aria-hidden="true">↗</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)


  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#work">Skip to selected work</a>
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu}>MACK FISHER<span>.</span></a>
        <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Primary navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="/resume/Mack-Fisher-Resume.pdf" target="_blank" rel="noreferrer">Résumé <Arrow /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-backdrop" aria-hidden="true">
            <img src="/images/mack-cb550-portrait-plate-blurred-v2.png" alt="" fetchPriority="high" />
          </div>
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="signal" /> Mechanical engineer · Builder</p>
            <h1 id="hero-title"><span>Mack</span> Fisher</h1>
            <p className="hero-lede">I build mechanical systems from first sketch through fabrication, controls integration, and test.</p>
            <p className="hero-statement">Hardware is the final argument.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See the work <Arrow /></a>
              <a className="text-link" href="mailto:mackfish24@gmail.com">Start a conversation <Arrow /></a>
            </div>
          </div>
          <div className="hero-roles reveal" aria-label="Current education and engineering experience">
            <div className="hero-role">
              <span>01 / Current</span>
              <strong>Penn State Applied Research Laboratory</strong>
              <p>R&D Engineer Intern</p>
            </div>
            <div className="hero-role">
              <span>02 / Education</span>
              <strong>Penn State</strong>
              <p>Mechanical Engineering B.S. · Expected 2029</p>
            </div>
            <div className="hero-role">
              <span>03 / Experience</span>
              <strong>Top Shop Auto</strong>
              <p>Automotive Technician Intern</p>
            </div>
          </div>
        </section>

        <SelectedWork />

        <section id="experience" className="section experience-section">
          <div className="section-heading compact reveal">
            <p className="eyebrow"><span className="index">02</span> Experience</p>
            <h2>Engineering experience</h2>
          </div>
          <div className="timeline reveal">
            <article><div className="timeline-date">Oct 2025–Present</div><div><h3>Penn State Applied Research Laboratory</h3><p>R&D Engineer Intern · Advanced Materials Processing</p></div><p>Developed the cold-spray robot prototype and quantified coating porosity through metallographic preparation and Keyence microscopy.</p></article>
            <article><div className="timeline-date">Oct–Nov 2025</div><div><h3>Nittany Motorsports</h3><p>Chassis & Suspension Subsystems Engineer</p></div><p>Generative design for a titanium suspension endplate and CAD development of a torsional-rigidity test fixture.</p></article>
            <article><div className="timeline-date">Jan–Apr 2025</div><div><h3>Top Shop Auto</h3><p>Automotive Technician Intern</p></div><p>Designed and fabricated approximately six installed components, including printed mounts and a sheet-metal battery box. Supported Camaro modifications, wiring, and vehicle diagnostics.</p></article>
          </div>
        </section>

        <section className="section capabilities-section">
          <div className="section-heading compact reveal">
            <p className="eyebrow"><span className="index">03</span> Capabilities</p>
            <h2>Technical capabilities</h2>
          </div>
          <div className="capability-list reveal">
            {capabilities.map(([title, detail], index) => (
              <div className="capability" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{detail}</p></div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section reveal">
          <p className="eyebrow"><span className="index">04</span> About</p>
          <div className="about-grid">
            <h2>About Mack</h2>
            <div>
              <p>I’m studying mechanical engineering at Penn State, with graduation expected in May 2029. Alongside my coursework, I develop prototypes at the Applied Research Laboratory and build independent mechanical and electromechanical projects.</p>
              <p>I enjoy work that connects design decisions to fabrication and testing. I’m interested in engineering internships in robotics, aerospace, autonomous systems, and advanced manufacturing.</p>
            </div>
          </div>
        </section>

        <section className="contact-section reveal">
          <p className="eyebrow"><span className="signal" /> Open to engineering internships</p>
          <h2>Let’s build<br />{' '}something real.</h2>
          <div className="contact-links">
            <a href="mailto:mackfish24@gmail.com">mackfish24@gmail.com <Arrow /></a>
            <a href="https://www.linkedin.com/in/mackfisher/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="/resume/Mack-Fisher-Resume.pdf" target="_blank" rel="noreferrer">Résumé <Arrow /></a>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Mack Fisher</span><span>Mechanical engineer · Designer · Builder</span></footer>
    </>
  )
}

export default App
