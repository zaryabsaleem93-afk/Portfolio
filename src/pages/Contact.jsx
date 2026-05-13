import { useState } from 'react'
import PageTransition from '../components/PageTransition'
import { useScrollReveal } from '../components/useScrollReveal'
import './Contact.css'

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
]

export default function Contact() {
  useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = () => {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  return (
    <PageTransition>
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Get In Touch</span>
          <h1>Contact <span>Us</span></h1>
          <div className="divider" />
          <p className="page-hero-sub">Whether you're looking for digital marketing, website development, or professional consultation — I'm here to assist.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* INFO PANEL */}
            <div className="contact-info reveal">
              <div className="info-block">
                <span className="section-label">Contact Details</span>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">✉</div>
                    <div>
                      <small>Email</small>
                      <a href="mailto:zaryab@zaryabsaleem.com">zaryab@zaryabsaleem.com</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">☎</div>
                    <div>
                      <small>Phone</small>
                      <a href="tel:923250325386">0325 0325386</a>
                      <a href="tel:03444535820">0344 4535820</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">◎</div>
                    <div>
                      <small>Office</small>
                      <span>Saddar Street, Shalimar Town, Lahore</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hours-block">
                <span className="section-label">Business Hours</span>
                <table className="hours-table">
                  <tbody>
                    {hours.map(h => (
                      <tr key={h.day}>
                        <td>{h.day}</td>
                        <td className={h.time === 'Closed' ? 'closed' : ''}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="social-block">
                <span className="section-label">Follow Me</span>
                <div className="contact-socials">
                  <a href="https://wa.me/923250325386" target="_blank" rel="noreferrer">WhatsApp</a>
                  <a href="https://www.facebook.com/zaryabsaleem438" target="_blank" rel="noreferrer">Facebook</a>
                  <a href="https://www.linkedin.com/in/zaryab-saleem-bb7199367/" target="_blank" rel="noreferrer">LinkedIn</a>
                  <a href="https://www.instagram.com/zaryabsaleem438/" target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="contact-form-wrap reveal">
              {sent ? (
                <div className="form-success">
                  <div className="success-icon">✓</div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <div className="contact-form">
                  <span className="section-label">Send a Message</span>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name</label>
                      <input name="name" value={form.name} onChange={handle} placeholder="Your name" />
                    </div>
                    <div className="form-group">
                      <label>Email Address</label>
                      <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+92 xxx xxxxxxx" />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input name="subject" value={form.subject} onChange={handle} placeholder="What's this about?" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={6} placeholder="Tell me about your project..." />
                  </div>
                  <button className="btn" onClick={submit}>Send Message →</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
