import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Shreesha Engineering | CNC Machining & Die Manufacturing Inquiry',
  description:
    'Contact Shreesha Engineering, a leading CNC machining and die manufacturing company in Sangli, Maharashtra. Reach us at Plot No 31, MIDC Kupwad for precision engineering services. Call +91 95591 33771 or fill out our inquiry form for custom tooling and industrial component manufacturing.',
  keywords: [
    // Local Keywords - IMPORTANT for Contact page
    'contact CNC machining',
    'contact die manufacturing',
    'pattern making inquiry',
    'precision engineering contact',
    'Shreesha Engineering Sangli',
    'die shop contact number',
    'foundry pattern suppliers',
    'get quote die manufacturing',
    'contact form',
    'inquiry',
    'customer support',
    // Location-Based
    'CNC machining services in Sangli',
    'engineering company in Sangli',
    'MIDC Kupwad engineering company',
    'die manufacturer Sangli',
    'tool room MIDC Kupwad',
    // Industrial B2B
    'industrial manufacturing inquiry',
    'custom fabrication quote',
    'precision tooling services',
    'CNC workshop contact',
  ],
  openGraph: {
    title: 'Contact Us | Shreesha Engineering | CNC Machining Company Sangli',
    description:
      'Contact Shreesha Engineering for CNC machining, die manufacturing, and precision engineering services in Sangli, Maharashtra.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

