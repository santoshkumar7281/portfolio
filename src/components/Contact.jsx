import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  emailjsConfig,
  personalInfo,
  socialLinks,
} from '../data/portfolioData'

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const formData = new FormData(formRef.current)
    const firstName = formData.get('first_name')?.toString().trim() || ''
    const lastName = formData.get('last_name')?.toString().trim() || ''
    const email = formData.get('user_email')?.toString().trim() || ''
    const message = formData.get('message')?.toString().trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      const subject = `Portfolio Contact from ${firstName} ${lastName}`
      const body = `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      const mailtoUrl = `mailto:${personalInfo.emails.primary}?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`

      window.open(mailtoUrl, '_blank')
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey,
      )
      setStatus('success')
      formRef.current?.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Behind: Parallax Giant Background Typography */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-12 pointer-events-none z-0 flex justify-center overflow-hidden"
      >
        <div
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5 whitespace-nowrap"
        >
          Contact
        </div>
      </motion.div>

      {/* In front: Red Aligned Card */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 ml-auto rounded-tl-3xl relative z-10 shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between mb-12">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-white/80 font-bold">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-xs font-mono uppercase tracking-wider border border-white/20 transition-all flex items-center gap-2"
            >
              <span>DM on Instagram</span>
              <svg
                className="w-3.5 h-3.5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-10"
        >
          {/* Two-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column: Underline Inputs */}
            <div className="flex flex-col gap-8 justify-between">
              <div>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  placeholder="First Name *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or inquiry... *"
                required
                className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/80 text-white focus:outline-none focus:border-white resize-none min-h-[120px] md:h-full transition-colors"
              />
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="space-y-6 pt-4 border-t border-white/20">
            {/* Permission Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer text-sm text-white/90 select-none">
              <input
                type="checkbox"
                required
                className="w-4 h-4 mt-0.5 rounded border-white/40 bg-white/10 text-black focus:ring-0 cursor-pointer accent-black shrink-0"
              />
              <span>
                I consent to having this website store my submitted information
                so they can respond to my inquiry.
              </span>
            </label>

            {/* Inbox Notice */}
            <p className="text-xs text-white/70 leading-relaxed">
              Your message will be sent directly to my inbox. I typically
              respond within 24-48 hours.
            </p>

            {/* Urgent Email Direct Link */}
            <p className="text-xs text-white/80">
              Urgent? Email directly at{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline font-bold text-white hover:text-black transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
            </p>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`rounded-full border px-8 py-3.5 font-bold transition-all duration-300 inline-flex items-center justify-center gap-3 ${
                  status === 'sending'
                    ? 'bg-black/30 border-white/20 text-white/60 cursor-not-allowed'
                    : status === 'success'
                      ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg'
                      : status === 'error'
                        ? 'bg-red-950 border-red-800 text-red-200 shadow-lg'
                        : 'bg-white/10 hover:bg-white text-white hover:text-[#ff2a2a] border-white/40 group cursor-pointer shadow-md'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}

                {status === 'success' && <span>Sent Successfully ✓</span>}

                {status === 'error' && <span>Failed — Try Again</span>}

                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 fill-none stroke-currentColor stroke-2 group-hover:translate-x-1.5 transition-transform duration-300"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

