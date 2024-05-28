


const Header = () => {
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
        <ul className='gap-10 md:flex hidden hover:text-primary duration-200'>
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
          <li className='theme-switch'>
            <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
          </li>
        </ul>
        <div className='flex items-center gap-6'>
          <a href='#contact'>
            <button className='btn btn-outline md:flex hidden'>
              <i className='fa-regular fa-paper-plane'></i> Lets Talk
            </button>
          </a>
          <span className='theme-switch md:hidden'>
            <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
          </span>
          <span id='menubar' className='cursor-pointer md:hidden text-xl'>
            <i className='fa-solid fa-bars'></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
