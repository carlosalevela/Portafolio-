import { useState } from 'react';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:hidden'>
      <button onClick={toggleMenu} className='text-white'>
        <i className='fa-solid fa-bars text-xl'></i>
      </button>
      <ul
        id='mobile-nav'
        className={`gap-10 text-xl dark:bg-slate-800 bg-primary text-white flex-center flex-col fixed w-full overflow-hidden bottom-0 duration-200 rounded-t-3xl left-0 z-[998] ${isOpen ? 'h-auto' : 'h-0'}`}
      >
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About Us</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#contact'>Contact Us</a>
        </li>
        <li>
          <a href='#contact'>
            <button className='btn btn-outline'>
              <i className='fa-regular fa-paper-plane'></i> Lets Talk
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMobile;
