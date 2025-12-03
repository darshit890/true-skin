"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [visible, setVisible] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => {
        setEmail("")
        setIsSubscribed(false)
      }, 2000)
    }
  }

  return (
    <footer className="w-full relative">
      {/* Background Image Section */}
      <div className="w-full h-64 md:h-80 lg:h-96">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url(/footer.jpg)",
          }}
        />
      </div>

      <div className="relative">
        <div ref={overlayRef} className="absolute top-0 right-0 transform -translate-y-1/2 w-full md:w-1/2 px-4 md:px-8 lg:px-16 z-20">
          <div
            className={`p-8 md:p-28 bg-gray-900 rounded-2xl text-center transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              <span className={`inline-block transition-all ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>Hear More</span>
              <br />
              <span className={`inline-block transition-all delay-150 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>From Us</span>
            </h2>

            <p className={`text-gray-400 text-sm mb-8 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>Get the latest news about skincare tips and new products.</p>

            <form onSubmit={handleSubscribe} className="w-full space-y-6">
              {/* Email Input */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ENTER YOUR EMAIL"
                  className="w-full px-4 py-3 md:py-4 rounded-full border border-gray-500 bg-transparent text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white transition-colors"
                  required
                />
              </div>

              {/* Subscribe Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-600 hover:bg-gray-700 text-white flex items-center justify-center transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Subscribe Label */}
              <p className={`text-gray-400 text-xs uppercase tracking-wider transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                {isSubscribed ? "Subscribed!" : "Subscribe"}
              </p>
            </form>

            {/* Disclaimer */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <p className={`text-gray-500 text-xs transition-all duration-700 delay-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                No Spam, only quality articles to help you be more radiant. You can opt out anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row bg-white pt-16 md:pt-20">
          {/* Left Section - Navigation Links */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              {/* Explore Column */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Explore</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      Shop
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      Philosophy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      Gallery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      Journal
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      Sign Up/Login
                    </a>
                  </li>
                </ul>
              </div>

              {/* Follow Us Column */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Follow Us</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Us Column */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Contact Us</h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="mailto:tk@brandsofbia.com"
                      className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      tk@brandsofbia.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+1111-2222-3333"
                      className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      1111-2222-3333
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-white border-t border-gray-200 px-8 md:px-12 lg:px-16 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Brand Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">true.Kind.</h3>
            <p className="text-xs text-gray-600">Clean, Conscious, Clinical Skincare!</p>
            <p className="text-xs text-gray-600">Honest products that truly work</p>
            <p className="text-xs text-gray-500 mt-4">© 2025 TrueKind, All Rights Reserved</p>
          </div>

          {/* Footer Links */}
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Disclaimer
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Credits
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              Website By: Abhishek & Rekha
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
