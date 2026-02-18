import Link from 'next/link';
import { MapPin, Phone, Clock, Cog, Mail, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-industrial-orange/40 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-industrial-orange/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-industrial-orange to-amber-warm rounded-lg flex items-center justify-center">
                <Cog size={20} className="text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-warm-beige text-xl block leading-none">
                  Shreesha
                </span>
                <span className="text-industrial-orange text-xs tracking-widest uppercase font-body">
                  Engineering
                </span>
              </div>
            </div>
            <p className="text-warm-beige/50 text-sm font-body leading-relaxed">
              Precision-crafted dies and patterns for industrial excellence. Trusted by manufacturers across Maharashtra.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-warm-beige mb-5 text-base">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-warm-beige/50 hover:text-industrial-orange text-sm font-body transition-colors group"
                  >
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-warm-beige mb-5 text-base">
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: '/services', label: 'Die Manufacturing' },
                { href: '/services', label: 'Pattern Making' },
                { href: '/services', label: 'Precision Engineering' },
                { href: '/services', label: 'Tool & Die Repair' },
                { href: '/services', label: 'Custom Fabrication' },
              ].map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="flex items-center gap-2 text-warm-beige/50 hover:text-industrial-orange text-sm font-body transition-colors group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-industrial-orange/60 group-hover:bg-industrial-orange transition-colors" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-warm-beige mb-5 text-base">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-industrial-orange mt-0.5 shrink-0" />
                <span className="text-warm-beige/50 text-sm font-body leading-relaxed">
                  Plot No 31, Opp. Savali RTO Office,<br />
                  MIDC Kupwad, Sangli, Savali,<br />
                  Maharashtra 416436
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-industrial-orange shrink-0" />
                <a
                  href="tel:+919559133771"
                  className="text-warm-beige/50 hover:text-industrial-orange text-sm font-body transition-colors"
                >
                  +91 95591 33771
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-industrial-orange shrink-0" />
                <a
                  href="mailto:info@shreeshaengineering.com"
                  className="text-warm-beige/50 hover:text-industrial-orange text-sm font-body transition-colors"
                >
                  info@shreeshaengineering.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={16} className="text-industrial-orange shrink-0" />
                <span className="text-warm-beige/50 text-sm font-body">
                  Open · Closes 11:30 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warm-beige/30 text-xs font-body">
            © {currentYear} Shreesha Engineering. All rights reserved.
          </p>
          <p className="text-warm-beige/20 text-xs font-body">
            Die &amp; Pattern Shop · MIDC Kupwad, Sangli
          </p>
        </div>
      </div>
    </footer>
  );
}

