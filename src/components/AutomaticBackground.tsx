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
    const mobileImage = 'https://i.pinimg.com/originals/dd/4c/c8/dd4cc8d38e714f782dd20a4422499b8e.jpg';
    //'https://th.bing.com/th/id/R.5f003eb6317ac58df422d32c14b612dd?rik=2c98FvnDPXGAWQ&riu=http%3a%2f%2fres.dps.cn%2fres%2fbgimg%2f15097%2fjti154251.jpg&ehk=ZzJvusUZSa3dN7drMOI%2fAozwhT3Zjej14pJ4tg%2f0deo%3d&risl=&pid=ImgRaw&r=0';
    //'https://png.pngtree.com/thumb_back/fw800/back_our/20190623/ourmid/pngtree-summer-green-outing-travel-poster-image_250291.jpg';
    // 
    //'https://wallpapercave.com/wp/wp7109802.jpg';
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
    <body className="bg-cover"
        style={{ backgroundImage: backgroundImg }}>
        {prop.children}
    </body>
  );
}
