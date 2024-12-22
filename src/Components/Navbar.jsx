import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use';


const Navbar = () => {

  const { y: currentScrollY } = useWindowScroll();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isnavVisible, setIsnavVisible] = useState(true);

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsnavVisible(true);
      navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsnavVisible(false);
      navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsnavVisible(true);
      navContainerRef.current.classList.add('floating-nav')
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY])

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isnavVisible ? 0 : -100,
      opacity: isnavVisible ? 1 : 0,
      duration: 0.1
    })
  }, [isnavVisible])

  const navContainerRef = useRef(null);
  const navItems = ['Nexus', 'Mintex', 'Ronsemeum', 'About', 'Contact'];
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
        <nav className='flex size-full items-center justify-between p-4'>
          <div className='flex items-center'>
            <img src="/img/logo.png" alt="Logo" className='w-14' />
          </div>
          <div className='fel h-full items-center'>
            <div className='hidden md:block'>
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
