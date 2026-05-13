import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../components/useScrollReveal'
import './Services.css'

const services = [
  {
    num: '01',
    title: 'Meta Ads Management',
    bullets: [
      'Targeted campaigns for maximum conversions using AI and audience insights.',
      'Custom segmentation and remarketing strategies that drive results.',
      'Creative ad copywriting and multi-platform management.',
      'Automation tools to save time and boost efficiency.',
    ],
  },
  {
    num: '02',
    title: 'Web Development',
    bullets: [
      'Fully responsive websites for all devices and browsers.',
      'Secure coding, HTTPS integration, and performance audits.',
      'E-commerce stores with payment gateways and admin dashboards.',
      'Optimized backend and API-based architectures.',
    ],
  },
  {
    num: '03',
    title: 'Web & UI Design',
    bullets: [
      'Clean, elegant, and modern designs aligned with brand identity.',
      'Mobile-first approach ensuring flawless UX.',
      'Prototypes, wireframes, and interactive mockups.',
      'Consistent layouts across all digital assets.',
    ],
  },
  {
    num: '04',
    title: 'WordPress Development',
    bullets: [
      'Speed-optimized and SEO-friendly WordPress sites.',
      'Custom themes and plugins for any business type.',
      'Easy content management with secure backups.',
      'Maintenance, updates, and security improvements.',
    ],
  },
  {
    num: '05',
    title: 'Video Editing',
    bullets: [
      'Creative editing, transitions, and cinematic effects.',
      'Social media-optimized videos for Reels and YouTube.',
      'Audio mixing, background music, and voiceovers.',
      'Fast delivery with professional color grading.',
    ],
  },
  {
    num: '06',
    title: 'Digital Strategy',
    bullets: [
      'Data-driven marketing with measurable ROI.',
      'SEO optimization and keyword research for organic growth.',
      'Competitor analysis and trend forecasting.',
      'Conversion-focused strategies and lead nurturing.',
    ],
  },
]

export default function Services() {
  useScrollReveal()

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">What I Offer</span>
          <h1>My <span>Services</span></h1>
          <div className="divider" />
          <p className="page-hero-sub">Complete digital solutions — from ad campaigns to full-stack development, design, and strategy.</p>
        </div>
      </section>

      <section className="services-full">
        <div className="container">
          {services.map((s, i) => (
            <div key={s.num} className={`service-row reveal ${i % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="service-num">{s.num}</div>
              <div className="service-content">
                <h2>{s.title}</h2>
                <div className="divider" />
                <ul>
                  {s.bullets.map((b, j) => (
                    <li key={j}><span className="li-dot">▸</span>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  )
}
