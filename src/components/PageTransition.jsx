import { useEffect, useRef } from 'react'
import './PageTransition.css'

export default function PageTransition({ children }) {
  const ref = useRef()

  useEffect(() => {
    const el = ref.current
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.5s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      })
    })
    // Scroll to top on page change
    window.scrollTo(0, 0)
  }, [])

  return <div ref={ref} className="page-transition">{children}</div>
}
