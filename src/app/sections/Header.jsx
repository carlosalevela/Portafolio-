import { useState } from 'react';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='fixed w-full py-4 z-[999] bg-black text-white duration-300'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto px-5'>
        <div className='flex gap-4 items-center'>
          <div className='bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-xl'>
            A
          </div>
          <div>
            <h4 className='font-bold text-lg uppercase'>Carlos Velasco</h4>
            <p className='text-xs'>Profile</p>
          </div>
        </div>
        <ul className={`gap-10 md:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col md:flex-row items-center md:static absolute top-full left-0 w-full md:w-auto bg-black md:bg-transparent md:py-0 py-5`}>
          <li className='hover:text-primary duration-200'>
            <a href='#home'>Home</a>
          </li>
          <li className='hover:text-primary duration-200'>
            <a href='#about'>About Us</a>
          </li>
          <li className='hover:text-primary duration-200'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='hover:text-primary duration-200'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='theme-switch hover:text-primary duration-200'>
            <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
          </li>
        </ul>
        <div className='flex items-center gap-6'>
          <span className='theme-switch md:hidden'>
            <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
          </span>
          <span
            id='menubar'
            className='cursor-pointer md:hidden text-xl'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;

