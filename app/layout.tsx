import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Shreesha Engineering | CNC Machining & Die Manufacturing Company in Sangli, Maharashtra',
  description:
    'Shreesha Engineering is a leading CNC machining and die manufacturing company in Sangli, Maharashtra, providing high-precision engineering solutions to industrial clients across India. Located in MIDC Kupwad, our facility specializes in custom tooling, pattern making, and industrial component manufacturing.',
  keywords: [
    // Primary Keywords
    'CNC machining Maharashtra',
    'CNC machining Sangli',
    'Precision engineering company Maharashtra',
    'Die manufacturing company India',
    'Pattern shop Maharashtra',
    'Industrial tooling manufacturer',
    'Custom metal fabrication services',
    'CNC milling and turning services',
    'Engineering company in Maharashtra',
    'Industrial component manufacturer',
    // Location-Based Keywords
    'Engineering company in Sangli',
    'CNC machining services in Sangli',
    'MIDC Kupwad engineering company',
    'Precision engineering in Maharashtra',
    'Die and pattern shop in Sangli',
    'Industrial manufacturing company Maharashtra',
    'CNC workshop near Sangli',
    // Long-Tail Keywords
    'High precision CNC machining services in Maharashtra',
    'Custom die and pattern manufacturing in Sangli',
    'Industrial fabrication services for automotive parts',
    'Precision tooling solutions in MIDC Kupwad',
    'Reliable CNC workshop in Maharashtra',
    // Industry-Specific Terms
    'CAD/CAM manufacturing',
    'Tool room services',
    'Heavy engineering components',
    'Industrial machining',
    'Alloy steel components',
    'Prototype development',
    'Mechanical fabrication',
    'Industrial-grade tooling',
    'Production-grade manufacturing',
    // Semantic Keywords
    'Manufacturing excellence',
    'Quality assurance',
    'Skilled technicians',
    'Advanced CNC equipment',
    'State-of-the-art facility',
    'ISO quality standards',
    'Industrial reliability',
    'Custom engineering solutions',
  ],
  openGraph: {
    title: 'Shreesha Engineering | CNC Machining & Die Manufacturing | Sangli Maharashtra',
    description:
      'Leading CNC machining and die manufacturing company in Sangli, Maharashtra. Specialized in custom tooling, pattern making, and industrial component manufacturing.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://shreesha-engineering.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
