'use client';
import { useEffect, useState } from 'react';


export function AutomaticBackground(prop: any) {
  const [backgroundImg, setBackgroundImage] = useState('');

  useEffect(() => {
    setBackground();
    window.addEventListener('resize', setBackground);
    return () => {
      window.removeEventListener('resize', setBackground);
    };
  }, []);

  const setBackground = () => {
    const desktopImage = 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6ef35386267195.5d94716770259.png';
    const mobileImage = 'https://wallpapercave.com/wp/wp7109802.jpg';
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const ratio = screenWidth / screenHeight;

    if (ratio >= 1.5) {
      setBackgroundImage(`url(${desktopImage})`);
    } else {
      setBackgroundImage(`url(${mobileImage})`);
    }
  };

  return (
    <body className="h-14 bg-cover"
        style={{ backgroundImage: backgroundImg }}>
        {prop.children}
    </body>
  );
}
