import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../components/useScrollReveal'
import './Academic.css'

const education = [
  {
    level: 'School',
    institution: 'New Lahore Public High School',
    points: [
      'Completed primary and secondary education with a strong academic foundation.',
      'Participated in extracurricular activities like debates and science fairs.',
      'Acquired basic computer skills and early exposure to IT concepts.',
      'Developed communication, teamwork, and problem-solving skills.',
    ],
  },
  {
    level: 'Intermediate (ICS)',
    institution: 'Aspire Group of Colleges',
    points: [
      'Studied Computer Science, Mathematics, Physics, and English.',
      'Completed projects in website design, coding, and databases.',
      'Participated in inter-college workshops and competitions.',
      'Learned time management, problem-solving, and technical skills.',
    ],
  },
  {
    level: 'University',
    institution: 'National College of Business Administration & Economics (NCBA&E)',
    points: [
      'Currently in 6th semester of Computer Sciences.',
      'Learning programming fundamentals, data structures, and algorithms.',
      'Engaging in hands-on projects involving software development and problem-solving.',
      'Developing skills in databases, web technologies, and computer system design.',
    ],
    current: true,
  },
]

export default function Academic() {
  useScrollReveal()

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Education</span>
          <h1>Academic <span>Profile</span></h1>
          <div className="divider" />
        </div>
      </section>

      <section className="academic-section">
        <div className="container">
          <div className="timeline">
            {education.map((e, i) => (
              <div key={e.institution} className={`timeline-item reveal reveal-delay-${i + 1}`}>
                <div className="timeline-marker">
                  <div className={`marker-dot ${e.current ? 'current' : ''}`} />
                  {i < education.length - 1 && <div className="marker-line" />}
                </div>
                <div className="timeline-content">
                  <span className="timeline-level">{e.level}</span>
                  <h2>{e.institution}</h2>
                  {e.current && <span className="current-badge">Currently Enrolled</span>}
                  <div className="divider" />
                  <ul>
                    {e.points.map((p, j) => (
                      <li key={j}><span>▸</span>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
