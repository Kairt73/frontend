// components/LogoLink.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';

const LogoLink: React.FC = () => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/';
  };

  return (
    <Link href="/" onClick={handleLogoClick} passHref>
      <Image src="/img/Auschlogo.png" alt="ltl" width={80} height={100} />
    </Link>
  );
};

export default LogoLink;
