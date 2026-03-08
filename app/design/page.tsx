'use client';

import DesignNavbar from '../components/DesignNavbar';
import DesignHero from '../components/DesignHero';

export default function DesignPage() {
  return (
    <div className="light-theme min-h-screen bg-[#f8f9fb]">
      <DesignNavbar />
      <DesignHero />
    </div>
  );
}
