'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Wrench,
  Layers,
  Target,
  ShieldCheck,
  Clock,
  Users,
  Award,
  ChevronRight,
  Phone,
} from 'lucide-react';
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

const services = [
  {
    icon: Wrench,
    title: 'CNC Machining',
    desc: 'High-precision CNC milling and turning services for industrial components with tight tolerances. Our state-of-the-art CNC facility handles projects of all complexities.',
  },
  {
    icon: Layers,
    title: 'Die Manufacturing',
    desc: 'Precision-engineered dies crafted with advanced tooling processes for consistent output and long service life. Press dies, forging dies, and casting dies.',
  },
  {
    icon: Target,
    title: 'Pattern Making',
    desc: 'Bespoke foundry patterns crafted from wood, aluminium, and resin for complex casting geometries. Serving foundries across Maharashtra.',
  },
];

const whyUs = [
  { icon: ShieldCheck, title: 'Quality Assured', desc: 'Every component undergoes rigorous quality checks. First-rate materials with best quality control.' },
  { icon: Clock, title: '15+ Years Experience', desc: 'Skilled workers with decades of hands-on expertise in die and pattern manufacturing.' },
  { icon: Users, title: '150+ Projects', desc: 'Successfully completed 150+ projects in just 3 years across Maharashtra.' },
  { icon: Award, title: 'Metal Specialists', desc: 'We work only with metals. Premium-grade materials for industrial applications.' },
];

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '15+', label: 'Years Experience' },
  { value: '3', label: 'Years Active' },
  { value: '100%', label: 'Quality Assured' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-charcoal text-warm-beige">
      <Navbar />

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden industrial-texture noise-bg">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(245,235,221,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,235,221,0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-industrial-orange/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/6 w-64 h-64 bg-amber-warm/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0}
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8"
              >
                <span className="w-2 h-2 bg-industrial-orange rounded-full animate-pulse" />
                <span className="text-industrial-orange text-sm font-body tracking-wide">
                  MIDC Kupwad, Sangli · Est. 2022 · Metal Specialists
                </span>
              </motion.div>

              <motion.h1
                initial="hidden"
                animate="visible"
                custom={1}
                variants={fadeUp}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-none mb-6"
              >
                Leading CNC Machining & Die Manufacturing Company in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange to-amber-warm">
                  Sangli, Maharashtra
                </span>
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={2}
                variants={fadeUp}
                className="text-warm-beige/60 text-lg font-body leading-relaxed mb-6 max-w-lg"
              >
                Shreesha Engineering is a leading CNC machining and die manufacturing company in Sangli, Maharashtra, providing high-precision engineering solutions to industrial clients across India. Located in MIDC Kupwad, our facility specializes in custom tooling, pattern making, and industrial component manufacturing.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={3}
                variants={fadeUp}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 px-7 py-3.5 bg-industrial-orange hover:bg-amber-warm text-white font-medium rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-industrial-orange/25"
                >
                  Get a Quote
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="flex items-center gap-2 px-7 py-3.5 glass-card border border-white/10 text-warm-beige hover:border-industrial-orange/40 font-medium rounded-xl transition-all duration-300"
                >
                  Our Services
                  <ChevronRight size={18} />
                </Link>
              </motion.div>
            </div>

            {/* Right: Stats card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="glass-card rounded-3xl p-8 border border-white/8 orange-glow">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="bg-white/3 rounded-2xl p-6 border border-white/5 hover:border-industrial-orange/30 transition-colors group"
                    >
                      <div className="font-display text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange to-amber-warm mb-2">
                        {stat.value}
                      </div>
                      <div className="text-warm-beige/50 text-sm font-body">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 p-4 bg-industrial-orange/10 rounded-2xl border border-industrial-orange/20">
                  <Phone size={18} className="text-industrial-orange" />
                  <div>
                    <div className="text-warm-beige/50 text-xs font-body">Call us today</div>
                    <a href="tel:+919559133771" className="text-warm-beige font-medium text-sm font-body hover:text-industrial-orange transition-colors">
                      +91 95591 33771
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT PREVIEW ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-industrial-orange text-sm font-body tracking-widest uppercase mb-4 block">
                Who We Are
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 heading-underline">
                Precision Engineering Services in Maharashtra
              </h2>
              <p className="text-warm-beige/60 font-body leading-relaxed mb-6">
                Founded in 2022 by Mr. Prashant Galgale, Shreesha Engineering specializes in <strong className="text-industrial-orange">metalworking</strong> — crafting high-quality dies and patterns using first-rate materials. Our skilled workers bring <strong className="text-industrial-orange">15+ years of experience</strong> to every project with best quality control assured.
              </p>
              <p className="text-warm-beige/60 font-body leading-relaxed mb-8">
                In just 3 years, we've completed <strong className="text-industrial-orange">150+ projects</strong> for clients across Maharashtra. From complex casting patterns to high-durability press dies, our team delivers precision-engineered solutions that fit perfectly and perform flawlessly.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-industrial-orange hover:text-amber-warm font-medium font-body transition-colors group"
              >
                Learn More About Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Die Shop', desc: 'Press, forging & casting dies', color: 'from-industrial-orange/20 to-amber-warm/10' },
                { label: 'Pattern Shop', desc: 'Wood, aluminium & resin patterns', color: 'from-amber-warm/20 to-industrial-orange/10' },
                { label: 'Machining', desc: 'CNC & conventional machining', color: 'from-industrial-orange/15 to-transparent' },
                { label: 'Repairs', desc: 'Die & pattern restoration', color: 'from-amber-warm/15 to-transparent' },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${item.color} border border-white/8 hover:border-industrial-orange/30 transition-all duration-300`}
                >
                  <h3 className="font-display font-semibold text-warm-beige mb-2">{item.label}</h3>
                  <p className="text-warm-beige/50 text-sm font-body">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES PREVIEW ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-steel-gray/20 relative">
        <div className="absolute inset-0 industrial-texture" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-industrial-orange text-sm font-body tracking-widest uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold heading-underline-center">
              Custom Die & Pattern Manufacturing in Sangli
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass-card rounded-3xl p-8 border border-white/8 hover:border-industrial-orange/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-industrial-orange/20 to-amber-warm/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={26} className="text-industrial-orange" />
                </div>
                <h3 className="font-display font-semibold text-xl text-warm-beige mb-3">
                  {service.title}
                </h3>
                <p className="text-warm-beige/55 font-body text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <Link
                  href="/services"
                  className="text-industrial-orange text-sm font-body font-medium flex items-center gap-1 hover:gap-2 transition-all group/link"
                >
                  Learn more <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-industrial-orange/40 text-industrial-orange hover:bg-industrial-orange hover:text-white rounded-xl font-medium font-body transition-all duration-300"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-industrial-orange text-sm font-body tracking-widest uppercase mb-4 block">
              Why Shreesha
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold heading-underline-center">
              Why Choose Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center p-8 glass-card rounded-3xl border border-white/6 hover:border-industrial-orange/25 transition-all duration-300 group"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-industrial-orange/15 to-amber-warm/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <item.icon size={28} className="text-industrial-orange" />
                </div>
                <h3 className="font-display font-semibold text-warm-beige mb-3">{item.title}</h3>
                <p className="text-warm-beige/50 text-sm font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GOOGLE MAP ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-steel-gray/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <span className="text-industrial-orange text-sm font-body tracking-widest uppercase mb-4 block">
              Find Us
            </span>
            <h2 className="font-display text-4xl font-bold heading-underline-center mb-4">
              Our Location
            </h2>
            <p className="text-warm-beige/50 font-body mt-4">
              Plot No 31, Opp. Savali RTO Office, MIDC Kupwad, Sangli, Maharashtra 416436
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="rounded-3xl overflow-hidden border border-white/8 h-80 md:h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.123!2d74.5!3d16.866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzU3LjYiTiA3NMKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shreesha Engineering Location"
            />
          </motion.div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-industrial-orange/10 via-transparent to-amber-warm/5" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange to-amber-warm">
                Next Project?
              </span>
            </h2>
            <p className="text-warm-beige/60 font-body text-lg mb-10 max-w-2xl mx-auto">
              Get in touch with our team for a free consultation and quote. We work with foundries, auto manufacturers, and industrial firms of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-industrial-orange hover:bg-amber-warm text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-industrial-orange/30 font-body"
              >
                Contact Us Now
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919559133771"
                className="flex items-center justify-center gap-2 px-8 py-4 glass-card border border-white/10 hover:border-industrial-orange/40 text-warm-beige font-semibold rounded-xl transition-all duration-300 font-body"
              >
                <Phone size={18} className="text-industrial-orange" />
                +91 95591 33771
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
