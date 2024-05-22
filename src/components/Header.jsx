
const Header = () => {
  return (
    <header className='fixed w-full py-4 z-[999] duration-300 bg-blue-600'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto px-2'>
        <div className='flex gap-4 items-center'>
          <div className='bg-primary text-white rounded-full size-10 text-xl grid place-items-center'>
            <img src='Logo' alt='Logo' className='w-8 h-8' />
          </div>
          <div>
            <h4 className='font-bold text-lg uppercase text-white'>Carlos Velasco</h4>
            <p className='text-xs text-white'>Profile</p>
          </div>
        </div>
        <ul className='gap-10 md:flex hidden'>
          <li>
            <a href='#projects' className='text-white hover:text-gray-300'>Projects</a>
          </li>
          <li>
            <a href='#about' className='text-white hover:text-gray-300'>Sobre Mi</a>
          </li>
          <li>
            <a href='#skills' className='text-white hover:text-gray-300'>Habilidades</a>
          </li>
          <li>
            <a href='#thanks' className='text-white hover:text-gray-300'>Agradecimiento</a>
          </li>
        </ul>
        <div className='flex items-center gap-6'>
          <span id='menubar' className='cursor-pointer md:hidden text-xl text-white'>
            <i className='fa-solid fa-bars'></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
