import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Shreesha Engineering | CNC Machining, Die Manufacturing & Pattern Making in Sangli',
  description:
    'Explore Shreesha Engineering comprehensive CNC machining, die manufacturing, and pattern making services in Sangli, Maharashtra. We offer precision CNC milling and turning, press dies, forging dies, wooden and aluminium patterns, industrial fabrication, and custom tooling solutions for automotive and foundry industries across India.',
  keywords: [
    // High-Intent Keywords - Services Page
    'CNC machining services',
    'die manufacturing services',
    'pattern making services',
    'precision engineering',
    'press dies',
    'forging dies',
    'foundry patterns',
    'wooden patterns',
    'aluminium patterns',
    'CNC machining Maharashtra',
    'CNC machining Sangli',
    'die manufacturer India',
    'pattern shop Maharashtra',
    // Location-Based
    'CNC machining services in Sangli',
    'die manufacturing in Sangli',
    'pattern making Maharashtra',
    'industrial tooling Sangli',
    'MIDC Kupwad die shop',
    // Industrial B2B
    'custom metal fabrication services',
    'CNC milling and turning services',
    'industrial component manufacturer',
    'tool room services',
    'jigs and fixtures manufacturing',
    'prototype development services',
    // Long-Tail Keywords
    'high precision CNC machining services in Maharashtra',
    'custom die and pattern manufacturing in Sangli',
    'industrial fabrication services for automotive parts',
    'precision tooling solutions in MIDC Kupwad',
  ],
  openGraph: {
    title: 'Our Services | Shreesha Engineering | CNC Machining & Die Manufacturing',
    description:
      'Explore comprehensive CNC machining, die manufacturing, and pattern making services in Sangli, Maharashtra.',
    type: 'website',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

