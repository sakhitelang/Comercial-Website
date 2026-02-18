'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  MessageSquare,
  CheckCircle,
  Clock,
  LogOut,
  Cog,
  RefreshCw,
  Mail,
  Phone,
  Calendar,
  User,
  ChevronDown,
} from 'lucide-react';

interface Inquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  createdAt: string;
}

interface Stats {
  total: number;
  newCount: number;
  readCount: number;
  repliedCount: number;
}

const statusColors = {
  new: 'bg-industrial-orange/15 text-industrial-orange border-industrial-orange/30',
  read: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
  replied: 'bg-green-500/15 text-green-400 border-green-500/30',
};

export default function DashboardPage() {
  const router = useRouter();
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [stats, setStats] = useState<Stats>({ total: 0, newCount: 0, readCount: 0, repliedCount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getToken = () =>
    typeof window !== 'undefined' ? localStorage.getItem('admin_token') : null;

  const fetchData = useCallback(async () => {
    setLoading(true);
    const token = getToken();
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.status === 401) {
        localStorage.removeItem('admin_token');
        router.push('/login');
        return;
      }

      const data = await res.json();
      setInquiries(data.inquiries || []);
      setStats(data.stats || { total: 0, newCount: 0, readCount: 0, repliedCount: 0 });
    } catch {
      setError('Failed to load inquiries.');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = async (id: string, status: string) => {
    const token = getToken();
    await fetch(`/api/contact/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }),
    });
    fetchData();
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/login');
  };

  const statCards = [
    { label: 'Total Inquiries', value: stats.total, icon: MessageSquare, color: 'from-industrial-orange/20 to-amber-warm/10' },
    { label: 'New', value: stats.newCount, icon: Clock, color: 'from-industrial-orange/20 to-amber-warm/10' },
    { label: 'Read', value: stats.readCount, icon: LayoutDashboard, color: 'from-blue-500/20 to-blue-400/10' },
    { label: 'Replied', value: stats.repliedCount, icon: CheckCircle, color: 'from-green-500/20 to-green-400/10' },
  ];

  return (
    <div className="min-h-screen bg-charcoal text-warm-beige">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-charcoal/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-industrial-orange to-amber-warm rounded-lg flex items-center justify-center">
              <Cog size={16} className="text-white" />
            </div>
            <div>
              <span className="font-display font-bold text-warm-beige text-base">Admin Dashboard</span>
              <span className="text-warm-beige/40 text-xs font-body ml-2">Shreesha Engineering</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={fetchData}
              className="p-2 text-warm-beige/50 hover:text-warm-beige glass-card rounded-lg border border-white/8 transition-all"
              title="Refresh"
            >
              <RefreshCw size={16} />
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-body text-warm-beige/60 hover:text-warm-beige glass-card border border-white/8 rounded-lg transition-all"
            >
              <LogOut size={15} />
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Welcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="font-display text-3xl font-bold mb-1">Welcome back, Admin</h1>
          <p className="text-warm-beige/50 font-body text-sm">
            {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {statCards.map((card, i) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card rounded-2xl p-6 border border-white/8 bg-gradient-to-br ${card.color}`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-warm-beige/50 text-sm font-body">{card.label}</span>
                <card.icon size={18} className="text-industrial-orange" />
              </div>
              <div className="font-display text-4xl font-bold text-warm-beige">{card.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Inquiries Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card rounded-3xl border border-white/8 overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-white/5 flex items-center justify-between">
            <div>
              <h2 className="font-display text-xl font-bold text-warm-beige">Contact Inquiries</h2>
              <p className="text-warm-beige/40 text-xs font-body mt-0.5">All customer submissions</p>
            </div>
            <span className="px-3 py-1 bg-industrial-orange/15 border border-industrial-orange/30 rounded-full text-industrial-orange text-xs font-body">
              {stats.newCount} new
            </span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-white/10 border-t-industrial-orange rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-16 text-warm-beige/40 font-body">{error}</div>
          ) : inquiries.length === 0 ? (
            <div className="text-center py-16">
              <MessageSquare size={32} className="text-warm-beige/20 mx-auto mb-3" />
              <p className="text-warm-beige/40 font-body">No inquiries yet</p>
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {inquiries.map((inquiry) => (
                <div key={inquiry._id} className="hover:bg-white/2 transition-colors">
                  <div
                    className="px-6 py-4 flex items-center justify-between cursor-pointer"
                    onClick={() =>
                      setExpandedId(expandedId === inquiry._id ? null : inquiry._id)
                    }
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-9 h-9 bg-industrial-orange/15 rounded-full flex items-center justify-center shrink-0">
                        <User size={16} className="text-industrial-orange" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-body font-medium text-warm-beige text-sm">{inquiry.name}</p>
                        <p className="text-warm-beige/40 text-xs font-body truncate">{inquiry.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-body border capitalize ${statusColors[inquiry.status]}`}
                      >
                        {inquiry.status}
                      </span>
                      <span className="text-warm-beige/30 text-xs font-body hidden md:block">
                        {new Date(inquiry.createdAt).toLocaleDateString('en-IN')}
                      </span>
                      <ChevronDown
                        size={16}
                        className={`text-warm-beige/30 transition-transform ${
                          expandedId === inquiry._id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {expandedId === inquiry._id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="bg-white/3 rounded-2xl p-5 border border-white/6 space-y-4">
                        <div className="grid sm:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2 text-sm font-body">
                            <Mail size={14} className="text-industrial-orange" />
                            <a href={`mailto:${inquiry.email}`} className="text-warm-beige/70 hover:text-industrial-orange transition-colors truncate">
                              {inquiry.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-body">
                            <Phone size={14} className="text-industrial-orange" />
                            <a href={`tel:${inquiry.phone}`} className="text-warm-beige/70 hover:text-industrial-orange transition-colors">
                              {inquiry.phone}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-sm font-body text-warm-beige/50">
                            <Calendar size={14} className="text-industrial-orange" />
                            {new Date(inquiry.createdAt).toLocaleString('en-IN')}
                          </div>
                        </div>
                        <div>
                          <p className="text-warm-beige/40 text-xs font-body uppercase tracking-wider mb-2">Message</p>
                          <p className="text-warm-beige/70 text-sm font-body leading-relaxed bg-white/3 rounded-xl p-4 border border-white/5">
                            {inquiry.message}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-warm-beige/40 text-xs font-body">Update status:</span>
                          {(['new', 'read', 'replied'] as const).map((s) => (
                            <button
                              key={s}
                              onClick={() => handleStatusChange(inquiry._id, s)}
                              className={`px-3 py-1 rounded-full text-xs font-body border capitalize transition-all ${
                                inquiry.status === s
                                  ? statusColors[s]
                                  : 'border-white/10 text-warm-beige/40 hover:border-white/20'
                              }`}
                            >
                              {s}
                            </button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
