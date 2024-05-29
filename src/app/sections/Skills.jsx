import angu from '../../assets/images/brand-angular.png';
import django from '../../assets/images/brand-django.png';
import git from '../../assets/images/brand-github.png';
import java from '../../assets/images/brand-javascript.png';
import react from '../../assets/images/brand-react.png';
import vercel from '../../assets/images/brand-vercel.png';
import vite from '../../assets/images/brand-vite.png';

const Skills = () => {
  return (
    <section id='skills' className='container mx-auto min-h-screen flex flex-col items-center justify-center px-5 text-white'>
      <div className='pb-10'>
        <div className='text-center'>
          <h3 className='text-3xl font-bold'>HABILIDADES</h3>
          <p className='px-2 mt-3 text-gray-500'>
            En el recorrido de la carrera he aprendido bastante aquí están algunas de las habilidades que he desarrollado y pulido a lo largo de mi carrera.
          </p>
        </div>
        <div className='mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto'>
          <div className='flex flex-col items-center'>
            <img src={java} alt='JavaScript Logo' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>JavaScript</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={angu} alt='Angular Logo' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>Angular</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={django} alt='Django Logo' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>Django</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={react} alt='React Logo' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>React</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={vercel} alt='Vercel Logo' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>Vercel</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={vite} alt='Vite Logo' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>Vite</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src={git} alt='Git Logo' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
