import React, { useEffect, useState } from 'react';
import AltHeader from './AltHeader';
import HeaderMobile from './HeaderMobile';
import DesktopHeader from './DesktopHeader';

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 650);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <HeaderMobile /> : <DesktopHeader />}
      <AltHeader />
    </>
  );
}

export default Header;
