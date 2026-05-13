import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../components/useScrollReveal'
import './Projects.css'

const projects = [
  {
    name: 'ChargerWalay',
    desc: 'E-commerce platform for mobile accessories, built for speed, elegance, and customer convenience.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-1.33.18-PM.jpeg',
    url: 'https://chargerwalay.com',
    tag: 'E-Commerce',
  },
  {
    name: 'Tasheel-ul-Khutabaa',
    desc: 'Educational Islamic site with modern design, responsive structure, and optimized readability.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-11.49.48-AM.jpeg',
    url: 'https://tasheel-ul-khutabaa.com/',
    tag: 'Education',
  },
  {
    name: 'Soban Babar',
    desc: 'Personal portfolio and blog website for a content creator, with a smooth and modern UI.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-1.23.40-PM.jpeg',
    url: 'https://sobanbabar.com/',
    tag: 'Portfolio',
  },
  {
    name: 'Webtools5',
    desc: 'Free Online Tools – PDF Converter, Calculators & File Tools, Word to PDF conversion.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/12/Gemini_Generated_Image_58a0gc58a0gc58a0.png',
    url: 'https://webtools5.com/',
    tag: 'Web App',
  },
  {
    name: 'Sabir Sabri',
    desc: 'Professional palmist and spiritual consultant website with elegant layout and appointment booking.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-1.24.22-PM.jpeg',
    url: 'https://sabirsabri.com/',
    tag: 'Consultant',
  },
  {
    name: 'Amin Cosmetic Surgery',
    desc: 'Medical and cosmetic clinic site featuring clean layout and appointment booking system.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-11.49.16-AM.jpeg',
    url: 'https://amincosmeticsurgery.net/',
    tag: 'Healthcare',
  },
  {
    name: 'Overseas Pakistanis Forum',
    desc: 'Community-based website for overseas Pakistanis offering resources and networking features.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-1.26.19-PM.jpeg',
    url: 'https://www.overseaspakistanisforum.com/',
    tag: 'Community',
  },
  {
    name: 'Old Ravians World',
    desc: 'Alumni networking portal with event management, blog, and member registration tools.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-1.27.54-PM.jpeg',
    url: 'https://oldraviansworld.com/',
    tag: 'Community',
  },
  {
    name: 'Konsult LLC',
    desc: 'Professional consulting website built for credibility, clarity, and strong online presence.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-1.28.48-PM.jpeg',
    url: 'https://www.konsultllc.us/',
    tag: 'Business',
  },
  {
    name: 'Riva Interactive',
    desc: 'Game development and tech service platform designed for innovation and creativity.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-11.47.57-AM.jpeg',
    url: 'https://rivainteractive.com/',
    tag: 'Tech',
  },
  {
    name: 'Tabaruk',
    desc: 'Elegant Islamic e-commerce store offering quality products with a premium interface.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-25-at-1.29.45-PM.jpeg',
    url: 'https://www.tabaruk.pk/',
    tag: 'E-Commerce',
  },
  {
    name: 'HN Herbals',
    desc: 'E-commerce store offering quality herbal products with a premium interface.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2026/04/Screenshot-2026-04-28-161528.png',
    url: 'https://hnherbals.com/',
    tag: 'E-Commerce',
  },
  {
    name: 'Bilal Garments',
    desc: 'Elegant clothing e-commerce store offering quality fashion products.',
    img: 'https://zaryabsaleem.com/wp-content/uploads/2026/04/Screenshot-2026-04-28-162333.png',
    url: 'https://bilalgarments.com.pk/',
    tag: 'E-Commerce',
  },
]

export default function Projects() {
  useScrollReveal()

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Portfolio</span>
          <h1>My <span>Projects</span></h1>
          <div className="divider" />
          <p className="page-hero-sub">A showcase of professional web projects — from e-commerce and portfolios to business and educational websites.</p>
        </div>
      </section>

      <section className="projects-page">
        <div className="container">
          <div className="projects-full-grid">
            {projects.map((p, i) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className={`proj-card reveal reveal-delay-${(i % 3) + 1}`}
              >
                <div className="proj-img">
                  <img src={p.img} alt={p.name} />
                  <div className="proj-overlay">
                    <span className="proj-visit">Visit Site ↗</span>
                  </div>
                  <span className="proj-tag">{p.tag}</span>
                </div>
                <div className="proj-body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
