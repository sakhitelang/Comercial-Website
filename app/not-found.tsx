'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Cog } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4 relative overflow-hidden industrial-texture">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-industrial-orange/6 rounded-full blur-3xl" />

      <div className="text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Gear */}
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="w-24 h-24 bg-gradient-to-br from-industrial-orange/20 to-amber-warm/10 rounded-full flex items-center justify-center border border-industrial-orange/20"
            >
              <Cog size={48} className="text-industrial-orange/60" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="font-display text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-industrial-orange to-amber-warm mb-4">
              404
            </h1>
            <h2 className="font-display text-2xl font-bold text-warm-beige mb-4">
              Page Not Found
            </h2>
            <p className="text-warm-beige/50 font-body text-base mb-10 max-w-sm mx-auto">
              Looks like this page got lost in the workshop. Let's get you back on track.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 px-6 py-3 bg-industrial-orange hover:bg-amber-warm text-white font-medium rounded-xl transition-all duration-300 font-body"
              >
                <Home size={18} />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-6 py-3 glass-card border border-white/10 text-warm-beige hover:border-industrial-orange/40 font-medium rounded-xl transition-all duration-300 font-body"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
