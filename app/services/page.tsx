'use client';

import { motion } from 'framer-motion';
import { Wrench, Layers, Target, Hammer, Settings, Cpu } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    title: 'Die Manufacturing',
    tagline: 'Precision-engineered for every press',
    desc: 'Our die manufacturing facility produces progressive dies, blanking dies, forming dies, compound dies, and forging dies. Each die is designed for optimal material flow, minimal wear, and maximum production efficiency. We work with tool steels, carbide inserts, and advanced surface treatments.',
    features: [
      'Progressive and compound dies',
      'Blanking, piercing & forming dies',
      'Forging & casting dies',
      'Die polishing & surface treatment',
      'Wire EDM, CNC milling & grinding',
    ],
  },
  {
    icon: Layers,
    title: 'Pattern Making',
    tagline: 'The foundation of every good casting',
    desc: 'Pattern making is both an art and a science. Our master pattern makers design and craft patterns in wood, aluminium, and resin that account for shrinkage, draft angles, and parting line geometry with exceptional accuracy. We cater to grey iron, SG iron, and non-ferrous foundries.',
    features: [
      'Wood patterns (teak, pine, MDF)',
      'Aluminium patterns & match plates',
      'Resin & GRP patterns',
      'Core boxes & loose piece patterns',
      'Split & skeleton patterns',
    ],
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    tagline: 'Tight tolerances, every time',
    desc: 'Our precision machining division handles custom components requiring tight tolerances (up to IT6 grade). Equipped with CNC lathes, VMCs, and surface grinders, we produce jigs, fixtures, gauges, and special-purpose machine components.',
    features: [
      'CNC turning & milling',
      'Surface & cylindrical grinding',
      'Jig & fixture design and manufacture',
      'Gauge & inspection tools',
      'Custom OEM components',
    ],
  },
  {
    icon: Hammer,
    title: 'Die & Tool Repair',
    tagline: 'Restore performance, extend life',
    desc: 'We offer comprehensive die and tool repair services to minimize downtime. From re-sharpening and re-grinding to major rework and refurbishment, our technicians restore worn dies and patterns to original specifications — often at a fraction of replacement cost.',
    features: [
      'Die re-sharpening & reconditioning',
      'Pattern repair & modification',
      'Inserts replacement & regrinding',
      'Emergency breakdown support',
      'Performance improvement modifications',
    ],
  },
  {
    icon: Settings,
    title: 'Custom Fabrication',
    tagline: 'Your design, our execution',
    desc: 'Have a custom engineering requirement? Our team handles special fabrication projects from concept to completion. We work with your drawings or help develop them, and deliver components ready for installation.',
    features: [
      'Special purpose components',
      'Prototype development',
      'Reverse engineering services',
      'Material selection consulting',
      'Drawing & documentation support',
    ],
  },
  {
    icon: Cpu,
    title: 'CAD/CAM Support',
    tagline: 'Modern design for modern manufacturing',
    desc: 'Our in-house CAD/CAM capability ensures that complex geometries are designed and machined with precision. We can work from customer-supplied models or create designs from scratch to accelerate your product development cycle.',
    features: [
      '3D CAD modelling support',
      'CAM toolpath programming',
      'DFM (Design for Manufacturing) review',
      'File format conversion (STEP, IGES, DXF)',
      'Engineering drawing preparation',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-charcoal text-warm-beige">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative industrial-texture">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-transparent to-charcoal opacity-80" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-industrial-orange text-sm font-body tracking-widest uppercase mb-4 block">
              What We Offer
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Our{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange to-amber-warm">
                Services
              </span>
            </h1>
            <p className="text-warm-beige/60 font-body text-lg leading-relaxed">
              End-to-end die and pattern solutions designed for foundries, auto-component manufacturers, and industrial fabricators across Maharashtra.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i % 2}
              variants={fadeUp}
              className="glass-card rounded-3xl p-8 md:p-10 border border-white/8 hover:border-industrial-orange/25 transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-industrial-orange/25 to-amber-warm/10 rounded-2xl flex items-center justify-center">
                      <service.icon size={26} className="text-industrial-orange" />
                    </div>
                    <div>
                      <div className="text-industrial-orange text-xs font-body tracking-wider uppercase mb-1">
                        {service.tagline}
                      </div>
                      <h3 className="font-display text-2xl font-bold text-warm-beige">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-warm-beige/60 font-body text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div>
                  <h4 className="font-body font-medium text-warm-beige/80 mb-4 text-sm uppercase tracking-wider">
                    Key Capabilities
                  </h4>
                  <ul className="space-y-2.5">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-body text-warm-beige/65">
                        <span className="w-1.5 h-1.5 rounded-full bg-industrial-orange shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects/Clients Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-steel-gray/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="text-industrial-orange text-sm font-body tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold heading-underline-center">
              Trusted by Leading Manufacturers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Deccan Industries',
              'Indu Engineering',
              'Kanjo Industries',
              'Jagadish Iron & Casting',
              'Fino Iron Cast',
              'Alufine Engineering',
              'Dnyan Engineering',
            ].map((client, i) => (
              <motion.div
                key={client}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass-card rounded-2xl p-6 border border-white/8 hover:border-industrial-orange/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-industrial-orange/20 to-amber-warm/10 rounded-xl flex items-center justify-center mb-3">
                  <Target size={20} className="text-industrial-orange" />
                </div>
                <h3 className="font-display font-semibold text-warm-beige text-sm">
                  {client}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center text-warm-beige/50 text-sm font-body mt-8"
          >
            And 150+ more satisfied clients across Maharashtra
          </motion.p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-orange/10 to-amber-warm/5" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-warm-beige/60 font-body mb-8">
              We take on complex, non-standard projects. Reach out and let's discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-industrial-orange hover:bg-amber-warm text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-industrial-orange/25 font-body"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
