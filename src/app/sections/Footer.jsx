
import moto1 from '../../assets/images/moto1.png'
import moto2 from '../../assets/images/moto2.png';

const Footer = () => {
  return (
    <footer className='dark:bg-slate-700 bg-slate-100 text-center py-2'>
      <div className='absolute top-0 left-0 w-full flex justify-between items-center px-4 py-2'>
        <img src={moto1} alt='Moto Logo 1' className='h-10 w-10' />
        <img src={moto2} alt='Moto Logo 2' className='h-10 w-10' />
      </div>
      <p className='text-black'>&copy; 2024 Carlos Velasco</p>
    </footer>
  );
};

export default Footer;