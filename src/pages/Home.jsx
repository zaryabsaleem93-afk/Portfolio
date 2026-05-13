import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../components/useScrollReveal'
import './Home.css'

const PROFILE_IMG = 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-07-at-5.37.06-PM-747x1024.jpeg'

const expertise = [
  {
    icon: '◈',
    title: 'Meta Ads',
    desc: 'Running precise ad campaigns that attract the right audience and deliver measurable results.',
  },
  {
    icon: '⬡',
    title: 'Web Development',
    desc: 'Creating responsive, secure websites with smooth navigation and reliable performance.',
  },
  {
    icon: '◉',
    title: 'WordPress',
    desc: 'Speed-optimized, SEO-ready WordPress sites with custom themes and plugins.',
  },
]

const whyMe = [
  { title: 'Trusted Expertise', desc: 'Years of IT experience delivering dependable solutions tailored to your needs.' },
  { title: 'Fast & Secure', desc: 'Systems that are quick, safe, and ready to keep your work running smoothly.' },
  { title: 'Client First', desc: 'Your goals guide our work. Clear plans and support that grow with you.' },
  { title: 'Scalable Growth', desc: 'From startups to enterprises, services that expand as your business grows.' },
]

const featuredProjects = [
  {
    name: 'Amin Cosmetic Surgery',
    desc: 'Medical and cosmetic clinic site with clean layout and appointment booking.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-11.49.16-AM.jpeg',
    url: 'https://amincosmeticsurgery.net/',
  },
  {
    name: 'Riva Interactive',
    desc: 'Game development and tech service platform built for innovation and creativity.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-11.47.57-AM.jpeg',
    url: 'https://rivainteractive.com/',
  },
  {
    name: 'Tabaruk',
    desc: 'Elegant Islamic e-commerce store offering quality products with a premium interface.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-1.29.45-PM.jpeg',
    url: 'https://www.tabaruk.pk/',
  },
]

export default function Home() {
  useScrollReveal()

  return (
    <PageTransition>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-lines" aria-hidden>
          {[...Array(6)].map((_, i) => <div key={i} className="bg-line" style={{ animationDelay: `${i * 0.4}s` }} />)}
        </div>
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>
              Web <span>Developer</span><br />& Digital<br />Strategist
            </h1>
            <p>I'm <strong>Zaryab Saleem</strong> — blending technical precision with creative design to build high-performing digital experiences that drive real business results.</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn">View Projects</Link>
              <Link to="/contact" className="btn btn-outline">Let's Talk</Link>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-image-frame">
              <img src={PROFILE_IMG} alt="Zaryab Saleem" />
              <div className="hero-badge">
                <span>15+</span>
                <small>Projects Delivered</small>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* ABOUT STRIP */}
      <section className="about-strip">
        <div className="container">
          <div className="strip-inner reveal">
            <span className="section-label">Who I Am</span>
            <h2>Passionate about crafting <span>digital experiences</span> that make a difference</h2>
            <Link to="/about" className="btn btn-outline">More About Me</Link>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="expertise-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What I Do</span>
            <h2>My <span>Expertise</span></h2>
            <div className="divider" />
          </div>
          <div className="expertise-grid">
            {expertise.map((e, i) => (
              <div key={e.title} className={`expertise-card reveal reveal-delay-${i + 1}`}>
                <div className="card-icon">{e.icon}</div>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ME */}
      <section className="why-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Why Choose Me</span>
            <h2>My IT <span>Services</span></h2>
            <div className="divider" />
          </div>
          <div className="why-grid">
            {whyMe.map((w, i) => (
              <div key={w.title} className={`why-card reveal reveal-delay-${i + 1}`}>
                <div className="why-num">{String(i + 1).padStart(2, '0')}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="projects-preview">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Work</span>
            <h2>Recent <span>Projects</span></h2>
            <div className="divider" />
          </div>
          <div className="projects-grid">
            {featuredProjects.map((p, i) => (
              <a key={p.name} href={p.url} target="_blank" rel="noreferrer" className={`project-card reveal reveal-delay-${i + 1}`}>
                <div className="project-img-wrap">
                  <img src={p.img} alt={p.name} />
                  <div className="project-overlay">
                    <span>View Site ↗</span>
                  </div>
                </div>
                <div className="project-info">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
          <div className="projects-cta reveal">
            <Link to="/projects" className="btn">All Projects</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner reveal">
            <h2>Ready to build something <span>great?</span></h2>
            <p>Let's discuss your project and create a digital solution tailored to your goals.</p>
            <Link to="/contact" className="btn">Get In Touch</Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
