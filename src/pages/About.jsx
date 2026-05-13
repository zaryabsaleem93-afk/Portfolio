import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../components/useScrollReveal'
import './About.css'

const services = [
  { icon: '◈', title: 'Meta Ads Management', desc: 'Data-driven strategies, precise targeting, and campaign optimization to maximize ROI.' },
  { icon: '⬡', title: 'Web Development', desc: 'Modern, responsive, and secure websites tailored to your brand.' },
  { icon: '◉', title: 'Web Design', desc: 'Creative layouts and user-focused designs that deliver a premium experience.' },
  { icon: '◆', title: 'Graphics Design', desc: 'Unique visuals, logos, and branding materials that make your brand unforgettable.' },
  { icon: '▣', title: 'WordPress Development', desc: 'Custom WordPress themes and plugins crafted for performance and simplicity.' },
  { icon: '◇', title: 'Digital Marketing', desc: 'A full-funnel approach to SEO, social media, and paid campaigns that drive growth.' },
]

export default function About() {
  useScrollReveal()

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Who I Am</span>
          <h1>About <span>Zaryab</span></h1>
          <div className="divider" />
        </div>
      </section>

      <section className="about-main">
        <div className="container">
          <div className="about-grid">
            <div className="about-image reveal">
              <img
                src="https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-07-at-5.37.06-PM.jpeg"
                alt="Muhammad Zaryab Saleem"
              />
              <div className="about-image-label">
                <span>Muhammad Zaryab Saleem</span>
                <small>Web Developer · Digital Strategist</small>
              </div>
            </div>
            <div className="about-content">
              <div className="reveal">
                <span className="section-label">My Story</span>
                <h2>My Personal <span>Expertise</span></h2>
                <div className="divider" />
                <p>My professional journey began with <strong>Meta Ads</strong>. With years of hands-on experience, I've helped businesses achieve high-performing campaigns and measurable results.</p>
                <p>Since then I've expanded into <strong>web development, design, graphics, and video production</strong>, enabling me to deliver complete digital solutions that empower brands and drive sustainable growth.</p>
              </div>
              <div className="about-vision reveal">
                <h3>My Vision</h3>
                <p>To empower businesses with innovative digital solutions. By combining creativity and technical expertise, I aim to be a trusted partner for brands seeking sustainable growth in the modern digital world.</p>
              </div>
              <div className="about-contact-info reveal">
                <div className="info-row">
                  <span>Email</span>
                  <a href="mailto:zaryab@zaryabsaleem.com">zaryab@zaryabsaleem.com</a>
                </div>
                <div className="info-row">
                  <span>Phone</span>
                  <a href="tel:923250325386">0325 0325386 · 0344 4535820</a>
                </div>
                <div className="info-row">
                  <span>Location</span>
                  <span>Saddar Street, Shalimar Town, Lahore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What I Offer</span>
            <h2>My <span>Services</span></h2>
            <div className="divider" />
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className={`service-item reveal reveal-delay-${(i % 3) + 1}`}>
                <div className="service-icon">{s.icon}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
