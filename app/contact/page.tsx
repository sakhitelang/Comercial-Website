'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Clock, CheckCircle, AlertCircle, Instagram, Linkedin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
  }),
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [state, setState] = useState<FormState>({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState({ loading: true, success: false, error: null });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setState({ loading: false, success: false, error: data.error || 'Something went wrong.' });
        return;
      }

      setState({ loading: false, success: true, error: null });
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setState({ loading: false, success: false, error: 'Network error. Please try again.' });
    }
  };

  const inputClass =
    'w-full px-4 py-3 bg-white/4 border border-white/10 rounded-xl text-black placeholder-gray-400 font-body text-sm focus:outline-none focus:border-industrial-orange/50 focus:bg-white/6 transition-all duration-200';

  return (
    <div className="min-h-screen bg-charcoal text-warm-beige">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative industrial-texture">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-industrial-orange text-sm font-body tracking-widest uppercase mb-4 block">
              Reach Out
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Contact{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange to-amber-warm">
                Us
              </span>
            </h1>
            <p className="text-warm-beige/60 font-body text-lg">
              Let's discuss your die, pattern, or precision engineering requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Info Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-5"
          >
            <h2 className="font-display text-3xl font-bold mb-8 heading-underline">
              Get In Touch
            </h2>

            {[
              {
                icon: MapPin,
                title: 'Our Address',
                content: 'Plot No 31, Opp. Savali RTO Office,\nMIDC Kupwad, Sangli, Savali,\nMaharashtra 416436',
                link: null,
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+91 95591 33771',
                link: 'tel:+919559133771',
              },
              {
                icon: Instagram,
                title: 'Instagram',
                content: '@shreeshaengineeringworks',
                link: 'https://www.instagram.com/shreeshaengineeringworks?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
              },
              {
                icon: Linkedin,
                title: 'LinkedIn',
                content: 'Shreesha Engineering Works',
                link: 'https://www.linkedin.com/in/shreesha-engineeringworks-b477482a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkgm3MQ3ohu8dfXTGh7a6QBza2uKI6p_c9n1j_SNC_5IqfI1L-q5B1gMQBpM_aem_QvOMYojGxYQvH2UoN-QpNg',
              },
              {
                icon: Clock,
                title: 'Business Hours',
                content: 'Monday – Saturday\nOpen · Closes 11:30 PM',
                link: null,
              },
            ].map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-5 p-5 glass-card rounded-2xl border border-white/8 hover:border-industrial-orange/25 transition-all"
              >
                <div className="w-12 h-12 bg-industrial-orange/15 rounded-xl flex items-center justify-center shrink-0">
                  <info.icon size={20} className="text-industrial-orange" />
                </div>
                <div>
                  <div className="text-warm-beige/50 text-xs font-body uppercase tracking-wider mb-1">
                    {info.title}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-warm-beige font-body font-medium hover:text-industrial-orange transition-colors whitespace-pre-line"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-warm-beige font-body font-medium whitespace-pre-line">
                      {info.content}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-white/8 h-52 mt-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.123!2d74.5!3d16.866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzU3LjYiTiA3NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
          >
            <div className="glass-card rounded-3xl p-8 border border-white/8">
              <h2 className="font-display text-2xl font-bold mb-2">Send an Inquiry</h2>
              <p className="text-warm-beige/50 font-body text-sm mb-8">
                Fill in the form and our team will reach out within 24 hours.
              </p>

              {/* Success message */}
              {state.success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/30 rounded-xl mb-6"
                >
                  <CheckCircle size={20} className="text-green-400 shrink-0" />
                  <p className="text-green-400 text-sm font-body">
                    Thank you! Your inquiry has been received. We'll contact you soon.
                  </p>
                </motion.div>
              )}

              {/* Error message */}
              {state.error && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl mb-6"
                >
                  <AlertCircle size={20} className="text-red-400 shrink-0" />
                  <p className="text-red-400 text-sm font-body">{state.error}</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-warm-beige/60 text-xs font-body uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-warm-beige/60 text-xs font-body uppercase tracking-wider mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-warm-beige/60 text-xs font-body uppercase tracking-wider mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-warm-beige/60 text-xs font-body uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your requirement — type of die, pattern material, quantity, drawings available, etc."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.loading}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-industrial-orange hover:bg-amber-warm disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-industrial-orange/25 font-body"
                >
                  {state.loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
